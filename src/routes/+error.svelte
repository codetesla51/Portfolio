<script>
  import { page } from '$app/state';

  // Anything that isn't a 404 needs saying out loud — a 500 rendered as
  // "Page not found" sends people hunting for a broken link that isn't broken.
  const is404 = () => page.status === 404;
</script>

<svelte:head>
  <title>{page.status} — {is404() ? 'Not Found' : 'Something Broke'}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="flex-1 bg-canvas font-mono flex items-center justify-center">
  <div class="text-center px-6 py-24">
    <h1 class="text-5xl sm:text-6xl font-bold text-ink mb-3">{page.status}</h1>

    {#if is404()}
      <p class="text-sm text-mute mb-4">That page doesn't exist. It may have moved, or the link may be wrong.</p>
    {:else}
      <p class="text-sm text-mute mb-2">Something broke on my side, not yours.</p>
      <p class="text-xs text-ash mb-4 font-mono break-words max-w-md mx-auto">{page.error?.message}</p>
    {/if}

    <!-- Show what was actually asked for. More use than a glyph, and it turns
         "this site is broken" into "I followed a stale link". -->
    <p class="text-xs text-ash mb-8 break-all">{page.url.pathname}</p>

    <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
      <a href="/" class="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink transition-colors">Home</a>
      <span class="text-ash">·</span>
      <a href="/#projects" class="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink transition-colors">Projects</a>
      <span class="text-ash">·</span>
      <a href="/blog" class="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink transition-colors">Blog</a>
    </div>
  </div>
</div>
