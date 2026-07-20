---
title: Building a Job Queue From Scratch in Go
description: How I built Kyu, a distributed job queue backed by PostgreSQL and Redis, with retries, scheduling, and a stale job reaper.
date: 2025-01-15
tags: [Go, PostgreSQL, Redis, Systems]
draft: false
---

Every job queue I'd used before felt like a black box. Things went in, things came out, and when they didn't, I had no idea why. So I built my own.

## Why Build Another One?

The existing options — Sidekiq, Bull, Celery — all assume you're running their ecosystem. I wanted something that fit into a Go backend without dragging in a Ruby runtime or a Node process. I wanted to understand every line.

## The Architecture

Kyu uses PostgreSQL as the source of truth and Redis for fast lookups. Jobs are stored in a `jobs` table with state tracking, retry counts, and scheduled-at timestamps.

```go
type Job struct {
    ID          int64
    Queue       string
    Payload     []byte
    Status      string
    Attempts    int
    MaxAttempts int
    ScheduledAt time.Time
    CreatedAt   time.Time
    UpdatedAt   time.Time
}
```

The core loop polls PostgreSQL for jobs that are ready to run, claims them with a row-level lock, and dispatches them to worker goroutines.

## Handling Failures

When a job fails, it gets requeued with an exponential backoff. The retry delay doubles each time: 1s, 2s, 4s, 8s, up to a configurable maximum. After max attempts, the job moves to a `dead_letter` table for manual inspection.

## The Stale Job Reaper

Sometimes a worker crashes while holding a job. The reaper runs every 30 seconds, finds jobs that have been `in_progress` for longer than their timeout, and resets them to `pending` so they can be retried.

```sql
UPDATE jobs 
SET status = 'pending', worker_id = NULL 
WHERE status = 'in_progress' 
AND updated_at < NOW() - INTERVAL '5 minutes';
```

## Benchmarks

With 100 concurrent workers and a 16-core machine, Kyu processes jobs at **52 nanoseconds per operation** with zero heap allocations in the hot path. That's not a typo — 52ns.

## What I Learned

Building this taught me more about distributed systems than any tutorial ever did. Race conditions, connection pooling, graceful shutdown — you don't understand these until you've broken them yourself.
