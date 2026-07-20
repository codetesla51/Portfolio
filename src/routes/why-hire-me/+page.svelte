<script>
  import Resume from "../../assets/OLADELE USMAN.pdf";
</script>

<svelte:head>
  <title>Why Hire Me — Uthman Oladele</title>
  <meta name="description" content="Why you should hire Uthman Oladele as your backend engineer." />
</svelte:head>

<main class="flex-1 bg-canvas font-mono">
  <section class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-28">

    <a href="/" class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute mb-12 inline-block">← Back</a>

    <h1 class="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-ink mb-12">Why You Should Hire Me</h1>

    <div class="max-w-2xl space-y-10 text-sm sm:text-[15px] leading-[1.8] text-body">

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">I Build From Scratch</h2>
        <p>
          I don't just use frameworks — I understand what's underneath. I've built an HTTP server from TCP sockets, a git implementation from first principles, a scripting language with a Pratt parser and tree-walking interpreter, and a distributed job queue backed by PostgreSQL and Redis. When something breaks at 3 AM, I know exactly where to look.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">I Ship To Production</h2>
        <p>
          Every project I've built is deployed and running. Logos has documentation served live. Kyu is benchmarked at 52ns/op with zero allocations. My rate limiter library has five algorithms and pluggable storage backends. These aren't homework assignments — they're production-grade tools I use myself and trust other people to use.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">I Write Clearly</h2>
        <p>
          I write technical blog posts on Dev.to that break down complex systems into digestible explanations. I document my projects thoroughly. I believe that if you can't explain what you built, you don't really understand it. Clear writing means clear thinking, and clear thinking means fewer bugs in production.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">I Care About The Details</h2>
        <p>
          I notice the things most people skip. Buffer pooling that doubled my HTTP server's throughput. Graceful shutdown that actually drains connections. JWT rotation with theft detection. SERIALIZABLE transactions with row-level locking to prevent race conditions. I don't ship code that works — I ship code that works correctly under pressure.
        </p>
      </section>

    </div>

    <div class="mt-16 pt-6 border-t border-hairline">
      <div class="flex items-center gap-4 text-sm">
        <a href="/" class="link-fade text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink">Home</a>
        <span class="text-ash">/</span>
        <a href={Resume} download class="link-fade text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink">Resume</a>
      </div>
    </div>

  </section>
</main>
