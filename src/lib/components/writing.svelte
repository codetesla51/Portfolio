<script>
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
</script>

<section id="writing" class="py-16 sm:py-20 md:py-28">
  <div class="section-container">
    <div class="mb-10 sm:mb-14 md:mb-16">
      <div class="flex items-center gap-3 mb-4">
        <span class="h-px w-8" style="background-color: var(--border-strong);"></span>
        <span class="text-sm font-mono tracking-[0.16em] uppercase" style="color: var(--text-muted);">Writing</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" style="color: var(--text);">
        Things I've written
      </h2>
    </div>

    <div class="grid gap-4">
      {#each articles as article, i}
        <a 
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group animate-slide-up stagger-{i + 1} relative flex items-center gap-4 p-5 sm:p-6 rounded-xl transition-all duration-300"
          style="background: var(--surface); border: 1px solid var(--border);"
        >
          <span class="text-2xl sm:text-3xl font-bold transition-colors duration-300" style="color: var(--border-strong);">
            {String(i + 1).padStart(2, '0')}
          </span>
          
          <span class="flex-1 transition-colors text-sm sm:text-base" style="color: var(--text-soft);">
            {article.title}
          </span>
          
          <svg class="w-5 h-5 group-hover:translate-x-1 -translate-x-1 transition-all duration-300" style="color: var(--text-muted);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      {/each}
    </div>

    <div class="mt-10">
      <a 
        href="https://dev.to/uthman_dev" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 transition-colors text-sm"
        style="color: var(--text-muted);"
      >
        More on DEV.to
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </div>
</section>
