---
title: "I Deleted the Cache Invalidation From Every Write Path"
description: "Manual cache invalidation is a promise every writer has to keep, and the promise nobody notices until it breaks. So I stopped asking the code to remember and made the database do the remembering — Postgres WAL to Redis DEL, zero polling, measured."
date: "2026-09-25"
tags: ["go", "redis", "postgres", "cdc"]
draft: false
---

A cache is only correct if every single write path remembers to invalidate it.

API handler, admin panel, one-off script, the bulk import you wrote at 2am, the migration. Each one has to remember, or you serve stale data forever. And the miss is silent — nothing throws, no alert fires. You find out from a user.

So the invalidation lived in the code, scattered across code paths, waiting to rot. I got tired of trusting it, so I deleted it from the write paths entirely.

## The swap

Instead of every writer telling the cache what changed, one watcher watches committed data and invalidates on its own.

```
Write → Postgres commits → WAL event → hash router → DEL table:id → next read repopulates
```

Every committed change is already in Postgres's write-ahead log. Watching it costs the writer nothing and can't miss a commit. Triggers would tax every write; polling would always be late.

The watcher is [phylax](https://github.com/codetesla51/phylax), my logical replication client, doing the sharp-edge work — slot and publication lifecycle, keepalives, reconnect with backoff, LSN resume. The app itself implements one callback. [redis-cdc-invalidation](https://github.com/codetesla51/redis-cdc-invalidation) is the whole pattern, measured.

The nice part is what happens to coverage. Adding a new writer now needs zero changes, because coverage comes from the database, not from your code.

## Details that turned into the actual work

**Hash routing, not random.** `pool = fnv32a(id) % N` sends every change for one row ID to the same pool, so per-key order survives while different IDs scatter across pools for parallelism. Same idea as a Kafka partition key. FNV because it needs to be fast and deterministic, not cryptographic.

**One worker per pool, never two.** This is the part I'd get wrong if I wrote it carelessly. Each pool runs a single task at a time, so two rapid updates to the same row invalidate in commit order. Bump a pool to 2+ workers and an older state can win the race. The design collapses from "correct" to "usually correct," which is broken. Across pools, everything runs concurrently.

**`DEL`, not recompute.** Delete-then-lazy-repopulate is one round trip, no serialization code to maintain, and it's idempotent — replayed events are harmless. Recomputing only pays off for keys so hot that a cold miss actually hurts, and that's a decision you make with a number in front of you, not in advance.

**A TTL as the backstop, not the plan.** Rows expire after 5 minutes, so even a missed `DEL` self-heals. A no-op `DEL` measured around 165µs, so deletes fire on every write without thinking. `DEL` does the real work; the TTL bounds the worst case.

## Scaling past one box

Direct mode — replication and invalidation in the same process — can't share work across machines, because every process would read the same slot and receive every change. So `MODE=produce` publishes batched `XADD` records to a Redis stream, and any number of `MODE=consume` processes share a consumer group. Each entry goes to exactly one worker, which deletes the key and only then acknowledges it.

At-least-once delivery, not exactly-once. Unacknowledged entries stay pending and get redelivered. That's fine precisely because `DEL` is idempotent.

A 30-second, 500-key flood at roughly 3.7k writes/sec, both legs together:

| Consumers | Work distribution | Group backlog |
|---|---|---|
| 1 | 109,999 invalidations, all on one worker | 29–98 during the run, then drained |
| 4 | ~27,500 per worker, evenly split | Drained to 0 during the run |

Database P99 barely moved, 35ms to 37ms. More consumers help the invalidation stage keep up. They do not make Postgres commits faster, and I'd rather say that plainly than let the table imply otherwise. This proves sharing from 1 to 4 consumers, not unlimited capacity.

## Numbers

1.19M writes at 100% success, P99 103ms, zero drops. Invalidation lag p50 7.5ms, p99 13ms. Cache hit 0.06ms against a miss at 0.28ms. Redis down and reads still work — a circuit breaker skips the cache after 3 consecutive failures, so a read with Redis down costs about 0.2ms instead of ~200ms of dial retries.

## What it doesn't fix

Lag is inherent, not zero. Commit to WAL to handler to Redis is milliseconds. Any path that needs read-your-writes still wants a targeted inline invalidation next to the write, alongside the CDC.

Hot keys stampede. After a `DEL`, concurrent readers pile onto Postgres to repopulate. `singleflight` in the read path already collapses same-key misses into one flight — 30 readers on one key went from a 50ms wall to 7.6ms — but a key hot enough to outgrow even that needs a shorter TTL or actual recompute.

And while the watcher is down, WAL piles up in the replication slot. Restart means replaying that mountain. Alert on slot growth, or find out the slow way.

## Copy it, don't deploy it

This is a reference implementation. The README is explicit about the intent: it exists to prove the pattern with real numbers and be copied from. I don't think the CDC path should ever be the *only* thing keeping a cache honest — but it should be the thing that means a forgotten `DEL` stops being a bug that ships.
