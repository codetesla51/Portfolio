<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — Not Found</title>
</svelte:head>

<main class="flex-1 bg-canvas font-mono flex items-center justify-center">
  <div class="text-center px-6">
    <pre class="text-[10px] sm:text-xs text-ash mb-6 leading-tight">    ___
   /   \\
  | () () |
   \\  ^  /
    |||||
    |||||</pre>
    <h1 class="text-5xl sm:text-6xl font-bold text-ink mb-3">404</h1>
    <p class="text-sm text-mute mb-8">Page not found.</p>
    <a href="/" class="inline-block text-xs text-ink underline decoration-hairline underline-offset-4 hover:decoration-mute transition-colors">← Back home</a>
  </div>
</main>
