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
        <span class="h-px w-8 bg-neutral-700"></span>
        <span class="text-neutral-500 text-sm font-mono tracking-widest uppercase">Writing</span>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        Things I've written
      </h2>
    </div>

    <div class="grid gap-4">
      {#each articles as article, i}
        <a 
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group animate-slide-up stagger-{i + 1} relative flex items-center gap-4 p-5 sm:p-6 bg-neutral-900/40 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300"
        >
          <span class="text-2xl sm:text-3xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors duration-300">
            {String(i + 1).padStart(2, '0')}
          </span>
          
          <span class="flex-1 text-neutral-300 group-hover:text-white transition-colors text-sm sm:text-base">
            {article.title}
          </span>
          
          <svg class="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 -translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        class="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
      >
        More on DEV.to
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </div>
</section>
