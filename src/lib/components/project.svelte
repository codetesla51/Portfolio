<script>
  import ProjectCard from '$lib/components/projectCard.svelte';

  const projects = [
    {
      name: 'Logos Programming Language',
      description: 'A scripting language built in Go with a tree-walking interpreter. Features first-class functions, closures, tables, arrays, concurrency primitives, sandbox mode, and a rich standard library. Embeddable in Go apps.',
      tech_stack: ['Go', 'Compilers', 'Interpreters', 'AST'],
      github_url: 'https://github.com/codetesla51/logos',
      doc_url: 'https://logos-lang.vercel.app/'
    },
    {
      name: 'Limitz',
      description: 'Production-ready rate limiting library for Go. Five algorithms (Token Bucket, Fixed Window, Sliding Window, Leaky Bucket). Three storage backends (in-memory, Redis, PostgreSQL). Thread-safe, sub-millisecond performance.',
      tech_stack: ['Go', 'Distributed Systems', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/limitz'
    },
    {
      name: 'kyu',
      description: 'Distributed job queue for Go backed by PostgreSQL and Redis. Workers pop from Redis sorted set, fetch from Postgres. Exponential backoff retries, scheduled jobs, Prometheus metrics.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis', 'Distributed Systems'],
      github_url: 'https://github.com/codetesla51/kyu'
    },
    {
      name: 'go-git',
      description: 'Git implementation in pure Go without libraries. SHA-256 object storage, three-tree architecture, zlib compression, full commit history support.',
      tech_stack: ['Go', 'Git', 'Compression'],
      github_url: 'https://github.com/codetesla51/go-git'
    },
    {
      name: 'Raw-HTTP',
      description: 'HTTP/1.1 server built from TCP sockets. Supports keep-alive, TLS/HTTPS, static files, graceful shutdown. Buffer pooling optimization: 5,000 → 11,000 RPS.',
      tech_stack: ['Go', 'TCP/IP', 'HTTP', 'TLS'],
      github_url: 'https://github.com/codetesla51/raw-http'
    },
    {
      name: 'GO-CHAT',
      description: 'Concurrent terminal chat server handling 100+ connections. TLS encryption, real-time message broadcasting, AI integration, rate limiting.',
      tech_stack: ['Go', 'TCP', 'Concurrency', 'TLS'],
      github_url: 'https://github.com/codetesla51/go-chat-server'
    }
  ];
</script>

<section id="projects" class="relative py-16 sm:py-20 md:py-28 lg:py-32">
  <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
  <div class="section-container">
    <div class="mb-10 sm:mb-14 md:mb-20" data-reveal>
      <div class="flex items-center gap-3 mb-4">
        <span class="h-px w-8 bg-neutral-700"></span>
        <span class="text-neutral-500 text-sm font-mono tracking-widest uppercase">Projects</span>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        Stuff I built
      </h2>
    </div>
    
    <div class="grid gap-4 sm:gap-6 md:gap-7">
      {#each projects as project, i}
        <div class="hover-lift" data-reveal data-delay={80 + i * 70}>
          <ProjectCard {project} index={i} />
        </div>
      {/each}
    </div>

    <!-- More on GitHub -->
    <div class="mt-12 md:mt-14" data-reveal data-delay={160}>
      <a 
        href="https://github.com/codetesla51?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex w-full sm:w-auto items-center gap-3 px-6 py-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 hover:-translate-y-0.5"
      >
        <svg class="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <div class="flex flex-col">
          <span class="text-white font-medium group-hover:text-white">More on GitHub</span>
          <span class="text-neutral-500 text-sm">View all repositories</span>
        </div>
        <svg class="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </div>
</section>
