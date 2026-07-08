<script>
  export let data;

  const personalInfo = {
    email: "uoladele99@gmail.com",
  };

  const currentlyBuilding = {
    name: 'Logos',
    url: 'https://logos-lang.vercel.app/'
  };

  const projects = [
    {
      name: 'Logos',
      description: 'A scripting language written in Go. Pratt parser, tree-walking interpreter, closures, goroutine-backed concurrency, sandboxed VM, and cross-platform binary compilation.',
      tech_stack: ['Go', 'Compilers', 'AST'],
      github_url: 'https://github.com/codetesla51/logos',
      doc_url: 'https://logos-lang.vercel.app/',
      private: false
    },
    {
      name: 'Kyu',
      description: 'Distributed job queue for Go backed by PostgreSQL and Redis. Retries, scheduling, middleware chain, Prometheus metrics, and a stale job reaper. Benchmarked at 52ns/op with zero allocations.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis'],
      github_url: 'https://github.com/codetesla51/kyu',
      doc_url: 'https://kyu-job-queue.vercel.app/',
      private: false
    },
    {
      name: 'Raw-HTTP',
      description: 'HTTP/1.1 server built from TCP sockets. Keep-alive, TLS, static file serving, graceful shutdown. Buffer pooling pushed throughput from 5,000 to 11,000 RPS.',
      tech_stack: ['Go', 'TCP/IP', 'TLS'],
      github_url: 'https://github.com/codetesla51/raw-http',
      doc_url: null,
      private: false
    },
    {
      name: 'go-git',
      description: 'Git implementation built from first principles in Go. Covers object storage, content addressing, branching, and commit history — built to understand how version control actually works under the hood.',
      tech_stack: ['Go', 'VCS', 'Systems'],
      github_url: 'https://github.com/codetesla51/go-git',
      doc_url: null,
      private: false
    },
    {
      name: 'Limitz',
      description: 'Rate limiting library for Go. Five algorithms — fixed window, sliding window, token bucket, leaky bucket, sliding log — with pluggable storage backends. Swap Redis for Postgres without touching call sites.',
      tech_stack: ['Go', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/limitz',
      doc_url: null,
      private: false
    },
    {
      name: 'Seal',
      description: 'JWT authentication library for Go. Rotating refresh tokens with theft detection via typed errors, and four pluggable storage backends: Redis, PostgreSQL, MySQL, SQLite.',
      tech_stack: ['Go', 'JWT', 'Redis'],
      github_url: 'https://github.com/codetesla51/seal',
      doc_url: null,
      private: false
    },
    {
      name: 'Oladele Ledger',
      description: 'Family savings platform in Go. Two isolated money pools, dual JWT auth via separate Seal instances for members and admins, and an async approval pipeline on Kyu with automatic retries. Pool transfers use SERIALIZABLE transactions with row-level locking to prevent race conditions.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis'],
      github_url: null,
      doc_url: null,
      private: true
    }
  ];

  const articles = [
    {
      title: "Stop Writing Bash Scripts, There's a Better Way",
      url: "https://dev.to/uthman_dev/stop-writing-bash-scripts-theres-a-better-way-50en"
    },
    {
      title: "Building Git from Scratch in Go: What I Learned About Version Control Internals",
      url: "https://dev.to/uthman_dev/building-git-from-scratch-in-go-what-i-learned-about-version-control-internals-4dih"
    },
    {
      title: "How Buffer Pooling Doubled My HTTP Server's Throughput (4000-7721 RPS)",
      url: "https://dev.to/uthman_dev/how-buffer-pooling-doubled-my-http-servers-throughput-4000-7721-rps-3i0g"
    },
    {
      title: "Building an HTTP Server from TCP Sockets: 250-4000 RPS",
      url: "https://dev.to/uthman_dev/building-an-http-server-from-tcp-sockets-250-4000-rps-2m93"
    },
    {
      title: "Building a Terminal Calculator That Actually Does Logic - Axion",
      url: "https://dev.to/uthman_dev/building-a-terminal-calculator-that-actually-does-logic-axion-1p0m"
    }
  ];

  import Logo from "../assets/logo.png";
  import Resume from "../assets/OLADELE USMAN.pdf";
</script>

<svelte:head>
  <title>Uthman Oladele - Go Backend Engineer</title>
  <meta name="description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <link rel="canonical" href="https://devuthman.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Uthman Oladele - Go Backend Engineer">
  <meta property="og:description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <meta property="og:url" content="https://devuthman.vercel.app/">
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/149274873?v=4">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Uthman Oladele - Go Backend Engineer">
  <meta name="twitter:description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/149274873?v=4">
</svelte:head>

<!-- ═══════════════════════════════════════════
     HERO
════════════════════════════════════════════ -->
<section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-canvas font-mono">
  <div class="hidden md:block absolute left-6 md:left-12 lg:left-20 top-0 bottom-0 w-px bg-hairline"></div>

  <div class="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-20 sm:py-0 sm:min-h-screen sm:flex sm:items-center">
    <div class="flex flex-col lg:flex-row items-start gap-14 lg:gap-24 w-full">

      <div class="flex-1 min-w-0 w-full">

        <!-- Name -->
        <h1 class="font-bold leading-[1.05] mb-8 text-ink" style="font-size: clamp(38px, 8vw, 72px); letter-spacing: 0;">
          Uthman<br />
          <span class="text-mute">Oladele</span>
        </h1>

        <!-- Role -->
        <div class="flex items-center gap-3 mb-8">
          <span class="text-ink font-bold">[+]</span>
          <p class="text-xs sm:text-sm tracking-[0.15em] uppercase text-mute">
            Backend Engineer<span class="blink text-ink">_</span>
          </p>
        </div>

        <!-- Bio -->
        <p class="max-w-md mb-6 text-sm sm:text-base leading-relaxed text-body">
          I'm a self-taught backend engineer. I write Go, build things from scratch, and care enough to ship them to production.
        </p>

        <!-- Currently building -->
        <div class="inline-flex flex-wrap items-center gap-2 mb-10 bg-surface-card rounded-sm px-3 py-1.5">
          <span class="text-xs text-mute">currently building →</span>
          <a href={currentlyBuilding.url} target="_blank" rel="noopener noreferrer"
            class="link-fade text-xs text-ink underline">{currentlyBuilding.name}</a>
        </div>

        <!-- Nav links -->
        <div class="flex items-center mb-14 text-sm">
          <a href="#projects" class="link-fade text-ink underline underline-offset-4">Projects</a>
          <span class="mx-4 text-ash">/</span>
          <a href={Resume} download class="link-fade text-ink underline underline-offset-4">Resume</a>
        </div>

        <!-- Socials + email -->
        <div class="flex flex-wrap items-center gap-5">
          <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="GitHub">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://x.com/uthman_dev" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="X">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="Dev.to">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.21-.16.31-.42.31-.79v-2.32c0-.37-.1-.63-.31-.79zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.69V8.53h1.93c.92 0 1.54.19 1.98.77.38.5.56 1.18.56 2.02v1.96c0 .84-.18 1.52-.56 2.02h-.04zm4.01-5.87c0 .59-.47 1.06-1.06 1.06s-1.06-.47-1.06-1.06.47-1.06 1.06-1.06 1.06.47 1.06 1.06zm-.04 6.34h-2.09V10.3h2.09v5.47zm6.44-2.04c0 1.39-.52 2.17-1.93 2.17-1.02 0-1.7-.51-1.93-1.23l1.15-.66c.09.37.36.77.81.77.47 0 .73-.26.73-.77v-4.71h1.17v4.43z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/oladele-usman-4a56833b1" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="LinkedIn">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <span class="h-4 w-px bg-hairline"></span>
          <a href="mailto:{personalInfo.email}" class="link-fade text-xs text-mute break-all">
            {personalInfo.email}
          </a>
        </div>

      </div>

      <!-- Rice -->
      <div class="hidden lg:flex w-[260px] xl:w-[300px] flex-shrink-0 items-end justify-start">
        <a
          href="https://github.com/codetesla51/uthman_dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          class="rice-link text-xs text-mute"
        >
          wanna see my Arch rice? ↗
        </a>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     PROJECTS
════════════════════════════════════════════ -->
<section id="projects" class="bg-canvas font-mono">
  <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">

    <div class="flex items-center gap-3 mb-10">
      <span class="text-ink font-bold">[+]</span>
      <span class="text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-ink">Projects</span>
    </div>

    <div class="border-t border-hairline">
      {#each projects as project}
        <article class="py-7 border-b border-hairline">
          <div class="flex items-baseline justify-between gap-4 flex-wrap mb-3">
            <div class="flex items-baseline gap-3 flex-wrap">
              <span class="text-ink">[+]</span>
              <h3 class="text-base font-medium text-ink">{project.name}</h3>
              {#if project.private}
                <span class="text-xs bg-surface-dark text-canvas rounded-sm px-2 py-[2px]">private</span>
              {/if}
            </div>
            {#if project.doc_url || project.github_url}
              <div class="flex items-center gap-4 flex-shrink-0">
                {#if project.doc_url}
                  <a href={project.doc_url} target="_blank" rel="noopener noreferrer"
                    class="card-link text-xs text-mute underline">Docs ↗</a>
                {/if}
                {#if project.github_url}
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                    class="card-link text-xs text-mute underline">GitHub ↗</a>
                {/if}
              </div>
            {/if}
          </div>
          <p class="text-sm leading-relaxed mb-5 max-w-2xl pl-5 text-body">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-3 pl-5">
            {#each project.tech_stack.slice(0, 3) as tech, i}
              <span class="text-xs text-mute">{tech}</span>
              {#if i < project.tech_stack.slice(0, 3).length - 1}
                <span class="text-xs text-ash">·</span>
              {/if}
            {/each}
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-10 pt-6 border-t border-hairline">
      <a href="https://github.com/codetesla51?tab=repositories" target="_blank" rel="noopener noreferrer"
        class="link-fade text-xs text-mute underline">More on GitHub →</a>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════
     WRITING
════════════════════════════════════════════ -->
<section id="writing" class="bg-canvas font-mono">
  <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">

    <div class="flex items-center gap-3 mb-10">
      <span class="text-ink font-bold">[+]</span>
      <span class="text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-ink">Writing</span>
    </div>

    <div class="border-t border-hairline">
      {#each articles as article}
        <a href={article.url} target="_blank" rel="noopener noreferrer"
          class="article-row flex items-baseline justify-between gap-6 py-6 border-b border-hairline">
          <span class="flex items-baseline gap-3 text-sm leading-relaxed text-body">
            <span class="text-ink flex-shrink-0">[+]</span>{article.title}
          </span>
          <span class="text-xs flex-shrink-0 text-mute">↗</span>
        </a>
      {/each}
    </div>

    <div class="mt-10 pt-6 border-t border-hairline">
      <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
        class="link-fade text-xs text-mute underline">More on Dev.to →</a>
    </div>

  </div>
</section>

<style>
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .blink { animation: blink 1s step-end infinite; }
  @media (prefers-reduced-motion: reduce) {
    .blink { animation: none; }
  }

  .link-fade, .card-link, .rice-link {
    opacity: 0.6;
    transition: opacity 0.15s ease;
  }
  .link-fade:hover, .card-link:hover, .rice-link:hover { opacity: 1; }

  .icon-link { opacity: 0.55; transition: opacity 0.15s ease; }
  .icon-link:hover { opacity: 1; }

  .article-row { text-decoration: none; transition: opacity 0.15s ease; }
  .article-row:hover { opacity: 0.7; }

  a:focus-visible, button:focus-visible {
    outline: 1px solid #201d1d;
    outline-offset: 2px;
  }
</style>