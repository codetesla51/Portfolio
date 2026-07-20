<script>
  let { data } = $props();
  const { post, content } = data;
  
  const siteUrl = 'https://devuthman.vercel.app';
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const defaultImage = `${siteUrl}/og-default.png`;
  const imageUrl = post.ogImage || post.image || defaultImage;
</script>

<svelte:head>
  <title>{post.title} — Uthman Oladele</title>
  <meta name="description" content={post.description} />
  <link rel="canonical" href={postUrl} />
  
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.description} />
  <meta property="og:url" content={postUrl} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:site_name" content="Uthman Oladele" />
  <meta property="og:locale" content="en_US" />
  <meta property="article:published_time" content={post.date} />
  <meta property="article:author" content="Uthman Oladele" />
  {#if post.tags}
    {#each post.tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@uthman_dev" />
  <meta name="twitter:creator" content="@uthman_dev" />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.description} />
  <meta name="twitter:image" content={imageUrl} />
  
  <!-- JSON-LD -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "keywords": post.tags || [],
    "author": {
      "@type": "Person",
      "name": "Uthman Oladele",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": "Uthman Oladele",
      "url": siteUrl
    },
    "url": postUrl,
    "image": imageUrl
  })}</script>`}
</svelte:head>

<main class="flex-1 bg-canvas font-mono">
  <article class="max-w-[960px] mx-auto px-5 sm:px-6 md:px-16 lg:px-24 py-10 sm:py-12 md:py-28">

    <a href="/blog" class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute mb-12 inline-block">← All posts</a>

    <header class="mb-12">
      <h1 class="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-ink mb-4">{post.title}</h1>
      
      <div class="flex items-center gap-3 text-[11px] text-ash">
        <time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <span>·</span>
        <span>{post.readingTime} min read</span>
      </div>
      
      {#if post.tags}
        <div class="flex flex-wrap gap-2 mt-4">
          {#each post.tags as tag}
            <span class="inline-block text-[10px] text-mute bg-surface px-2.5 py-0.5 rounded-full border border-hairline">{tag}</span>
          {/each}
        </div>
      {/if}
    </header>

    <div class="prose prose-invert max-w-none text-sm sm:text-[15px] leading-[1.8] text-body">
      {@html content}
    </div>

    <footer class="mt-16 pt-6 border-t border-hairline">
      <a href="/blog" class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute">← Back to all posts</a>
    </footer>

  </article>
</main>
