<!-- src/routes/+layout.svelte -->
<script>
  import { page } from '$app/stores';
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Loader from '$lib/components/loader.svelte';
  import "../app.css";
  
  $: isAdmin = $page.url.pathname.startsWith('/admin');
  $: isProjectDetail = $page.url.pathname.startsWith('/projects/');
</script>

<svelte:head>
  <!-- Preconnect to external resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <!-- Inter font for clean modern look -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col relative">
  {#if !isAdmin && !isProjectDetail}
    <Nav />
  {/if}
  <Loader />
  
  <main class="flex-1">
    <slot />
  </main>
  
  {#if !isAdmin}
    <Footer />
  {/if}
</div>