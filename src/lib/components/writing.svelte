<script>
  const articles = [
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
</script>

<section id="writing" class="py-16 sm:py-20 px-4 sm:px-6">
  <div class="max-w-2xl mx-auto">
    <!-- Section header -->
    <div class="mb-8 sm:mb-12">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">Writing</h2>
      <p class="text-neutral-500 text-sm">Technical articles and deep dives</p>
    </div>

    <!-- Articles list -->
    <div class="space-y-4">
      {#each articles as article, i}
        <a 
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-start gap-4 py-4 border-b border-neutral-800/50 hover:border-neutral-700 transition-colors"
        >
          <span class="text-neutral-700 font-mono text-sm shrink-0 mt-0.5">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span class="text-neutral-300 text-sm sm:text-base group-hover:text-white transition-colors leading-relaxed">
            {article.title}
          </span>
          <svg class="w-4 h-4 text-neutral-600 group-hover:text-white shrink-0 mt-1 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      {/each}
    </div>

    <!-- More link -->
    <div class="mt-8">
      <a 
        href="https://dev.to/uthman_dev" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
      >
        More articles on DEV.to
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </div>
</section>
