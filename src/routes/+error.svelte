<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — Not Found</title>
</svelte:head>

<main class="flex-1 bg-canvas font-mono flex items-center justify-center">
  <div class="text-center px-6">
    <h1 class="text-6xl font-bold text-ink mb-4">404</h1>
    <p class="text-sm text-mute mb-8">This page doesn't exist.</p>
    <a href="/" class="link-fade text-sm text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink">← Back home</a>
  </div>
</main>
