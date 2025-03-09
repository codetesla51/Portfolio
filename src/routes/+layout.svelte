<!-- src/routes/+layout.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
  import { isLoading, forceResetLoading } from '$lib/stores/loader';
  import Loader from '$lib/components/loader.svelte';
  import Cursor from "$lib/components/cusor.svelte";
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import "../app.css";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  // Safety timeout to force hide loader after 8 seconds
  let safetyTimeout;
  
  onMount(() => {
    console.log("Layout mounted, current loading state:", $isLoading);
    
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });
    
    safetyTimeout = setTimeout(() => {
      if ($isLoading) {
        forceResetLoading();
      }
    }, 8000);
    
    return () => {
      if (safetyTimeout) clearTimeout(safetyTimeout);
    };
  });
</script>

<div class="app-container relative min-h-screen">
  <Nav />
  <Cursor />
  
  {#if $isLoading}
    <div class="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-80 pointer-events-auto">
      <Loader />
    </div>
  {/if}
  
  <main class="flex-grow">
    <slot />
  </main>
  
  <Footer />
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
  }
</style>