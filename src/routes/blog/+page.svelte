<script>
  import { getPosts } from '$lib/utils/posts.js';
  
  let { data } = $props();
</script>

<svelte:head>
  <title>Blog — Uthman Oladele</title>
  <meta name="description" content="Technical writing about Go, systems programming, and building things from scratch." />
</svelte:head>

<main class="flex-1 bg-canvas font-mono">
  <section class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-28">

    <a href="/" class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute mb-12 inline-block">← Back</a>

    <h1 class="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-ink mb-12">Blog</h1>

    <div class="border-t border-hairline">
      {#each data.posts as post}
        <a href="/writing/{post.slug}" class="article-row flex items-baseline justify-between gap-6 py-7 border-b border-hairline">
          <div class="min-w-0">
            <span class="flex items-baseline gap-3 text-[14px] leading-[1.7] text-body">{post.title}</span>
            {#if post.description}
              <p class="text-[13px] text-mute mt-1 leading-relaxed">{post.description}</p>
            {/if}
            <div class="flex items-center gap-3 mt-2">
              <time class="text-[11px] text-ash" datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
              <span class="text-[11px] text-ash">·</span>
              <span class="text-[11px] text-ash">{post.readingTime} min read</span>
              {#if post.tags}
                {#each post.tags as tag}
                  <span class="text-[11px] text-ash">·</span>
                  <span class="text-[11px] text-mute">{tag}</span>
                {/each}
              {/if}
            </div>
          </div>
          <span class="text-xs flex-shrink-0 text-mute opacity-50 group-hover:opacity-100">↗</span>
        </a>
      {/each}
    </div>

  </section>
</main>
