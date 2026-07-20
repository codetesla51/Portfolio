---
title: "Setting Up an AI Coding Agent on Termux (Nobody Codes on a Phone, I Know)"
description: "Nobody codes on a phone. I do anyway, and I went down a real rabbit hole finding an AI coding agent light enough to actually live there. Here's what I found."
date: "2026-07-20"
tags: ["termux", "ai", "workflow"]
draft: false
ogImage: ""
---

Nobody codes on a phone. That's the general consensus, and honestly, most days I agree with it. Six inches of screen, a keyboard the size of a cracker, autocorrect trying to turn "goroutine" into "gorge routine" every single time. It is not, by any reasonable definition, a development environment.

I've been doing it anyway. And somewhere in the middle of doing it, I got curious about whether I could get an actual AI coding agent running natively in that setup — not a mobile-friendly wrapper, not a chat app pretending to be a dev tool, an actual agent that reads and writes real files on a real filesystem. So I went looking. What followed was a genuine rabbit hole, several dead ends, and one small, extremely opinionated Rust-ish tool that finally stuck. Here's the tour.

## The graveyard

Every good tooling story has a body count. Mine has two.

**NullClaw** first. Self-hosted, Telegram-connected, MCP servers, skill files, a whole workspace identity setup — genuinely a lot of ceremony to configure. I got it running, felt very pleased with myself, asked it to edit a file.

It could not write to files.

Let that sink in for a second. An AI *coding agent* that cannot touch the filesystem is not a coding agent. It is a chatbot with a computer science degree and no hands.

**OpenCode** next, inside an Ubuntu proot, because at some point I decided the answer to "this is hard on Termux" was "what if I just ran a whole second operating system on top of Termux instead." Musl vs glibc incompatibility. A broken npm wrapper that failed silently instead of just telling me it hated me. I won, eventually. It works. Real file writes, real shell access, the whole deal.

And then I sat there looking at it and thought: I just installed a 180,000-star, Node-powered agent, inside a Linux-inside-Android-inside-my-pocket situation, to write PHP. This is the software equivalent of hiring a moving company to carry one houseplant.

So, smaller. I needed smaller.

## What "smaller" actually meant

Not complicated, on paper:

- Real file writes, no theater, no confirming every single keystroke
- Native Termux — no proot, no second OS hiding inside the first one
- Works with a free or cheap model, because I am, still, not made of API credits

On paper. In practice this took five more tools.

## The contenders

**picocode** — a single Rust binary, zero runtime dependencies, does real file writes and shell exec, reads an `AGENTS.md` file for project context. Has a `--yolo` flag that removes every confirmation prompt, which might be the most honest flag name in the entire CLI tooling space. Genuinely tiny, genuinely fast to install. Also: 52 GitHub stars, one maintainer, fourteen commits, ever. A cool little project. Not something I trusted with a real codebase without a leash and a prayer.

**pi_agent_rust** — same energy, different author. Small, single binary, unproven. I respect that this category of tool exists. I am not yet ready to marry one of them.

**PicoClaw** — under 10MB, written in Go, has legitimately good filesystem tools: `read_file`, `write_file`, `edit_file`, `list_dir`, with sandboxing and atomic writes so a crash mid-save doesn't corrupt anything. More capable than NullClaw in every dimension that matters. But it ships with a Telegram bot layer and cron jobs built into its core identity — it wants to be a persistent assistant that also happens to edit code, not a tool that edits code when I point it at something. I did not need my coding agent to also manage my sleep schedule.

**Pi** — the one that actually stuck, and it's not close. The system prompt is under 1,000 tokens, versus the 7,000–10,000 most of these agents burn before you've typed a single task. It pulls this off with what it calls "lazy skills" — extra capabilities sit as a one-line description until the model decides it actually needs the full instructions, at which point they load in on demand. It has explicit, first-class Termux support — not "it's Linux so it probably works," actual documented support for this exact platform. Real tools: file read/write/edit, shell exec, search. And it reads an `AGENTS.md` automatically every session, so I stopped re-explaining my own project to it from scratch every time I opened a terminal.

## Getting it running

```bash
pkg update && pkg upgrade
pkg install nodejs termux-api git fd ripgrep

npm install -g @mariozechner/pi-coding-agent

mkdir -p ~/.pi/agent
pi
```

Yes. That is Node.js. I spent an embarrassing number of hours trying to find a way around it, because there's something almost spiritually offensive about installing an entire JavaScript runtime just to edit PHP files on a phone. I did not find a way around it. Every truly single-binary alternative I found was either too small a project to trust, or missing a piece I actually needed. `pkg install nodejs` is a one-time toll. Pay it and move on, the way I eventually did, with the dignity of a man who has made peace with something.

## Wiring up a model that costs nothing

I'm running on OpenCode Zen's free tier. Instead of manually hunting down env var names and base URLs like it's 2019, Pi ships a login flow:

```bash
pi
/login
```

Interactive picker, choose the provider, authenticate, done. No copy-pasting an API key into a dotfile and immediately forgetting you did it.

## The part nobody talks about: AGENTS.md

Everyone wants to compare agents on benchmarks and vibes. Almost nobody talks about the file that actually determines whether the thing is useful or dangerous, which is `AGENTS.md`.

It sits in your project root and gets read automatically at the start of every session. Mine is strict, on purpose, because the code it's pointed at is code where a wrong guess costs real time to unwind:

- Never commit to git without asking first
- Never touch a file or function outside the literal request
- Break every task into steps out loud before acting on any of them
- Edit in place — no rewriting a whole function to change three lines
- If it's not sure what I mean, it has to ask. Guessing is not allowed.
- Pointers to design docs — the actual design system, so it's not
  inventing colors or spacing out of thin air
- A running list of skills — small, scoped instructions for specific
  recurring tasks, so it's not relearning the same pattern from scratch
  every time a similar request comes in

Two of those are worth calling out on their own: **skills** and **design docs**. Skills are basically saved playbooks for tasks that come up again and again — write one once, and the agent stops needing the full explanation every time a similar request shows up. Design docs are just as important and get skipped constantly — a pointer to your actual design system means the agent stays inside your palette and spacing instead of quietly inventing its own.

An agent with real file-write access and zero boundaries is a liability that happens to talk nicely. The exact same agent with a strict AGENTS.md in front of it is genuinely useful. The entire gap between those two outcomes is how much time you spend writing that file before you ever type a task into the thing.

## So, was any of this reasonable

Depends how you define reasonable. I now write real code, on a phone, with an agent that handles the typing while I handle the actual thinking — which was always the part that mattered anyway. The agent doesn't understand my codebase. I do. AGENTS.md is just that understanding, written down once, instead of re-explained slightly differently every single session out of my own tired thumbs.

Nobody codes on a phone. I'm apparently doing it anyway, and now at least the tooling isn't fighting me the whole way there.
