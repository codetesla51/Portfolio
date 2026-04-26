<script>
  import ProjectCard from '$lib/components/projectCard.svelte';

  const projects = [
    {
      name: 'Logos Programming Language',
      description: 'A scripting language built in Go with a tree-walking interpreter. Features first-class functions, closures, tables, arrays, concurrency primitives, sandbox mode, and a rich standard library.',
      tech_stack: ['Go', 'Compilers', 'Interpreters', 'AST'],
      github_url: 'https://github.com/codetesla51/logos',
      doc_url: 'https://logos-lang.vercel.app/'
    },
    {
      name: 'Limitz',
      description: 'Production-ready rate limiting library for Go. Five algorithms (Token Bucket, Fixed Window, Sliding Window, Leaky Bucket). Three storage backends (in-memory, Redis, PostgreSQL). Battle-tested in production.',
      tech_stack: ['Go', 'Distributed Systems', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/limitz'
    },
    {
      name: 'Seal',
      description: 'Lightweight JWT authentication library for Go with token rotation, single-use refresh tokens, and multiple storage backends (Redis, PostgreSQL, MySQL, SQLite).',
      tech_stack: ['Go', 'JWT', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/seal'
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

<section id="projects" class="py-16 sm:py-20 md:py-28">
  <div class="section-container">
    <div class="mb-10 sm:mb-14 md:mb-20">
      <div class="flex items-center gap-3 mb-4">
        <span class="h-px w-8 bg-neutral-700"></span>
        <span class="text-neutral-500 text-sm font-mono tracking-widest uppercase">Projects</span>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        Stuff I built
      </h2>
    </div>
    
    <div class="grid gap-4 sm:gap-6">
      {#each projects as project, i}
        <div class="animate-slide-up stagger-{i + 1}">
          <ProjectCard {project} index={i} />
        </div>
      {/each}
    </div>

    <!-- More on GitHub -->
    <div class="mt-12 animate-fade-in">
      <a 
        href="https://github.com/codetesla51?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-3 px-6 py-4 bg-neutral-900/60 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300"
      >
        <svg class="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.08[...]
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
