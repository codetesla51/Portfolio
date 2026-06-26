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
      description: 'Distributed job queue for Go backed by PostgreSQL and Redis. Retries, scheduling, middleware chain, Prometheus metrics, and a stale job reaper.',
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
      name: 'Limitz',
      description: 'Rate limiting library for Go with five algorithms and pluggable storage backends. Sub-millisecond latency, built for production use.',
      tech_stack: ['Go', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/limitz',
      doc_url: null,
      private: false
    },
    {
      name: 'Seal',
      description: 'JWT authentication library for Go. Rotating refresh tokens, theft detection, and four storage backends: Redis, PostgreSQL, MySQL, and SQLite.',
      tech_stack: ['Go', 'JWT', 'Redis'],
      github_url: 'https://github.com/codetesla51/seal',
      doc_url: null,
      private: false
    },
    {
      name: 'Oladele Ledger',
      description: 'Private family finance app. Two money pools with approval-gated withdrawals, dual auth, manual transaction input, and Supabase storage. Background jobs handled by Kyu — first real production deployment of my own queue.',
      tech_stack: ['Go', 'SvelteKit', 'Supabase'],
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
<section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
  <div class="hidden md:block absolute left-12 lg:left-20 top-0 bottom-0 w-px"
    style="background-image: linear-gradient(to bottom, transparent, var(--border-strong) 30%, var(--border-strong) 70%, transparent);">
  </div>

  <div class="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-24 sm:py-0 sm:min-h-screen sm:flex sm:items-center">
    <div class="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 w-full">

      <div class="flex-1 min-w-0">

        <!-- Name -->
        <h1 class="font-bold leading-[0.88] mb-8"
          style="font-size: clamp(58px, 8.5vw, 104px); letter-spacing: -0.04em;">
          <span style="color: var(--text);">Uthman</span><br />
          <span style="color: var(--text-muted);">Oladele</span>
        </h1>

        <!-- Role -->
        <div class="flex items-center gap-3 mb-8">
          <div class="h-px w-7 flex-shrink-0" style="background-color: var(--border-strong);"></div>
          <p class="font-mono text-xs tracking-[0.22em] uppercase" style="color: var(--text-muted);">
            Backend Engineer<span class="blink" style="color: var(--text);">_</span>
          </p>
        </div>

        <!-- Bio -->
        <p class="max-w-md mb-6" style="color: var(--text-soft); font-size: 15px; line-height: 1.78;">
          I build backend systems and developer tools in Go. Job queues, auth libraries, rate limiters, a programming language. Built to run in production.
        </p>

        <!-- Currently building -->
        <div class="flex items-center gap-2.5 mb-10">
          <p class="font-mono text-xs" style="color: var(--text-muted);">
            currently building →
            <a href={currentlyBuilding.url} target="_blank" rel="noopener noreferrer"
              class="link-fade"
              style="color: var(--text);">{currentlyBuilding.name}</a>
          </p>
        </div>

        <!-- Nav links -->
        <div class="flex items-center mb-14">
          <a href="#projects" class="text-sm link-fade" style="color: var(--text);">Projects</a>
          <span class="mx-4 text-sm" style="color: var(--border-strong);">/</span>
          <a href={Resume} download class="text-sm link-fade" style="color: var(--text);">Resume</a>
        </div>

        <!-- Socials + email -->
        <div class="flex flex-wrap items-center gap-5">
          <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer"
            class="icon-link" style="color: var(--text-muted);" aria-label="GitHub">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://x.com/uthman_dev" target="_blank" rel="noopener noreferrer"
            class="icon-link" style="color: var(--text-muted);" aria-label="X">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
            class="icon-link" style="color: var(--text-muted);" aria-label="Dev.to">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.21-.16.31-.42.31-.79v-2.32c0-.37-.1-.63-.31-.79zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.69V8.53h1.93c.92 0 1.54.19 1.98.77.38.5.56 1.18.56 2.02v1.96c0 .84-.18 1.52-.56 2.02h-.04zm4.01-5.87c0 .59-.47 1.06-1.06 1.06s-1.06-.47-1.06-1.06.47-1.06 1.06-1.06 1.06.47 1.06 1.06zm-.04 6.34h-2.09V10.3h2.09v5.47zm6.44-2.04c0 1.39-.52 2.17-1.93 2.17-1.02 0-1.7-.51-1.93-1.23l1.15-.66c.09.37.36.77.81.77.47 0 .73-.26.73-.77v-4.71h1.17v4.43z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/oladele-usman-4a56833b1" target="_blank" rel="noopener noreferrer"
            class="icon-link" style="color: var(--text-muted);" aria-label="LinkedIn">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <span class="h-4 w-px" style="background-color: var(--border);"></span>
          <a href="mailto:{personalInfo.email}" class="font-mono text-xs link-fade" style="color: var(--text-muted);">
            {personalInfo.email}
          </a>
        </div>

      </div>

      <!-- Rice -->
      <div class="hidden lg:flex w-[300px] xl:w-[330px] flex-shrink-0 items-end justify-start">
        <a
          href="https://github.com/codetesla51/uthman_dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          class="rice-link font-mono text-xs"
          style="color: var(--text-muted);"
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
<section id="projects">
  <div class="section-container">

    <div class="flex items-center gap-3 mb-10">
      <span class="h-px w-7" style="background-color: var(--border-strong);"></span>
      <span class="font-mono text-xs tracking-[0.22em] uppercase" style="color: var(--text-muted);">Projects</span>
    </div>

    <div>
      {#each projects as project}
        <article class="py-7" style="border-top: 1px solid var(--border);">
          <div class="flex items-baseline justify-between gap-6 mb-3">
            <div class="flex items-baseline gap-3">
              <h3 class="text-lg font-semibold" style="color: var(--text);">{project.name}</h3>
              {#if project.private}
                <span class="font-mono text-xs" style="color: var(--border-strong);">private</span>
              {/if}
            </div>
            {#if project.doc_url || project.github_url}
              <div class="flex items-center gap-4 flex-shrink-0">
                {#if project.doc_url}
                  <a href={project.doc_url} target="_blank" rel="noopener noreferrer"
                    class="font-mono text-xs card-link" style="color: var(--text-muted);">Docs ↗</a>
                {/if}
                {#if project.github_url}
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                    class="font-mono text-xs card-link" style="color: var(--text-muted);">GitHub ↗</a>
                {/if}
              </div>
            {/if}
          </div>
          <p class="text-sm leading-relaxed mb-5 max-w-2xl" style="color: var(--text-soft);">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-3">
            {#each project.tech_stack.slice(0, 3) as tech, i}
              <span class="font-mono text-xs" style="color: var(--text-muted);">{tech}</span>
              {#if i < project.tech_stack.slice(0, 3).length - 1}
                <span class="text-xs" style="color: var(--border-strong);">·</span>
              {/if}
            {/each}
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-10 pt-6" style="border-top: 1px solid var(--border);">
      <a href="https://github.com/codetesla51?tab=repositories" target="_blank" rel="noopener noreferrer"
        class="font-mono text-xs link-fade" style="color: var(--text-muted);">More on GitHub →</a>
    </div>

  </div>
</section>


<!-- ═══════════════════════════════════════════
     WRITING
════════════════════════════════════════════ -->
<section id="writing">
  <div class="section-container">

    <div class="flex items-center gap-3 mb-10">
      <span class="h-px w-7" style="background-color: var(--border-strong);"></span>
      <span class="font-mono text-xs tracking-[0.22em] uppercase" style="color: var(--text-muted);">Writing</span>
    </div>

    <div>
      {#each articles as article}
        <a href={article.url} target="_blank" rel="noopener noreferrer"
          class="article-row flex items-baseline justify-between gap-8 py-6"
          style="border-top: 1px solid var(--border);">
          <span class="text-sm leading-relaxed" style="color: var(--text-soft);">{article.title}</span>
          <span class="font-mono text-xs flex-shrink-0" style="color: var(--text-muted);">↗</span>
        </a>
      {/each}
    </div>

    <div class="mt-10 pt-6" style="border-top: 1px solid var(--border);">
      <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
        class="font-mono text-xs link-fade" style="color: var(--text-muted);">More on Dev.to →</a>
    </div>

  </div>
</section>


<style>
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .blink { animation: blink 1s step-end infinite; }

  .link-fade {
    opacity: 0.55;
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .link-fade:hover { opacity: 1; }

  .icon-link {
    opacity: 0.5;
    transition: opacity 0.18s ease;
  }
  .icon-link:hover { opacity: 1; }

  .card-link {
    opacity: 0.55;
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .card-link:hover { opacity: 1; }

  .article-row {
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .article-row:hover { opacity: 0.7; }

  .dotfiles-link {
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .dotfiles-link:hover { opacity: 0.7; }

  .rice-link {
    opacity: 0.4;
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .rice-link:hover { opacity: 0.85; }
</style>