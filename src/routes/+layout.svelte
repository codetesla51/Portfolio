<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Loader from '$lib/components/loader.svelte';
  import "../app.css";

  let theme = 'dark';

  const applyTheme = (nextTheme) => {
    theme = nextTheme;
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  onMount(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      applyTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  });
  
  $: isAdmin = $page.url.pathname.startsWith('/admin');
  $: isProjectDetail = $page.url.pathname.startsWith('/projects/');
</script>

<svelte:head>
  <!-- Preconnect to external resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col relative">
  {#if !isAdmin && !isProjectDetail}
    <Nav {theme} onToggleTheme={toggleTheme} />
  {/if}

  {#if !isAdmin && isProjectDetail}
    <button
      type="button"
      on:click={toggleTheme}
      class="fixed top-4 right-4 z-50 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-all duration-300 flex items-center justify-center"
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
  {/if}
  <Loader />
  
  <main class="flex-1">
    <slot />
  </main>
  
  {#if !isAdmin}
    <Footer />
  {/if}
</div>
