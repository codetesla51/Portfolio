<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from 'svelte';
  import Loader from '$lib/components/loader.svelte';
  import Resume from "../assets/OLADELE USMAN.pdf";
  import "../app.css";

  let theme = 'dark';
  let scrolled = false;
  let mobileMenuOpen = false;

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

<div class="min-h-screen flex flex-col font-mono">

  <!-- ═══════════════════════════════════════════
       PRIMARY NAV
  ════════════════════════════════════════════ -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-hairline" style="height: 56px;">
    <div class="h-full max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between">

      <a href="/" class="text-base font-bold text-ink">[+] uthman</a>

      <!-- desktop links -->
      <div class="hidden md:flex items-center gap-5 text-base font-medium">
        <a href="/#projects" class="text-mute hover:text-ink transition-colors">Projects</a>
        <span class="text-ash">·</span>
        <a href="/#writing" class="text-mute hover:text-ink transition-colors">Writing</a>
        <span class="text-ash">·</span>
        <button type="button" on:click={toggleTheme} class="text-mute hover:text-ink transition-colors" aria-label="Toggle theme">
          {theme === 'dark' ? '[x]' : '[+]'} theme
        </button>
        <a href={Resume} download
          class="ml-2 inline-flex items-center bg-ink text-canvas rounded-sm px-5 h-9 text-base font-medium hover:bg-ink-deep transition-colors">
          Resume
        </a>
      </div>

      <!-- mobile trigger -->
      <button type="button" class="md:hidden text-ink text-base font-bold" on:click={() => mobileMenuOpen = !mobileMenuOpen} aria-label="Menu">
        {mobileMenuOpen ? '[x]' : '[=]'}
      </button>
    </div>

    <!-- mobile drawer -->
    {#if mobileMenuOpen}
      <div class="md:hidden bg-canvas border-t border-hairline px-6 py-5 flex flex-col gap-4 text-base font-medium">
        <a href="/#projects" on:click={() => mobileMenuOpen = false} class="text-ink">[+] Projects</a>
        <a href="/#writing" on:click={() => mobileMenuOpen = false} class="text-ink">[+] Writing</a>
        <button type="button" on:click={() => { toggleTheme(); mobileMenuOpen = false; }} class="text-left text-ink">
          {theme === 'dark' ? '[x]' : '[+]'} Theme: {theme}
        </button>
        <a href={Resume} download
          class="inline-flex items-center justify-center bg-ink text-canvas rounded-sm px-5 h-9 font-medium">
          Resume
        </a>
      </div>
    {/if}
  </nav>

  <!-- Scroll to top -->
  {#if scrolled}
    <button
      on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      class="fixed bottom-6 right-6 z-50 nav-btn"
      aria-label="Scroll to top"
    >
      [^]
    </button>
  {/if}

  <Loader />

  <main class="flex-1" style="padding-top: 56px;">
    <slot />
  </main>

  <!-- ═══════════════════════════════════════════
       FOOTER
  ════════════════════════════════════════════ -->
  <footer class="border-t border-hairline bg-canvas" style="padding: 32px 0;">
    <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24">

      <!-- link grid -->
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center text-center divide-y sm:divide-y-0 sm:divide-x divide-hairline mb-6">
        <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer"
          class="flex-1 py-2 sm:py-0 text-sm text-mute hover:text-ink transition-colors">GitHub</a>
        <a href="https://x.com/uthman_dev" target="_blank" rel="noopener noreferrer"
          class="flex-1 py-2 sm:py-0 text-sm text-mute hover:text-ink transition-colors">X</a>
        <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
          class="flex-1 py-2 sm:py-0 text-sm text-mute hover:text-ink transition-colors">Dev.to</a>
        <a href="https://www.linkedin.com/in/oladele-usman-4a56833b1" target="_blank" rel="noopener noreferrer"
          class="flex-1 py-2 sm:py-0 text-sm text-mute hover:text-ink transition-colors">LinkedIn</a>
        <a href="mailto:uoladele99@gmail.com"
          class="flex-1 py-2 sm:py-0 text-sm text-mute hover:text-ink transition-colors">Email</a>
      </div>

      <!-- bottom row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mute">
        <span>©2026 Uthman Oladele</span>
        <a href="mailto:uoladele99@gmail.com" class="text-ink hover:opacity-70 transition-opacity">uoladele99@gmail.com</a>
      </div>

    </div>
  </footer>

</div>

<style>
  .nav-btn {
    min-width: 2.25rem;
    height: 2.25rem;
    padding: 0 0.75rem;
    border-radius: 4px; /* rounded.sm */
    border: 1px solid rgba(15,0,0,0.12); /* hairline */
    background: #fdfcfc; /* canvas */
    color: #646262; /* mute */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 0.875rem;
    transition: color 0.18s ease, border-color 0.18s ease;
    cursor: pointer;
  }
  .nav-btn:hover { color: #201d1d; /* ink */ border-color: #646262; /* hairline-strong */ }
</style>