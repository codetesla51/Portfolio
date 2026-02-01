<script>
  export let project;
  export let index;
  
  // Parse tech stack into array (handle both string and array formats)
  $: techStack = project?.tech_stack 
    ? (Array.isArray(project.tech_stack) 
        ? project.tech_stack.slice(0, 5)
        : project.tech_stack.split(',').map(t => t.trim()).filter(Boolean).slice(0, 5))
    : [];

  // Strip HTML tags from description for preview
  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
  }
  
  $: plainDescription = stripHtml(project?.description);
</script>

{#if project}
<article class="group relative bg-neutral-900/30 border border-neutral-800 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/50 overflow-hidden">
  <div class="flex flex-col gap-4">
    <!-- Project Info -->
    <div class="flex-1 min-w-0">
      <!-- Project Number & Title -->
      <div class="flex items-start gap-2 sm:gap-4 mb-3">
        <span class="text-neutral-600 font-mono text-sm mt-1 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div class="flex-1 min-w-0">
          <h3 class="text-xl sm:text-xl md:text-2xl font-semibold text-white group-hover:text-gradient transition-all duration-300 break-words">
            {project.name}
          </h3>
          {#if plainDescription}
            <p class="text-neutral-500 mt-2 line-clamp-2 text-sm sm:text-sm md:text-base">
              {plainDescription}
            </p>
          {/if}
        </div>
      </div>

      <!-- Tech Stack Tags -->
      {#if techStack.length > 0}
        <div class="flex flex-wrap gap-1.5 sm:gap-2 ml-7 sm:ml-8">
          {#each techStack as tech}
            <span class="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-xs font-mono bg-neutral-800/50 border border-neutral-700/50 rounded-full text-neutral-400">
              {tech}
            </span>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2 ml-7 sm:ml-8">
      {#if project.github_url}
        <a 
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 sm:p-2.5 rounded-lg border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-200"
          aria-label="View source on GitHub"
          title="View Source"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      {/if}
      
      {#if project.live_url}
        <a 
          href={project.live_url}
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 sm:p-2.5 rounded-lg border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-200"
          aria-label="View live demo"
          title="Live Demo"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      {/if}

      <a 
        href="/projects/{project.slug}"
        class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-sm font-medium text-white bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:border-neutral-600 transition-all duration-200"
      >
        Details
        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>

  <!-- Hover accent line -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</article>
{/if}