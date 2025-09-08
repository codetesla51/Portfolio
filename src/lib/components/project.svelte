<script>
  // Projects component props
  export let projects;
  import ProjectCard from '$lib/components/projectCard.svelte';
  import Heading from '$lib/components/heading.svelte';
</script>

<section id="projects" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <Heading 
    badge="Portfolio"
    heading="Things I've Built" 
    subtext="Selected projects demonstrating backend engineering, API design, and systems thinking applied in practice." 
  />
  
  {#if projects && projects.length > 0}
    <!-- Projects Grid -->
    <div class="grid md:grid-cols-3 gap-6 p-4">
      {#each projects as project, i}
        <div 
          data-aos="fade-up" 
          data-aos-delay={200 + (i * 100)}
          data-aos-anchor-placement="top-bottom"
        >
          <ProjectCard {project} index={i} />
        </div>
      {/each}
    </div>
  {:else}
    <!-- Error State -->
    <div class="flex justify-center p-4">
      <div class="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-acc/20 text-center max-w-md">
        <!-- Error Icon -->
        <div class="mb-6">
          <div class="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>
        
        <!-- Error Content -->
        <div class="space-y-4">
          <h3 class="text-xl font-ice font-bold text-text">Could Not Load Projects</h3>
          <p class="text-text/70 leading-relaxed">
            Unable to fetch project data at the moment. The backend service may be temporarily unavailable.
          </p>
          
          <!-- Retry Button -->
          <button 
            class="inline-flex items-center px-6 py-3 bg-acc hover:bg-acc/90 text-sec font-bold rounded-lg transition-all duration-300 font-ice transform hover:scale-105 mt-4"
            on:click={() => window.location.reload()}
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
        </div>
        
        <!-- Status Indicator -->
        <div class="mt-6 flex items-center justify-center space-x-2 text-xs font-mono text-text/60">
          <div class="w-2 h-2 rounded-full bg-red-500"></div>
          <span>Backend Connection Failed</span>
        </div>
      </div>
    </div>
  {/if}
</section>