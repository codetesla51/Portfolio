---
title: "I Didn't Want Another Polling Flag Service, So I Used Postgres LISTEN/NOTIFY"
description: "Flick stores flags in Postgres and pushes every change to flagd in milliseconds — no polling, no WAL setup, no missed updates. Here's the architecture that made it work, and the subscribe-first trick that saved it."
date: "2026-08-20"
tags: ["go", "postgres", "feature-flags", "architecture"]
draft: true
ogImage: ""
---

Flick started with a stupidly simple question: why do feature flags need a whole platform?

I had 65 repos, most of them Go, and every flag service I looked at wanted me to hand over the one thing that should just be data — a row in Postgres. A new dashboard, a new SDK, a new place where flags live that isn't my database. I didn't want that. I wanted `UPDATE flags SET state = 'ENABLED'` to be enough, and I wanted my app to see it in milliseconds without polling.

So I built [Flick](https://github.com/codetesla51/flick). One library (`package flick`) + one CLI. Postgres-native flags, live-synced to [flagd](https://flagd.dev) over gRPC. No polling anywhere.

This is the architecture that actually held up.

## The split: flick stores, flagd evaluates

The first decision was what *not* to build.

Flick never answers "what should this user see?" Only "here's the config." Your app talks to flagd, flagd evaluates from its own in-memory copy — sub-millisecond, no per-request DB hits. Flick is the source; flagd is the evaluator.

```
you → flick set flag ─┐
                      ├─→ Postgres (flags table)
flick serve ─ LISTEN ─┘        │
   │                           │
   └─ Hub ─ SyncFlags stream ─→ flagd (in-memory) → your app (OpenFeature SDK)
```

Three hops, two processes. Flick and your app never talk to each other.

## Why not polling (and why not WAL)

I have a Postgres logical replication client — [Phylax](https://github.com/codetesla51/phylax) — that streams WAL at ~37k changes/s. I could have used it. WAL is cool. WAL also needs `wal_level=logical`, a replication slot, a publication, and a role with `REPLICATION` privilege. Most managed Postgres won't give you that without a fight, and it shouldn't have to for feature flags.

Polling is worse. Every second, every flagd instance asks "anything new?" Most answers are "no." You pay in latency and DB load for nothing.

Postgres has had `LISTEN/NOTIFY` forever. It works on *any* Postgres, including managed ones. Zero setup. The trick is making it reliable.

## The write path — one transaction, or it didn't happen

```go
// SetFlag — the flag write and its pg_notify commit atomically
tx, _ := pool.Begin(ctx)
tx.Exec(ctx, `INSERT INTO flags ... ON CONFLICT (key) DO UPDATE ...`, key, state, ...)
payload, _ := json.Marshal(map[string]any{"key": key})
tx.Exec(ctx, "SELECT pg_notify($1, $2)", "flick_flags", payload)
return tx.Commit(ctx)
```

Postgres only delivers a `NOTIFY` when the transaction commits. Roll back the transaction and the notify never fires. The flag row and its push are atomic — a change is never half-applied or half-pushed.

The payload is just the key (plus `"deleted": true` for deletes) — comfortably under the 8 KB `NOTIFY` limit. The consumer re-reads the row by key, so the pushed delta always reflects committed state. If a flag is changed then deleted before we re-read it, we converge on delete. That's right.

Delete is the same shape:

```go
tag, _ := tx.Exec(ctx, `DELETE FROM flags WHERE key = $1`, key)
if tag.RowsAffected() == 0 {
    return tx.Commit(ctx) // absent key — no notify, no lie
}
payload, _ := json.Marshal(map[string]any{"key": key, "deleted": true})
tx.Exec(ctx, "SELECT pg_notify($1, $2)", "flick_flags", payload)
return tx.Commit(ctx)
```

If you `UPDATE flags` by hand with raw SQL, nothing fires. That's intentional. Every flag change goes through `SetFlag` / `DeleteFlag` / `flick set` — same functions that fire the notify. Bare SQL is invisible until a client reconnects and gets a fresh snapshot. The docs say it loudly: *do not UPDATE flags directly.*

## The Hub — drop, don't block

The notify layer re-reads the flag row and publishes a delta to a Hub. The Hub fans it to every `SyncFlags` stream.

The one rule: publishing never blocks.

```go
const hubBufferSize = 256

func (h *Hub) Publish(payload map[string]any) {
    h.mu.Lock()
    defer h.mu.Unlock()
    for id, c := range h.subs {
        select {
        case c <- payload:
        default:
            log.Printf("hub: dropping delta for subscriber %d (buffer full)", id)
        }
    }
}
```

Each subscriber gets a buffered channel (256). If it's full, the delta is dropped and logged. A slow flagd never stalls the stream consumer. The dropped delta self-heals on reconnect — flagd breaks the stream, reconnects, and gets a full snapshot. The Hub is `256` for flagd sync; the console feed uses `64` with a 50-event replay so a newly opened browser has context.

This is the same pattern Kyu uses for job dispatch: bounded buffers + drop + snapshot on reconnect. It keeps the hot path from being held hostage by the slowest consumer.

## SyncFlags — subscribe first, then snapshot

This is the part I almost got wrong the first time.

If you snapshot first and *then* subscribe, anything that lands between those two steps is lost. The fix is dumb and correct: subscribe *before* you do any snapshot work. Arrivals during the snapshot build just sit buffered.

```go
func (s *SyncService) SyncFlags(_ *syncv1.SyncFlagsRequest, stream syncv1.FlagSyncService_SyncFlagsServer) error {
    ctx := stream.Context()

    // 1. Register before anything else — nothing is missed mid-snapshot.
    id, ch := s.hub.Subscribe()
    defer s.hub.Unsubscribe(id)

    // 2+3. Build and send the initial snapshot; arrivals buffer in ch meanwhile.
    rows, _ := loadFlags(ctx, s.pool)
    current := flagEventsToState(rows)
    s.sendSnapshot(stream, current)

    // 4+5. Flush buffered deltas, then forward every new delivery.
    for {
        select {
        case <-ctx.Done():
            return nil
        case payload := <-ch:
            current, _ = ApplyDelta(current, payload)
            s.sendSnapshot(stream, current)
        }
    }
}
```

Every message after the snapshot is a full `{"flags": {...}}` document, not a patch. Even a missed intermediate update converges on the final state. `ApplyDelta` is just a map merge — delete or upsert one key, remarshal, send.

## LISTEN/NOTIFY is at-most-once — and that's fine

A `NOTIFY` sent while the flick sync server is down is lost. I didn't try to make it exactly-once. I made staleness bounded.

While flick is up, changes arrive live via `LISTEN flick_flags`. While flick is down, changes accumulate in `flags` — and when flagd's stream breaks it reconnects with backoff and gets a fresh snapshot from `loadFlags`. Every flag change is a full snapshot, so the reconnect always converges.

The notify layer itself reconnects too:

```go
for {
    err := n.runOnce(ctx)
    if ctx.Err() != nil {
        return nil
    }
    log.Printf("notify: stream error: %v; reconnecting in %s", err, time.Second)
    select {
    case <-time.After(time.Second):
    case <-ctx.Done():
        return nil
    }
}
```

`runOnce` does `LISTEN flick_flags` and blocks on `WaitForNotification`. On disconnect it returns, the loop logs, waits a second, and tries again. The ready channel closes after the first successful `LISTEN` so `flick init` can probe it.

## The probe that actually proves it

`flick init` doesn't just run migrations. It runs a live end-to-end probe: listen on a test channel from one connection, send a notify from a second. If anything is broken — network, permissions, `pg_hba` — it tells you exactly what and how to fix it. I stole this idea from how `flick serve` actually works, just shrunk to a test channel. If the probe passes, streaming will work.

## What I didn't do

No `wal_level`, no slots, no outbox table that lives forever (flick had one, then dropped it — the outbox was a stepping stone to `LISTEN/NOTIFY` and the trigger that fed it was more moving parts than the whole notify layer). No polling. No extra platform. Flags stay in Postgres where they were already going to be backed up, audited, and joined against.

The whole thing is one `package flick` you can import and one `cmd/flick` you run. `flick set`, `flick get`, `flick list`, `flick delete`, `flick export`/`import` for backups, a console on `:8016` with SSE for live changes. `-race` clean against a real Postgres.

Don't take my word for it. Look below — it's all `go test -race` in CI and a `docker run postgres:16` away on your machine.

```sh
go install github.com/codetesla51/flick/cmd/flick@latest
flick init
flick serve # :8015 sync → flagd, :8016 console
```

Your app still never talks to flick. That's the point.
