<script>
  export let data;
  
  // Parse tech stack into array
  $: techStack = data.project?.tech_stack 
    ? (Array.isArray(data.project.tech_stack) 
        ? data.project.tech_stack 
        : data.project.tech_stack.split(',').map(t => t.trim()).filter(Boolean))
    : [];
    
  // Get short description (first paragraph or first 150 chars)
  $: shortDescription = data.project?.description 
    ? data.project.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
    : '';
</script>

<svelte:head>
  {#if data.project}
    <title>{data.project.name} - Uthman Oladele</title>
    <meta name="description" content={shortDescription}>
  {:else}
    <title>Project Not Found - Uthman Oladele</title>
  {/if}
</svelte:head>

{#if data.project}
  <div class="min-h-screen bg-black pt-24 pb-16">
    <!-- Content -->
    <article>
      <div class="max-w-4xl mx-auto px-6">
        <!-- Back link -->
        <a 
          href="/#projects"
          class="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group text-sm mb-8"
        >
          <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Projects
        </a>

        <!-- Project Header -->
        <header class="mb-10">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {data.project.name}
          </h1>
          
          <!-- Tech Stack -->
          {#if techStack.length > 0}
            <div class="flex flex-wrap gap-2 mb-6">
              {#each techStack as tech}
                <span class="px-3 py-1 text-sm font-mono bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400">
                  {tech}
                </span>
              {/each}
            </div>
          {/if}
          
          <!-- Action buttons -->
          <div class="flex flex-wrap gap-3">
            {#if data.project.github_url}
              <a 
                href={data.project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-full transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Source Code
              </a>
            {/if}
            {#if data.project.live_url}
              <a 
                href={data.project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors"
              >
                Live Demo
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            {/if}
          </div>
        </header>

        <!-- Project Image -->
        {#if data.project.image}
          <div class="mb-12 rounded-xl overflow-hidden border border-neutral-800">
            <img 
              src={data.project.image} 
              alt={data.project.name}
              class="w-full h-auto"
            />
          </div>
        {/if}

        <!-- Description / Content -->
        {#if data.project.description}
          <div class="prose-content">
            {@html data.project.description}
          </div>
        {/if}
      </div>
    </article>
  </div>

{:else}
  <!-- Not Found State -->
  <div class="min-h-screen bg-black flex items-center justify-center">
    <div class="text-center px-6">
      <div class="w-20 h-20 mx-auto mb-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
        <svg class="w-10 h-10 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-white mb-4">Project Not Found</h1>
      <p class="text-neutral-500 mb-8 max-w-md">
        The project you're looking for doesn't exist or has been removed.
      </p>
      <a href="/" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
        Go Home
      </a>
    </div>
  </div>
{/if}

<style>
  /* Prose content styling for rendered HTML */
  .prose-content {
    color: #a3a3a3;
    line-height: 1.8;
    font-size: 1.0625rem;
  }
  
  .prose-content :global(h1) {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .prose-content :global(h2) {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #262626;
  }
  
  .prose-content :global(h3) {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .prose-content :global(p) {
    margin-bottom: 1.25rem;
  }
  
  .prose-content :global(strong) {
    color: #ffffff;
    font-weight: 600;
  }
  
  .prose-content :global(a) {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: opacity 0.2s;
  }
  
  .prose-content :global(a:hover) {
    opacity: 0.8;
  }
  
  .prose-content :global(ul),
  .prose-content :global(ol) {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }
  
  .prose-content :global(li) {
    margin-bottom: 0.5rem;
  }
  
  .prose-content :global(ul li) {
    list-style-type: disc;
  }
  
  .prose-content :global(ol li) {
    list-style-type: decimal;
  }
  
  .prose-content :global(code) {
    font-family: 'JetBrains Mono', monospace;
    background: #171717;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-size: 0.875em;
    color: #e5e5e5;
  }
  
  .prose-content :global(pre) {
    background: #0a0a0a;
    border: 1px solid #262626;
    border-radius: 8px;
    padding: 1rem 1.25rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.6;
  }
  
  .prose-content :global(pre code) {
    background: none;
    padding: 0;
    border-radius: 0;
  }
  
  .prose-content :global(blockquote) {
    border-left: 3px solid #404040;
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: #737373;
    font-style: italic;
  }
  
  .prose-content :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem auto;
    display: block;
    border: 1px solid #262626;
  }
  
  .prose-content :global(hr) {
    border: none;
    border-top: 1px solid #262626;
    margin: 2rem 0;
  }
  
  .prose-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    font-size: 0.9375rem;
  }
  
  .prose-content :global(th) {
    background: #171717;
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #262626;
  }
  
  .prose-content :global(td) {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #1a1a1a;
  }
  
  .prose-content :global(tr:hover td) {
    background: #0a0a0a;
  }
</style>