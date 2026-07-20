# Portfolio — Uthman Oladele

Personal portfolio and blog. Backend developer based in Lagos, Nigeria — Go, systems programming, and building things from scratch.

**Live:** [devuthman.vercel.app](https://devuthman.vercel.app)

## What This Does

A single-page portfolio with project showcases, a native markdown blog, and a "Why Hire Me" page. Blog posts are written in `.md` files, processed at build time with mdsvex and syntax-highlighted with Prism.js. Deployed on Vercel.

## Tech Stack

- **Framework**: SvelteKit 5 — SSR, file-based routing, server-side data loading
- **Styling**: Tailwind CSS v4 — utility-first, dark/light theme via `prefers-color-scheme`
- **Fonts**: Geist Sans + Geist Mono — via jsDelivr CDN
- **Animations**: GSAP + AOS — scroll reveals, staggered entrances
- **Blog**: mdsvex — markdown files as Svelte components, frontmatter parsing
- **Syntax highlighting**: Prism.js — Ayu Dark theme, CDN-loaded language components
- **Deployment**: Vercel — `adapter-vercel`, Node 22

## Getting Started

```bash
git clone https://github.com/codetesla51/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## How It Works

**Blog posts** live in `src/posts/*.md` with YAML frontmatter (title, description, date, tags, draft, ogImage). The `posts.js` utility strips frontmatter, renders markdown with `marked`, and calculates reading time. Routes: `/blog` (listing), `/blog/[slug]` (individual post).

**Projects** are fetched from a Leapcell-hosted backend API at build time. GitHub events are pulled for the "currently building" indicator.

**Theme** uses CSS custom properties with `prefers-color-scheme` media query — no JS toggle, no localStorage. All accent colors pass WCAG AA against their backgrounds.

## Project Structure

```
src/
├── posts/              # Markdown blog posts
├── routes/
│   ├── blog/           # Blog listing + [slug] pages
│   ├── why-hire-me/    # Standalone page
│   └── admin/          # Dashboard (project management)
├── lib/
│   ├── components/     # Reusable Svelte components
│   └── utils/          # posts.js, reading-time.js, slug.js
├── assets/             # Resume PDF, images
├── app.html            # Shell HTML, Prism.js CDN links
└── app.css             # Tailwind + prose styles + Ayu Dark tokens
```

## What I Learned

- SvelteKit 5 with `$props()` runes and server-side `load` functions
- Building a markdown blog pipeline from scratch without a CMS
- CSS custom properties for zero-JS theme switching
- Prism.js integration with custom header bars and copy-to-clipboard

## License

Personal project.
