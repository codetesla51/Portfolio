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

<section id="writing" class="py-20 md:py-28">
  <div class="section-container">

    <div class="flex items-center gap-3 mb-16">
      <span class="h-px w-7" style="background-color: var(--border-strong);"></span>
      <span class="font-mono text-xs tracking-[0.22em] uppercase" style="color: var(--text-muted);">Writing</span>
    </div>

    <div>
      {#each articles as article}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          class="article-row flex items-baseline justify-between gap-8 py-6"
          style="border-top: 1px solid var(--border);"
        >
          <span class="text-sm leading-relaxed" style="color: var(--text-soft);">
            {article.title}
          </span>
          <span class="font-mono text-xs flex-shrink-0 arrow" style="color: var(--text-muted);">↗</span>
        </a>
      {/each}
    </div>

    <div class="mt-10 pt-6" style="border-top: 1px solid var(--border);">
      <a
        href="https://dev.to/uthman_dev"
        target="_blank"
        rel="noopener noreferrer"
        class="font-mono text-xs tracking-[0.12em] dim-link"
        style="color: var(--text-muted);"
      >
        More on Dev.to →
      </a>
    </div>

  </div>
</section>

<style>
  .article-row {
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .article-row:hover { opacity: 0.7; }

  .dim-link {
    opacity: 0.6;
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .dim-link:hover { opacity: 1; }
</style>