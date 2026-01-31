<script>
  import { onMount } from 'svelte';
  
  let scrolled = false;
  let showNav = false;
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 100;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- Floating side navigation - Desktop -->
<nav class="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3">
  <!-- Navigation dots -->
  <a 
    href="#hero" 
    class="group relative w-2.5 h-2.5 rounded-full bg-neutral-800 hover:bg-white transition-all duration-300"
    aria-label="Home"
  >
    <span class="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Home
    </span>
  </a>
  <a 
    href="#projects" 
    class="group relative w-2.5 h-2.5 rounded-full bg-neutral-800 hover:bg-white transition-all duration-300"
    aria-label="Projects"
  >
    <span class="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Projects
    </span>
  </a>
  <a 
    href="#writing" 
    class="group relative w-2.5 h-2.5 rounded-full bg-neutral-800 hover:bg-white transition-all duration-300"
    aria-label="Writing"
  >
    <span class="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Writing
    </span>
  </a>
  
  <!-- Divider -->
  <div class="w-px h-4 bg-neutral-800 my-1"></div>
  
  <!-- GitHub link -->
  <a 
    href="https://github.com/codetesla51" 
    target="_blank" 
    rel="noopener noreferrer"
    class="group relative text-neutral-600 hover:text-white transition-colors"
    aria-label="GitHub"
  >
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    <span class="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      GitHub
    </span>
  </a>
</nav>

<!-- Mobile: Floating menu button -->
<div class="md:hidden fixed bottom-4 right-4 z-50">
  <button 
    on:click={() => showNav = !showNav}
    class="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-neutral-200 transition-colors"
    aria-label="Toggle menu"
  >
    {#if showNav}
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    {:else}
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    {/if}
  </button>
  
  <!-- Mobile menu -->
  {#if showNav}
    <div class="absolute bottom-14 right-0 bg-neutral-900 border border-neutral-800 rounded-xl p-3 min-w-[120px] shadow-xl animate-fade-in">
      <div class="flex flex-col gap-1">
        <a 
          href="#hero" 
          class="text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors px-3 py-2 rounded-lg"
          on:click={() => showNav = false}
        >
          Home
        </a>
        <a 
          href="#projects" 
          class="text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors px-3 py-2 rounded-lg"
          on:click={() => showNav = false}
        >
          Projects
        </a>
        <a 
          href="#writing" 
          class="text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors px-3 py-2 rounded-lg"
          on:click={() => showNav = false}
        >
          Writing
        </a>
        <div class="h-px bg-neutral-800 my-1"></div>
        <a 
          href="https://github.com/codetesla51" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex items-center gap-2 px-3 py-2 rounded-lg"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  {/if}
</div>

<!-- Scroll to top (appears when scrolled) -->
{#if scrolled}
  <button 
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    class="fixed bottom-4 left-4 z-50 w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-all animate-fade-in"
    aria-label="Scroll to top"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  </button>
{/if}