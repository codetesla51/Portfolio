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

You read a Go file top to bottom and you know what it does.

## It has almost no keywords

Go has **25 keywords**. Total. That's the entire vocabulary of the language's control flow and structure — `if`, `for`, `func`, `var`, `const`, `type`, `struct`, `interface`, `go`, `chan`, `select`, `defer`, `return`, and a handful more, and that's it. Compare that to languages with decorators, generics syntax, multiple loop constructs, and half a dozen ways to declare a function.

A small keyword count means there's less to memorize and less surface area for "clever" code that only the person who wrote it can read six months later.

## It compiles absurdly fast

Go compiles a full program in a fraction of the time most compiled languages take — often under a second for small-to-medium projects. That's not a minor convenience. Fast compilation means a fast feedback loop, which means you stay in flow instead of context-switching every time you wait on a build. It compounds hard over a full day of writing code.

## Error handling that's actually explicit

`if err != nil` gets memed on constantly, and yeah, it's repetitive. But it's also honest. Every place your code can fail is right there in front of you, not thrown three call stacks away where you have to remember to catch it.

## Concurrency that doesn't make you want to quit

This is the part that sold me. Compare it to callback hell in JS or thread management in Ruby. In Go, you write `go` in front of a function call, and it just runs concurrently:

```go
package main

import (
    "fmt"
    "time"
)

func sayHello() {
    fmt.Println("Hello from a goroutine")
}

func main() {
    go sayHello()
    time.Sleep(time.Second)
    fmt.Println("Hello from main")
}
```

That's it. `go sayHello()` runs concurrently. No thread objects, no async/await ceremony, no callback nesting. The `go` keyword and a channel when you need to pass data between goroutines — that's the entire concurrency model on the surface.

## Here's the whole language, basically

A working HTTP server, no framework:

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

No decorators, no config file, no `@app.route` magic. Import the standard library, register a handler, start the server. That's already production-viable.

## So, just use Go

I'm not saying Go is the best language for everything — it isn't. But for backend systems, for the kind of stuff I actually want to build, it's the first language that got out of my way instead of getting in it.

Stop overthinking the framework choice. Stop reading ten more "Go vs [language]" comparison posts. Just use Go and see for yourself.

## Where to actually learn it

- **[A Tour of Go](https://go.dev/tour/)** — the official interactive tutorial, runs in your browser, no setup needed.
- **[Go by Example](https://gobyexample.com/)** — short, practical snippets for almost every language feature. This is where I'd start if you already know how to code.
- **[The official Go documentation](https://go.dev/doc/)** — genuinely well-written, not an afterthought like a lot of language docs.
- **Learn with AI** — it really is that simple. Ask an AI to explain a Go concept with a runnable example, then go run it yourself. Go's small syntax surface makes it one of the easier languages to learn this way.
