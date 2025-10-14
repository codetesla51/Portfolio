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
  <!-- Hero Section -->
  <div class="relative min-h-screen bg-gradient-to-br from-sec via-sec/90 to-card/50">
    <!-- Back Button - Fixed Position -->
    <div class="fixed top-6 left-6 z-50">
      <a href="/"
      title="Back to home"
      class="inline-flex items-center px-4 py-2 bg-sec/90 backdrop-blur-sm border border-acc/20 rounded-lg text-text hover:text-acc hover:border-acc/60 transition-all duration-300 group shadow-lg hover:shadow-xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="font-ice font-semibold">Back to Projects</span>
      </a>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-6xl mx-auto px-6 pt-24 pb-12">
      
      <!-- Project Header -->
      <header class="text-center mb-16">
        <div class="inline-block p-1 bg-gradient-to-r from-acc/20 to-acc/10 rounded-2xl mb-6">
          <div class="bg-sec/80 backdrop-blur-sm rounded-xl px-6 py-3">
            <span class="font-mono text-acc/80 text-sm font-semibold tracking-wider uppercase">Featured Project</span>
          </div>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-ice font-bold text-acc mb-6 leading-tight">
          {data.project.name}
        </h1>
        
        <!-- Decorative line -->
        <div class="flex items-center justify-center space-x-4 mb-8">
          <div class="w-20 h-0.5 bg-gradient-to-r from-transparent to-acc/50"></div>
          <div class="w-2 h-2 bg-acc rounded-full animate-pulse"></div>
          <div class="w-20 h-0.5 bg-gradient-to-l from-transparent to-acc/50"></div>
        </div>
      </header>

      <!-- Project Image and Tech Stack Grid -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Featured Image -->
        <div class="lg:col-span-2">
          <div class="relative group rounded-2xl overflow-hidden bg-card border border-acc/20 shadow-2xl">
            {#if data.project.image}
              <img 
                src="{data.project.image}" 
                alt="{data.project.name}" 
                class="w-full object-cover h-64 md:h-96 transition-all duration-700 group-hover:scale-105"
              >
              <!-- Image overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-sec/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {:else}
              <div class="w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-sec to-card">
                <div class="text-center">
                  <div class="text-acc/40 text-6xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p class="font-ice text-text/60 text-xl">No image available</p>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- Tech Stack Sidebar -->
        <div class="space-y-6">
          
          <!-- Tech Stack Card -->
          <div class="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-acc/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="p-2 bg-acc/10 rounded-lg mr-3 group-hover:bg-acc/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-acc" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 class="text-xl font-ice font-bold text-acc group-hover:text-acc transition-colors duration-300">
                Tech Stack
              </h3>
            </div>
            
            <div class="space-y-3">
              {#each data.project.tech_stack as tech}
                <div class="group/tech bg-sec/60 hover:bg-sec/80 rounded-xl px-4 py-3 border border-acc/10 hover:border-acc/30 transition-all duration-300 transform hover:translate-x-2">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-text group-hover/tech:text-acc transition-colors duration-300 font-medium">
                      {tech}
                    </span>
                    <div class="w-2 h-2 bg-acc/40 rounded-full group-hover/tech:bg-acc group-hover/tech:animate-pulse transition-all duration-300"></div>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <!-- Project Stats Card -->
          <div class="bg-gradient-to-br from-acc/10 to-acc/5 rounded-2xl p-6 border border-acc/30 shadow-xl">
            <h4 class="font-ice text-acc font-bold mb-4 text-lg">Project Status</h4>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="font-mono text-text/80 text-sm">Status</span>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="font-mono text-text font-semibold text-sm">Active</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-mono text-text/80 text-sm">Technologies</span>
                <span class="font-mono text-acc font-bold">{data.project.tech_stack.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Description Section -->
      <section class="mb-16">
        <div class="bg-card/40 backdrop-blur-sm rounded-2xl border border-acc/20 shadow-2xl overflow-hidden">
          
          <!-- Section Header -->
          <div class="bg-gradient-to-r from-sec/80 to-card/60 px-8 py-6 border-b border-acc/20">
            <div class="flex items-center">
              <div class="p-2 bg-acc/10 rounded-lg mr-4">
                <svg class="w-6 h-6 text-acc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 class="text-3xl font-ice font-bold text-acc">Project Overview</h2>
            </div>
          </div>
          
          <!-- Content -->
          <div class="px-8 py-8">
            <div class="prose prose-lg max-w-none">
              {@html parsedDescription}
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Navigation -->
      <div class="flex justify-center">
        <a href="/#projects"
        title="Back to home"
        class="group inline-flex items-center px-8 py-4 bg-acc/10 hover:bg-acc hover:text-sec border-2 border-acc rounded-full text-acc transition-all duration-300 font-ice font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Projects</span>
        </a>
      </div>
    </div>
  </div>

{:else}
  <!-- Error State -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-sec to-card/50 px-6">
    <div class="text-center bg-card/60 backdrop-blur-sm p-12 rounded-2xl shadow-2xl border border-acc/20 max-w-md">
      <div class="mb-6">
        <div class="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="text-2xl font-ice font-bold text-red-500 mb-2">Project Not Found</h2>
        <p class="text-text/80 font-mono mb-6">The requested project could not be located in our database.</p>
      </div>
      
      <a href="/" 
      title="Back to home"
      class="inline-flex items-center px-6 py-3 bg-acc hover:bg-acc/80 text-sec rounded-lg transition-all duration-300 font-ice font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Return Home
      </a>
    </div>
  </div>
{/if}

<style>
  /* Base typography */
  :global(.prose) {
    color: theme('colors.text');
    max-width: none;
  }
  
  /* Headings */
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
  
  /* Paragraphs */
  :global(.prose p) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
    color: theme('colors.text');
  }
  
  /* Strong/Bold styling with accent color */
  :global(.prose strong) {
    color: theme('colors.acc');
    font-weight: 700;
    padding: 0 0.15em;
    border-bottom: 1px dotted theme('colors.acc/30');
    transition: background-color 0.2s ease;
  }
  
  :global(.prose strong:hover) {
    background-color: theme('colors.acc/10');
  }
  
  /* Italic styling */
  :global(.prose em) {
    font-style: italic;
    color: theme('colors.text/90');
    letter-spacing: 0.01em;
  }
  
  /* Underline */
  :global(.prose u) {
    text-decoration: none;
    border-bottom: 2px solid theme('colors.acc/40');
    padding-bottom: 1px;
  }
  
  /* Strikethrough */
  :global(.prose del) {
    text-decoration: line-through;
    color: theme('colors.text/70');
  }
  
  /* Mark/Highlight */
  :global(.prose mark) {
    background-color: theme('colors.acc/20');
    color: theme('colors.text');
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
  }
  
  /* Superscript */
  :global(.prose sup) {
    font-size: 0.75em;
    color: theme('colors.acc');
    vertical-align: super;
    padding: 0 0.2em;
  }
  
  /* Subscript */
  :global(.prose sub) {
    font-size: 0.75em;
    vertical-align: sub;
    color: theme('colors.text/80');
  }
  
  /* Small text */
  :global(.prose small) {
    font-size: 0.8em;
    color: theme('colors.text/70');
    font-style: italic;
  }
  
  /* Definition lists */
  :global(.prose dt) {
    font-weight: 700;
    color: theme('colors.acc');
    margin-top: 1rem;
  }
  
  :global(.prose dd) {
    margin-left: 1.5rem;
    margin-bottom: 0.75rem;
    font-style: italic;
  }
  
  /* Keyboard styling */
  :global(.prose kbd) {
    background-color: theme('colors.card');
    border: 1px solid theme('colors.acc/30');
    border-radius: 0.25rem;
    box-shadow: 0 2px 0 theme('colors.acc/30');
    color: theme('colors.text');
    display: inline-block;
    font-family: theme('fontFamily.mono');
    font-size: 0.85em;
    line-height: 1;
    padding: 0.2em 0.4em;
    margin: 0 0.2em;
    vertical-align: middle;
  }
  
  /* Abbreviations */
  :global(.prose abbr) {
    border-bottom: 1px dotted theme('colors.acc/50');
    cursor: help;
    text-decoration: none;
  }
  
  /* Quotes */
  :global(.prose q) {
    font-style: italic;
    color: theme('colors.acc/90');
    quotes: """ """ "'" "'";
  }
  
  :global(.prose q:before) {
    content: open-quote;
    color: theme('colors.acc');
  }
  
  :global(.prose q:after) {
    content: close-quote;
    color: theme('colors.acc');
  }
  
  /* Code blocks */
  :global(.prose pre) {
    background-color: theme('colors.card');
    border: 1px solid theme('colors.acc/20');
    border-radius: 0.5rem;
    padding: 1.25rem;
    padding-top: 2rem;
    font-family: theme('fontFamily.mono');
    overflow-x: auto;
    margin: 1.5rem 0;
    color: theme('colors.text');
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  :global(.prose pre:before) {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    background-color: theme('colors.sec');
    border-bottom: 1px solid theme('colors.acc/10');
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  :global(.prose pre:after) {
    content: '';
    position: absolute;
    top: 0.6rem;
    left: 1rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: #FF5F56;
    border-radius: 50%;
    box-shadow: 1.25rem 0 0 #FFBD2E, 2.5rem 0 0 #27C93F;
  }

  /* Inline code */
  :global(.prose code) {
    font-family: theme('fontFamily.mono');
    background-color: theme('colors.card');
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    color: theme('colors.acc/90');
    font-size: 0.9em;
    border: 1px solid theme('colors.acc/10');
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }

  :global(.prose code:hover) {
    background-color: theme('colors.acc/10');
    border-color: theme('colors.acc/30');
  }

  /* Links */
  :global(.prose a) {
    color: theme('colors.acc');
    text-decoration: none;
    border-bottom: 2px solid theme('colors.acc/30');
    transition: border-color 0.3s, color 0.3s;
    padding-bottom: 1px;
  }

  :global(.prose a:hover) {
    color: theme('colors.acc');
    border-bottom: 2px solid theme('colors.acc');
  }

  /* Blockquotes */
  :global(.prose blockquote) {
    border-left: 4px solid theme('colors.acc/50');
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-style: italic;
    color: theme('colors.text');
    margin: 1.5rem 0;
    background-color: theme('colors.sec/50');
    border-radius: 0 0.5rem 0.5rem 0;
  }

  /* Lists */
  :global(.prose ul), :global(.prose ol) {
    padding-left: 1.5rem;
    margin: 1rem 0;
    color: theme('colors.text');
  }

  :global(.prose li) {
    margin: 0.5rem 0;
    color: theme('colors.text');
  }
  
  /* Enhanced list items */
  :global(.prose li::marker) {
    color: theme('colors.acc');
  }
  
  :global(.prose li:hover) {
    background-color: theme('colors.sec/40');
    border-radius: 0.25rem;
  }

  /* Images */
  :global(.prose img) {
    border-radius: 0.5rem;
    margin: 1.5rem auto;
    max-width: 100%;
    display: block;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border: 1px solid theme('colors.acc/10');
    transition: transform 0.4s ease-in-out, box-shadow 0.4s ease;
  }

  :global(.prose img:hover) {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  /* Horizontal rule */
  :global(.prose hr) {
    border: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, theme('colors.acc/40'), transparent);
    margin: 2.5rem 0;
  }

  /* Tables */
  :global(.prose table) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  :global(.prose th) {
    background-color: theme('colors.card');
    color: theme('colors.acc');
    font-family: theme('fontFamily.ice');
    font-weight: 600;
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 2px solid theme('colors.acc/30');
  }

  :global(.prose td) {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid theme('colors.sec');
    color: theme('colors.text');
    transition: background-color 0.2s;
  }

  :global(.prose tr:hover td) {
    background-color: theme('colors.sec/80');
  }

  :global(.prose tr:last-child td) {
    border-bottom: none;
  }
  
  /* Text selection */
  :global(.prose ::selection) {
    background-color: theme('colors.acc/30');
    color: theme('colors.text');
  }

  /* Custom scrollbar for webkit browsers */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: theme('colors.sec');
  }

  :global(::-webkit-scrollbar-thumb) {
    background: theme('colors.acc/40');
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: theme('colors.acc/60');
  }
</style>
