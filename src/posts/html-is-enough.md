---
title: "HTML Is Enough"
description: "You can build a website with only HTML and CSS. Here's why I reach for the browser's built-in tools before adding another layer on top of them — with the receipts."
date: "2026-08-10"
tags: ["html", "css", "opinion"]
draft: false
ogImage: "https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg"
---

![HTML Is Enough](https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg)

Fun fact: you can build a website with only HTML and CSS.

And no, this isn't some "JavaScript is dead" nonsense.

HTML is actually pretty damn capable. Not in the abstract — concretely, with zero JavaScript.

## Form validation, no JS

<form style="display:flex; flex-direction:column; gap:6px; padding:1.5rem; border:1px solid #333; border-radius:12px; background:#0d0d0d; margin:1.5rem 0;">
  <label for="email" style="font-size:13px; color:#9ca3af;">Email</label>
  <input type="email" id="email" required style="width:100%; padding:10px 12px; background:#111; border:1px solid #444; border-radius:8px; color:#e5e7eb; font:inherit; box-sizing:border-box;">
  <label for="age" style="font-size:13px; color:#9ca3af;">Age (18+)</label>
  <input type="number" id="age" min="18" max="120" required style="width:100%; padding:10px 12px; background:#111; border:1px solid #444; border-radius:8px; color:#e5e7eb; font:inherit; box-sizing:border-box;">
  <button type="submit" style="margin-top:12px; align-self:flex-start; padding:10px 18px; background:#e5e7eb; color:#111; border:none; border-radius:8px; font:inherit; font-weight:600; cursor:pointer;">Submit</button>
</form>

<style>
  input:invalid { border-color: #ef4444 !important; box-shadow: 0 0 0 1px #ef4444; }
  input:valid   { border-color: #22c55e !important; }
</style>

That's real validation. Wrong email format, empty field, age under 18 — the browser blocks submission and shows a native error message. No library, no onChange handler, no state.

Want custom styling on invalid fields instead of the browser's default popup? The CSS above is live — type an invalid email into the form and watch the border turn red.

## A modal, no JS

<dialog id="confirm" style="background:#111; color:#e5e7eb; border:1px solid #333; border-radius:12px; padding:1.5rem; max-width:320px;">
  <p style="margin:0 0 1rem; font-size:14px;">Are you sure?</p>
  <form method="dialog" style="display:flex; gap:8px; justify-content:flex-end; margin:0;">
    <button value="cancel" style="padding:8px 14px; background:transparent; border:1px solid #444; border-radius:8px; color:#9ca3af; font:inherit; cursor:pointer;">Cancel</button>
    <button value="confirm" style="padding:8px 14px; background:#ef4444; border:none; border-radius:8px; color:#fff; font:inherit; font-weight:600; cursor:pointer;">Confirm</button>
  </form>
</dialog>
<button onclick={() => document.getElementById('confirm').showModal()} style="padding:8px 14px; background:#e5e7eb; border:none; border-radius:8px; color:#111; font:inherit; font-weight:600; cursor:pointer;">Delete</button>

`<dialog>` gives you a real modal — backdrop, focus trap, Esc to close — built into the element. The one line of onclick is the absolute minimum JS to open it; closing it is handled by method="dialog" alone.

## A dropdown menu, no JS

```html
<details>
  <summary>Options</summary>
  <ul>
    <li>Edit</li>
    <li>Duplicate</li>
    <li>Delete</li>
  </ul>
</details>
```

`<details>`/`<summary>` is a fully functional disclosure widget. Click to expand, click to collapse. Style it with CSS to not look like a `<details>` element and most users will never know.

## Now the part everyone skips: where this actually stops being enough

I'm not going to pretend HTML/CSS covers everything, because it doesn't, and pretending otherwise is exactly the kind of vague-take nonsense that makes this genre of post useless. Concretely, you need JavaScript (and maybe a framework) when:

- Cross-field validation — "confirm password must match password," "end date must be after start date." `:invalid` and `required` can't see across fields.
- Async validation — checking if a username is taken while the user types. That's a network call, full stop.
- Client-side state that outlives a page load — a shopping cart, a multi-step wizard, anything that needs to persist without hitting the server every time.
- Real-time UI updates — live search filtering a list as you type, a chat interface, anything where the DOM needs to react to data changing without a full page reload.

That's the actual line. Below it, native HTML. Above it, JavaScript — and only once you're stacking multiple things from that list across a large enough app does a framework start paying for itself over vanilla JS.

Which is why this still bugs me:

Someone needs a contact form with an email field and a submit button, and the stack becomes React, a router, a form library, a validation library, a UI library, state management, 400 npm packages, and a `node_modules` folder the size of a black hole.

For a form that native `required` and `type="email"` already solve.

Come on.

I'm not saying frameworks are bad. React earns its place the moment you're doing real client-side state, real-time updates, or a UI complex enough that manually wiring up DOM updates becomes its own maintenance burden. That's a real threshold, not a vibe.

I almost always reach for HTML first, then CSS, then JavaScript. Only when the problem actually hits one of the things on that list above do I reach for Svelte or Vue.

The browser already gives us a lot.
