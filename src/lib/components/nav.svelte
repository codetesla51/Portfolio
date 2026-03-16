<script>
  import { onMount } from 'svelte';
  
  let scrolled = false;
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 100;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- Floating side navigation - Desktop -->
<nav class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
  <a 
    href="/#projects" 
    class="group relative w-2 h-2 rounded-full bg-neutral-700 hover:bg-white transition-all duration-300"
    aria-label="Projects"
  >
    <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Projects
    </span>
  </a>
  <a 
    href="/#writing" 
    class="group relative w-2 h-2 rounded-full bg-neutral-700 hover:bg-white transition-all duration-300"
    aria-label="Writing"
  >
    <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Writing
    </span>
  </a>
  <a 
    href="https://github.com/codetesla51" 
    target="_blank" 
    rel="noopener noreferrer"
    class="group relative w-2 h-2 rounded-full bg-neutral-700 hover:bg-white transition-all duration-300"
    aria-label="GitHub"
  >
    <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      GitHub
    </span>
  </a>
</nav>

<!-- Mobile bottom nav -->
<nav class="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/80 backdrop-blur-md border-t border-neutral-800">
  <div class="flex items-center justify-around py-3 px-4">
    <a href="/#projects" class="flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <span class="text-xs">Projects</span>
    </a>
    <a href="/#writing" class="flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
      <span class="text-xs">Writing</span>
    </a>
    <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      <span class="text-xs">GitHub</span>
    </a>
  </div>
</nav>

<!-- Scroll to top - Desktop only -->
{#if scrolled}
  <button 
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    class="fixed bottom-20 md:bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 hover:text-white flex items-center justify-center transition-all"
    aria-label="Scroll to top"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  </button>
{/if}