<script>
  export let data;
  import { onMount } from 'svelte';
  import { marked } from 'marked';

  let parsedDescription = '';

  onMount(() => {
    if (data.project && data.project.description) {
      parsedDescription = data.project.description;
    }
  });
</script>

{#if data.project}
  <article class="max-w-3xl mx-auto p-6 bg-sec/90 rounded-lg shadow-xl mt-8 mb-12">
    <!-- Back Button -->
    <a href="/" class="inline-flex items-center text-text hover:text-acc transition-colors mb-6 group">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span class="font-ice">Back to Projects</span>
    </a>
    
    <!-- Project Header -->
    <header class="mb-8 border-b border-acc/30 pb-4">
      <h1 class="text-4xl md:text-5xl font-ice font-bold text-acc mb-3">{data.project.name}</h1>
      <div class="flex items-center text-text font-mono text-sm space-x-4">
        <time datetime={data.project.created_at}>Created: {new Date(data.project.created_at).toLocaleDateString()}</time>
        <span class="inline-block h-1 w-1 rounded-full bg-acc/50"></span>
        <time datetime={data.project.updated_at}>Updated: {new Date(data.project.updated_at).toLocaleDateString()}</time>
      </div>
    </header>
    
    <!-- Featured Image -->
    <div class="mb-8 rounded-lg overflow-hidden bg-card">
      {#if data.project.image}
        <img 
          src="{data.project.image}" 
          alt="{data.project.name}" 
          class="w-full object-cover h-64 md:h-80"
        >
      {:else}
        <div class="w-full h-48 md:h-64 flex items-center justify-center bg-gradient-to-br from-sec to-card border border-acc/20">
          <div class="text-center">
            <div class="text-acc/40 text-5xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p class="font-ice text-text text-xl">No image available</p>
          </div>
        </div>
      {/if}
    </div>
    
    <!-- Tech Stack Section -->
    <div class="mb-8 bg-card rounded-lg p-4">
      <h3 class="text-xl font-ice font-semibold text-acc mb-3">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        {#each data.project.tech_stack as tech}
          <span class="bg-sec px-3 py-1 rounded-md text-text font-mono border border-acc/20 hover:border-acc/40 transition-colors">{tech}</span>
        {/each}
      </div>
    </div>
    
    <!-- Description Section -->
    <div class="prose prose-lg max-w-none">
      {@html parsedDescription}
    </div>
    
    <!-- Bottom Back Button -->
    <div class="mt-10 pt-6 border-t border-acc/30">
      <a href="/#projects" class="inline-flex items-center text-text hover:text-acc transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="font-ice">Back to Projects</span>
      </a>
    </div>
  </article>
{:else}
  <div class="flex items-center justify-center h-64">
    <div class="text-center bg-sec p-8 rounded-lg shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-red-500/70 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p class="text-red-500 text-center text-xl font-ice">Project not found.</p>
      <p class="text-text mt-2 font-mono">The requested project could not be located.</p>
      <a href="/" class="inline-flex items-center mt-4 text-text hover:text-acc transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Return to Home
      </a>
    </div>
  </div>
{/if}

<style>
  :global(.prose) {
    color: theme('colors.text');
    max-width: none;
  }

  :global(.prose h1) {
    color: theme('colors.acc');
    font-family: theme('fontFamily.ice');
    font-size: 2.25rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    border-bottom: 1px solid theme('colors.acc/20');
    padding-bottom: 0.5rem;
  }

  :global(.prose h2) {
    color: theme('colors.acc');
    font-family: theme('fontFamily.ice');
    font-size: 1.8rem;
    margin-top: 1.8rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  :global(.prose h3) {
    color: theme('colors.acc');
    font-family: theme('fontFamily.ice');
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  :global(.prose p) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
    color: theme('colors.text');
  }

  :global(.prose pre) {
    background-color: theme('colors.sec');
    border: 1px solid theme('colors.acc/20');
    border-radius: 0.375rem;
    padding: 1rem;
    font-family: theme('fontFamily.mono');
    overflow-x: auto;
    margin: 1.25rem 0;
    color: theme('colors.text');
  }

  :global(.prose code) {
    font-family: theme('fontFamily.mono');
    background-color: rgba(30, 30, 30, 0.5);
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    color: theme('colors.text');
  }

  :global(.prose a) {
    color: theme('colors.acc');
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }

  :global(.prose a:hover) {
    color: theme('colors.acc/80');
  }

  :global(.prose blockquote) {
    border-left: 4px solid theme('colors.acc/50');
    padding-left: 1rem;
    font-style: italic;
    color: theme('colors.text');
    margin: 1.5rem 0;
  }

  :global(.prose ul), :global(.prose ol) {
    padding-left: 1.5rem;
    margin: 1rem 0;
    color: theme('colors.text');
  }

  :global(.prose li) {
    margin: 0.5rem 0;
    color: theme('colors.text');
  }

  :global(.prose img) {
    border-radius: 0.375rem;
    margin: 1.5rem auto;
    max-width: 100%;
    display: block;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid theme('colors.acc/10');
  }
  :global(.prose img:hover) {
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}
  :global(.prose hr) {
    border: 0;
    height: 1px;
    background-color: theme('colors.acc/30');
    margin: 2rem 0;
  }

  :global(.prose table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  :global(.prose th) {
    background-color: theme('colors.card');
    color: theme('colors.acc');
    font-family: theme('fontFamily.ice');
    font-weight: 600;
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid theme('colors.acc/30');
  }

  :global(.prose td) {
    padding: 0.75rem;
    border-bottom: 1px solid theme('colors.sec');
    color: theme('colors.text');
  }

  :global(.prose tr:hover) {
    background-color: theme('colors.sec/70');
  }
</style>