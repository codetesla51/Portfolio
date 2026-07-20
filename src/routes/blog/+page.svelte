<script>
  import { getPosts } from '$lib/utils/posts.js';
  
  let { data } = $props();
</script>

<svelte:head>
  <title>Blog — Uthman Oladele</title>
  <meta name="description" content="Technical writing about Go, systems programming, and building things from scratch." />
</svelte:head>

<main class="flex-1 bg-canvas font-mono">
  <section class="max-w-[960px] mx-auto px-5 sm:px-6 md:px-16 lg:px-24 py-10 sm:py-12 md:py-28">

    <a href="/" class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute mb-10 sm:mb-12 inline-block">← Back</a>

    <h1 class="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-ink mb-10 sm:mb-12">Blog</h1>

    <div class="border-t border-hairline">
      {#each data.posts as post}
        <a href="/blog/{post.slug}" class="article-row block py-6 sm:py-7 border-b border-hairline group">
          <div class="min-w-0">
            <span class="text-[14px] leading-[1.7] text-body block">{post.title}</span>
            {#if post.description}
              <p class="text-[12px] sm:text-[13px] text-mute mt-1 leading-relaxed">{post.description}</p>
            {/if}
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-2.5">
              <time class="text-[11px] text-ash whitespace-nowrap" datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
              <span class="text-[11px] text-ash">·</span>
              <span class="text-[11px] text-ash whitespace-nowrap">{post.readingTime} min read</span>
              {#if post.tags}
                {#each post.tags as tag}
                  <span class="inline-block text-[10px] text-mute bg-surface px-2 py-0.5 rounded-full border border-hairline whitespace-nowrap">{tag}</span>
                {/each}
              {/if}
            </div>
          </div>
        </a>
      {/each}
    </div>

  </section>
</main>
