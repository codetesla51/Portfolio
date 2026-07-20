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

      <p>
        Anyone can prompt an AI into a working demo now. That's not a skill anymore — it's a baseline. The question worth asking isn't "can they build something," it's "do they know what they built."
      </p>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">What I can do</h2>
        <p>
          I build backend systems from the ground up — job queues, auth libraries, rate limiters, a scripting language with its own interpreter. Not tutorials, not wrappers around someone else's library — the actual thing, understood well enough that I can tell you why it's built the way it is. I don't trust code just because it runs, including my own — I write unit tests for everything, and I don't consider something done until it's tested, not just working. For systems that need to hold up under load, I simulate high request volume against them to find where they actually break, not where I assume they might. I know how to actually use AI — not just prompt it, but plan work with it, build with agents, and know when to trust the output and when to throw it out. I use it as a tool the way I'd use any other tool: fast when it's right, discarded when it's wrong. I show up, I finish what I start, and I'll code from a phone in a pinch if that's what I've got — I already have.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">What I can't do</h2>
        <p>
          I haven't worked on a large engineering team yet, and I haven't shipped anything at scale under real production traffic — my load simulations are me finding my own systems' limits, not the same thing as production traffic finding them for me. There are gaps that only real team experience fills, and I haven't had that yet. I'm not going to pretend otherwise.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">Three reasons anyway</h2>
        <ol class="space-y-8 list-none">
          <li>
            <span class="text-ink font-bold">1.</span> I don't trust code until it's tested — including mine.
            <p class="mt-2">
              I write unit tests as a default, not an afterthought, and I stress-test systems under simulated load before I call them done. I've built things complex enough (a tree-walking interpreter, a distributed job queue with a stale-job reaper) that untested code would've broken immediately. It didn't, because I tested it before I trusted it.
            </p>
          </li>
          <li>
            <span class="text-ink font-bold">2.</span> I know how to work with AI, not just talk to it.
            <p class="mt-2">
              Planning a build with an agent, deciding what it should own versus what I should own, catching when it's confidently wrong — that's the actual skill now, and it's separate from knowing how to code. I have both.
            </p>
          </li>
          <li>
            <span class="text-ink font-bold">3.</span> Circumstances don't stop me.
            <p class="mt-2">
              I wrote my first code on a phone, before I owned a laptop. I've built a working DSL and set up dev tooling with nothing but a touchscreen. If the setup's not ideal, I adapt — I don't wait for ideal.
            </p>
          </li>
        </ol>
      </section>

      <p class="border-t border-hairline pt-8">
        I don't have a company name on my resume yet. What I have instead is a body of work you can actually read the source of, tests included, and the judgment to know what's good in it and what isn't. Look at the projects, not just this page.
      </p>

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
