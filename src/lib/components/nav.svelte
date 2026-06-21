<script>
  import { onMount } from 'svelte';

  export let theme = 'dark';
  export let onToggleTheme = () => {};

  let scrolled = false;

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 100; };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- Desktop: right side dots -->
<nav class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
  <button
    type="button"
    on:click={onToggleTheme}
    class="nav-btn"
    aria-label="Toggle theme"
  >
    {#if theme === 'dark'}
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v2.25M12 18.75V21M4.97 4.97l1.59 1.59M17.44 17.44l1.59 1.59M3 12h2.25M18.75 12H21M4.97 19.03l1.59-1.59M17.44 6.56l1.59-1.59M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
    {:else}
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12.79A9 9 0 1111.21 3c.119 0 .238.004.356.012a.75.75 0 01.429 1.336A7.5 7.5 0 0019.652 12a.75.75 0 011.336.429c.008.118.012.237.012.356z"/>
      </svg>
    {/if}
  </button>

  <a href="/#projects" class="dot" aria-label="Projects"></a>
  <a href="/#writing" class="dot" aria-label="Writing"></a>
</nav>

<!-- Mobile: bottom nav -->
<nav class="fixed bottom-0 left-0 right-0 z-50 md:hidden" style="background: var(--surface); border-top: 1px solid var(--border);">
  <div class="flex items-center justify-around py-3 px-4">
    <a href="/#projects" class="mob-link">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <span class="text-xs">Projects</span>
    </a>
    <a href="/#writing" class="mob-link">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
      <span class="text-xs">Writing</span>
    </a>
    <button type="button" on:click={onToggleTheme} class="mob-link" aria-label="Toggle theme">
      {#if theme === 'dark'}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v2.25M12 18.75V21M4.97 4.97l1.59 1.59M17.44 17.44l1.59 1.59M3 12h2.25M18.75 12H21M4.97 19.03l1.59-1.59M17.44 6.56l1.59-1.59M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
        </svg>
      {:else}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12.79A9 9 0 1111.21 3c.119 0 .238.004.356.012a.75.75 0 01.429 1.336A7.5 7.5 0 0019.652 12a.75.75 0 011.336.429c.008.118.012.237.012.356z"/>
        </svg>
      {/if}
      <span class="text-xs">Theme</span>
    </button>
  </div>
</nav>

<!-- Scroll to top -->
{#if scrolled}
  <button
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    class="fixed bottom-20 md:bottom-6 left-6 z-50 nav-btn"
    aria-label="Scroll to top"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  </button>
{/if}

<style>
  .nav-btn {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.18s ease, border-color 0.18s ease;
    cursor: pointer;
  }
  .nav-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
  }

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: var(--border-strong);
    transition: background 0.18s ease;
  }
  .dot:hover { background: var(--text); }

  .mob-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    color: var(--text-muted);
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.18s ease;
  }
  .mob-link:hover { color: var(--text); }
</style>