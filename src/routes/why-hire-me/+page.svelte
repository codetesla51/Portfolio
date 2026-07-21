<script>
  import Resume from "../../assets/OLADELE USMAN.pdf";
</script>

<svelte:head>
  <title>Why Hire Me — Uthman Oladele</title>
  <meta name="description" content="Why you should hire Uthman Oladele as your backend engineer." />
</svelte:head>

<main class="flex-1 bg-canvas font-mono">
  <section class="max-w-[960px] mx-auto px-5 sm:px-6 md:px-16 lg:px-24 py-12 md:py-28">

    <a href="/" class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute mb-12 inline-block">← Back</a>

    <h1 class="text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-ink mb-12">Why You Should Hire Me</h1>

    <div class="max-w-2xl space-y-10 text-sm sm:text-[15px] leading-[1.8] text-body">

      <p>
        Anyone can prompt an AI into a working demo now. That's not a skill anymore — it's a baseline. Filtering signal from noise is harder than it's ever been, because the noise looks more convincing than it used to. The question worth asking isn't "can they build something," it's "do they know what they built, and can they defend every decision in it."
      </p>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">What I can do</h2>
        <p>
          I build backend systems from the ground up — job queues, auth libraries, rate limiters, a scripting language with its own interpreter, a Git implementation, an HTTP server built straight off TCP sockets. Not tutorials, not wrappers around someone else's library — the actual thing, understood well enough that I can walk you through why every piece is built the way it is, not just that it works. When I build something, I benchmark it, I know its failure modes, and I know what I'd change if the requirements shifted.
        </p>
        <p class="mt-4">
          I don't trust code just because it runs, including my own — I write unit tests for everything, and I don't consider something done until it's tested, not just working. For systems that need to hold up under load, I simulate high request volume against them to find where they actually break, not where I assume they might — I want to know the failure point before a user finds it for me.
        </p>
        <p class="mt-4">
          I know how to actually use AI — not just prompt it, but plan work with it, build with agents, break a task down into something an agent can execute well, and know when to trust the output versus when to throw it out and do it myself. I've gotten good results out of weak models by supplying the judgment the model doesn't have. That skill — knowing where the model ends and I begin — is the actual differentiator right now, more than raw output speed.
        </p>
        <p class="mt-4">
          I show up, I finish what I start, and I'll code from a phone in a pinch if that's what I've got — I already have, for years, before I owned a laptop.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">What I can't do</h2>
        <p>
          I haven't worked on a large engineering team yet, and I haven't shipped anything at scale under real production traffic — my load simulations are me finding my own systems' limits, not the same thing as production traffic finding them for me, with real users, real edge cases, and real cost pressure attached. There are gaps that only real team experience fills — code review from senior engineers, working inside someone else's architecture instead of one I designed myself, coordinating with people instead of just AI agents — and I haven't had that yet. I'm not going to pretend otherwise, and I'd rather you know that going in than find out later.
        </p>
      </section>

      <section>
        <h2 class="text-xs font-bold tracking-[0.15em] uppercase text-mute mb-4">Three reasons anyway</h2>
        <ol class="space-y-8 list-none">
          <li>
            <span class="text-ink font-bold">1.</span> I don't trust code until it's tested — including mine.
            <p class="mt-2">
              I write unit tests as a default, not an afterthought, and I stress-test systems under simulated load before I call them done. I've built things complex enough — a tree-walking interpreter, a distributed job queue with a stale-job reaper, an auth library that detects refresh-token theft — that untested code would've broken immediately and silently. It didn't, because I tested it before I trusted it, not after something broke.
            </p>
          </li>
          <li>
            <span class="text-ink font-bold">2.</span> I know how to work with AI, not just talk to it.
            <p class="mt-2">
              Planning a build with an agent, deciding what it should own versus what I should own, catching when it's confidently wrong before that mistake ships — that's the actual skill now, and it's separate from knowing how to code. Most people either refuse to use AI on principle or use it uncritically. I do neither. I use it deliberately, and I stay the one who's responsible for the result either way.
            </p>
          </li>
          <li>
            <span class="text-ink font-bold">3.</span> Circumstances don't stop me.
            <p class="mt-2">
              I wrote my first code on a phone, before I owned a laptop. I've built a working DSL and set up dev tooling with nothing but a touchscreen — no proper keyboard, no multiple monitors, none of the setup people assume you need to be productive. If the setup's not ideal, I adapt. I don't wait for ideal conditions to start doing good work, and I won't wait for them on your team either.
            </p>
          </li>
        </ol>
      </section>

      <p class="border-t border-hairline pt-8">
        I don't have a company name on my resume yet. What I have instead is a body of work you can actually read the source of, tests included, benchmarks included, and the judgment to know what's good in it and what isn't. Look at the projects, not just this page — this page is just me telling you what to look for.
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
