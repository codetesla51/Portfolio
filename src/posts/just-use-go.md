---
title: "Just Use Go"
description: "Coming from PHP, JavaScript, and Ruby, Go is the first language that made me want to understand what my code was doing. Here's why."
date: "2026-07-20"
tags: ["go", "opinion"]
draft: false
ogImage: "https://raw.githubusercontent.com/codetesla51/web-site-files/refs/heads/main/images/1000819989-removebg-preview.png"
---

![Go gopher](https://raw.githubusercontent.com/codetesla51/web-site-files/refs/heads/main/images/1000819989-removebg-preview.png)

I came from PHP, JavaScript, and Ruby. All three are fine languages. None of them made me actually want to understand what my code was doing.

Go did. That's the whole pitch.

## It's simple to write

Not "simple" as in dumbed down — simple as in there's usually one obvious way to do a thing, not five clever ones. No decorators, no metaprogramming tricks, no framework magic doing god-knows-what behind an annotation.

You read a Go file top to bottom and you know what it does. That sounds like a small thing until you've spent an hour in someone else's Ruby codebase trying to figure out which module silently overrode a method three files away.

## It doesn't hide anything from you

This is the big one. PHP and JS let you get away with not understanding what's happening under the hood — implicit type coercion, magic globals, whatever. Go doesn't let you do that.

What you write is what runs. No hidden control flow, no surprise behavior from a language feature you forgot existed.

## Error handling that's actually explicit

`if err != nil` gets memed on constantly, and yeah, it's repetitive. But it's also honest. Every place your code can fail is right there in front of you, not thrown three call stacks away where you have to remember to catch it.

I stopped writing bugs where I forgot to handle a failure case, because Go makes it structurally awkward to ignore one.

## Concurrency that doesn't make you want to quit

Goroutines and channels made concurrent code feel approachable for the first time. Compare that to callback hell in JS or thread management in Ruby — Go just gives you `go func() {}` and a channel to talk to it, and it works the way you'd expect.

Here's a small HTTP server. This is the whole thing — no framework, no boilerplate:

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Hello, World!")
    })

    http.ListenAndServe(":8080", nil)
}
```

See how simple this is? No decorators, no config file, no `@app.route` magic. Import the standard library, register a handler, start the server. That's it — and it's already production-viable.

Now spin up 10,000 of those handlers running concurrently without breaking a sweat:

```go
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    for w := 1; w <= 10000; w++ {
        go worker(w, jobs, results)
    }

    for j := 1; j <= 100; j++ {
        jobs <- j
    }
    close(jobs)
}
```

No thread pools to configure. No async/await ceremony. Just `go` and a channel.

## It compiles fast, and that matters more than people admit

Fast compilation means fast feedback loops, which means I stay in flow instead of context-switching while I wait for a build. Small thing on its own. Compounds hard over a full day of building.

## So, just use Go

I'm not saying Go is the best language for everything — it isn't. But for backend systems, for the kind of stuff I actually want to build, it's the first language that got out of my way instead of getting in it.

Stop overthinking the framework choice. Stop reading ten more "Go vs [language]" comparison posts. Just fucking use Go and see for yourself.
