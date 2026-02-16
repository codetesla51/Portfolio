<script>
  import Resume from "../../assets/OLADELE USMAN.pdf";
  export let personalInfo;

  const skills = ['Go', 'PHP', 'Svelte', 'Bash', 'PostgreSQL', 'MySQL'];
</script>

<section id="hero" class="relative min-h-screen flex items-end sm:items-center overflow-hidden bg-black">
  <!-- Dot grid background -->
  <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 24px 24px;"></div>

  <!-- Vertical accent line -->
  <div class="hidden md:block absolute left-12 lg:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>

  <div class="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 pb-16 sm:pb-0 py-20">
    <!-- Status badge -->
    <div class="flex items-center gap-2 mb-8 animate-fade-in">
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span class="text-xs font-mono text-neutral-500 uppercase tracking-widest">Available for work</span>
    </div>

    <!-- Name -->
    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 animate-slide-up">
      <span class="text-white">Uthman</span>
      <br />
      <span class="text-neutral-600">Oladele</span>
    </h1>

    <!-- Role with cursor -->
    <div class="flex items-center gap-3 mb-8 animate-slide-up stagger-1">
      <div class="h-px w-8 bg-white"></div>
      <p class="font-mono text-sm sm:text-base text-neutral-400">
        Backend Engineer<span class="animate-blink text-white">_</span>
      </p>
    </div>

    <!-- Bio -->
    <p class="text-neutral-500 text-sm sm:text-base max-w-lg leading-relaxed mb-8 animate-slide-up stagger-2">
      Building backend systems, APIs, and developer tools.
      Focused on performance and clean architecture.
    </p>

    <!-- Skills -->
    <div class="flex flex-wrap gap-2 mb-10 animate-slide-up stagger-2">
      {#each skills as skill}
        <span class="font-mono text-xs px-3 py-1 border border-neutral-800 text-neutral-500 rounded-full hover:text-white hover:border-neutral-600 transition-colors">
          {skill}
        </span>
      {/each}
    </div>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-start gap-3 mb-14 animate-slide-up stagger-3">
      <a
        href="#projects"
        class="group px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-all flex items-center gap-2"
      >
        View Projects
        <svg class="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
      <a
        href={Resume}
        download
        class="px-6 py-3 text-neutral-400 text-sm border border-neutral-800 rounded-lg hover:text-white hover:border-neutral-600 transition-all flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3M6 20h12a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
        Resume
      </a>
    </div>

    <!-- Social links — bottom bar -->
    <div class="flex items-center gap-5 animate-fade-in stagger-4">
      <a
        href="https://github.com/codetesla51"
        target="_blank"
        rel="noopener noreferrer"
        class="text-neutral-600 hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a
        href="https://x.com/uthman_dev"
        target="_blank"
        rel="noopener noreferrer"
        class="text-neutral-600 hover:text-white transition-colors"
        aria-label="X (Twitter)"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a
        href="https://dev.to/uthman_dev"
        target="_blank"
        rel="noopener noreferrer"
        class="text-neutral-600 hover:text-white transition-colors"
        aria-label="DEV.to"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.21-.16.31-.42.31-.79v-2.32c0-.37-.1-.63-.31-.79zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.69V8.53h1.93c.92 0 1.54.19 1.98.77.38.5.56 1.18.56 2.02v1.96c0 .84-.18 1.52-.56 2.02h-.04zm4.01-5.87c0 .59-.47 1.06-1.06 1.06s-1.06-.47-1.06-1.06.47-1.06 1.06-1.06 1.06.47 1.06 1.06zm-.04 6.34h-2.09V10.3h2.09v5.47zm6.44-2.04c0 1.39-.52 2.17-1.93 2.17-1.02 0-1.7-.51-1.93-1.23l1.15-.66c.09.37.36.77.81.77.47 0 .73-.26.73-.77v-4.71h1.17v4.43z"/>
        </svg>
      </a>
      <span class="h-4 w-px bg-neutral-800"></span>
      <a
        href="mailto:{personalInfo.email}"
        class="font-mono text-xs text-neutral-500 hover:text-white transition-colors"
      >
        {personalInfo.email}
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  :global(.animate-blink) {
    animation: blink 1s step-end infinite;
  }
</style>