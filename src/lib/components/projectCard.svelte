<script>
  export let project;
  export let index;
  
  $: techStack = project?.tech_stack?.slice(0, 5) || [];
</script>

{#if project}
<article class="rounded-xl p-5 sm:p-7 transition-all duration-200" style="background: var(--surface); border: 1px solid var(--border);">

  <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
    <!-- Number indicator -->
    <div class="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
      <span class="text-xl sm:text-3xl font-bold" style="color: var(--border-strong);">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div class="hidden sm:block w-px h-10 sm:h-full" style="background-color: var(--border);"></div>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div class="flex items-center gap-3">
          <h3 class="text-xl sm:text-2xl font-bold" style="color: var(--text);">
            {project.name}
          </h3>
          <span class="hidden sm:inline-block w-1.5 h-1.5 rounded-full" style="background-color: var(--border-strong);"></span>
        </div>
        
        <div class="flex items-center gap-2 flex-wrap">
          {#if project.doc_url}
            <a 
              href={project.doc_url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all duration-200"
              style="border: 1px solid var(--border-strong); color: var(--text); background: transparent;"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span>Website</span>
            </a>
          {/if}
          {#if project.github_url}
            <a 
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all duration-200"
              style="border: 1px solid var(--border-strong); color: var(--text); background: transparent;"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          {/if}
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm sm:text-base leading-relaxed mb-5" style="color: var(--text-soft);">
        {project.description}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        {#each techStack as tech, i}
          <span 
            class="px-2.5 py-1 text-xs font-mono border rounded-md"
            style="background: transparent; border-color: var(--border); color: var(--text-muted);"
          >
            {tech}
          </span>
        {/each}
      </div>
    </div>
  </div>
</article>
{/if}
