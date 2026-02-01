<script>
  export let projects;
  import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<section id="projects" class="py-16 sm:py-24 md:py-32">
  <div class="section-container">
    <!-- Section Header -->
    <div class="mb-10 sm:mb-16">
      <span class="text-neutral-500 text-sm font-mono tracking-wider uppercase mb-4 block">Portfolio</span>
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Selected Work
      </h2>
      <p class="text-neutral-500 text-base sm:text-lg max-w-2xl">
        A collection of projects showcasing backend engineering, API design, and systems architecture.
      </p>
    </div>
    
    {#if projects && projects.length > 0}
      <!-- Projects Grid -->
      <div class="grid gap-6 md:gap-8">
        {#each projects as project, i}
          <ProjectCard {project} index={i} />
        {/each}
      </div>
    {:else}
      <!-- Empty State -->
      <div class="card-minimal text-center py-16">
        <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-neutral-800 flex items-center justify-center">
          <svg class="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-white mb-2">No Projects Available</h3>
        <p class="text-neutral-500 mb-6">Unable to load projects at the moment.</p>
        <button 
          class="btn-secondary"
          on:click={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    {/if}
  </div>
</section>