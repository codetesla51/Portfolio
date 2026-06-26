<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from 'svelte';
  import Loader from '$lib/components/loader.svelte';
  import "../app.css";

  let theme = 'dark';
  let scrolled = false;

  const applyTheme = (t) => {
    theme = t;
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('portfolio-theme', t);
  };

  const toggleTheme = () => applyTheme(theme === 'dark' ? 'light' : 'dark');

  onMount(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return applyTheme(saved);
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const handleScroll = () => { scrolled = window.scrollY > 100; };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
</svelte:head>

<div class="min-h-screen flex flex-col">

  <!-- ═══════════════════════════════════════════
       NAV
  ════════════════════════════════════════════ -->

  <!-- Desktop -->
  <nav class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
    <button type="button" on:click={toggleTheme} class="nav-btn" aria-label="Toggle theme">
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

  <!-- Mobile -->
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
      <button type="button" on:click={toggleTheme} class="mob-link" aria-label="Toggle theme">
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

  <Loader />

  <main class="flex-1">
    <slot />
  </main>

  <!-- ═══════════════════════════════════════════
       FOOTER
  ════════════════════════════════════════════ -->
  <footer class="py-8" style="border-top: 1px solid var(--border);">
    <div class="section-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

      <div>
        <p class="text-sm mb-1" style="color: var(--text-muted);">Got a project or opportunity?</p>
        <a href="mailto:uoladele99@gmail.com" class="font-mono text-xs footer-link" style="color: var(--text);">
          uoladele99@gmail.com
        </a>
      </div>

      <div class="flex items-center gap-5">
        <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer"
          class="icon-link" style="color: var(--text-muted);" aria-label="GitHub">
          <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://x.com/uthman_dev" target="_blank" rel="noopener noreferrer"
          class="icon-link" style="color: var(--text-muted);" aria-label="X">
          <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
          class="icon-link" style="color: var(--text-muted);" aria-label="Dev.to">
          <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.21-.16.31-.42.31-.79v-2.32c0-.37-.1-.63-.31-.79zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.69V8.53h1.93c.92 0 1.54.19 1.98.77.38.5.56 1.18.56 2.02v1.96c0 .84-.18 1.52-.56 2.02h-.04zm4.01-5.87c0 .59-.47 1.06-1.06 1.06s-1.06-.47-1.06-1.06.47-1.06 1.06-1.06 1.06.47 1.06 1.06zm-.04 6.34h-2.09V10.3h2.09v5.47zm6.44-2.04c0 1.39-.52 2.17-1.93 2.17-1.02 0-1.7-.51-1.93-1.23l1.15-.66c.09.37.36.77.81.77.47 0 .73-.26.73-.77v-4.71h1.17v4.43z"/>
          </svg>
        </a>
      </div>

    </div>
  </footer>

</div>

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
  .nav-btn:hover { color: var(--text); border-color: var(--border-strong); }

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
    font-size: 0.75rem;
  }
  .mob-link:hover { color: var(--text); }

  .icon-link {
    opacity: 0.5;
    transition: opacity 0.18s ease;
  }
  .icon-link:hover { opacity: 1; }

  .footer-link {
    opacity: 0.7;
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .footer-link:hover { opacity: 1; }
</style>