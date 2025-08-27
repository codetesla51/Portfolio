<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

export let bioText = [
  "// Meet Uthman Oladele - The Backend Architect 🚀",
  "const uthman = {",
  "    alias: 'UthmanDev',",
  "    role: 'Backend Engineer | DevOps Enthusiast',",
  "    experience: 'Crafting scalable, resilient backend systems.',",
  "    mindset: 'Self-taught problem solver, efficiency-driven innovator.',",
  "    techStack: ['Go', 'Ruby', 'PHP', 'Bash', 'Svelte'],",
  "    currentFocus: 'Mastering systems design, automation & backend optimization.',",
  "    philosophy: 'Write code that lasts. Build tools that matter. Automate everything.',",
  "    approach: {",
  "        architecture: 'Design for scale, optimize for performance.',",
  "        security: 'Harden every layer, assume nothing is safe.',",
  "        DevOps: 'Automate deployments, streamline workflows.',",
  "        innovation: 'Solve problems, not just write code.'",
  "    }",
  "};",
  "",
  "// The Why Behind the Code",
  "function whyIBuild() {",
  "    return `Tech should do the hard work, so people don't have to. ",
  "            I build to automate, optimize, and empower.`;",
  "}",
  "",
  "// Core Beliefs 💡",
  "const beliefs = [",
  "    'Backend should be fast, scalable, and secure.',",
  "    'Automation isn't optional; it's the future.',",
  "    'Clean, efficient code is non-negotiable.',",
  "    'Every system should be built with failure recovery in mind.'",
  "];",
  "",
  "// Let's push boundaries and build something legendary together! ⚡️"
];

  let bioTerminalLines = [];
  let currentLine = 0;
  let currentChar = 0;
  let typingInterval;
  let terminalElement;
  let inView = false;

  export let initialDelay = 500;
  export let charSpeed = 20;
  export let lineDelay = 250;
  export let cursorBlinkSpeed = 500;

  function isInViewport(element) {
    if (!browser || !element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function startTyping() {
    if (currentLine >= bioText.length) return;
    
    typingInterval = setInterval(() => {
      if (!bioTerminalLines[currentLine]) {
        bioTerminalLines[currentLine] = '';
      }

      if (currentChar < bioText[currentLine].length) {
        bioTerminalLines[currentLine] += bioText[currentLine][currentChar];
        currentChar++;
        bioTerminalLines = [...bioTerminalLines]; 
      } else {
        clearInterval(typingInterval);
        currentLine++;
        currentChar = 0;
        if (currentLine < bioText.length) {
          setTimeout(startTyping, lineDelay);
        }
      }
    }, charSpeed);
  }

  function checkScroll() {
    if (!inView && isInViewport(terminalElement)) {
      inView = true;
      setTimeout(startTyping, initialDelay);
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('scroll', checkScroll);
      checkScroll();

      return () => {
        window.removeEventListener('scroll', checkScroll);
        clearInterval(typingInterval);
      };
    }
  });
</script>

<section id="about" class="relative py-20 overflow-hidden">
  <!-- Enhanced background -->
  <div class="absolute inset-0 bg-gradient-to-b from-sec to-sec/95"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--acc-rgb),0.03)_0%,transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--acc-rgb),0.03)_0%,transparent_50%)]"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="text-center mb-16" data-aos="fade-up">
      <h2 class="text-5xl font-black text-acc mb-6 font-ice">About Me</h2>
      <div class="w-24 h-1 bg-gradient-to-r from-acc to-acc/60 mx-auto rounded-full"></div>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      
      <!-- Enhanced Left Content -->
      <div class="space-y-8" data-aos="fade-right" data-aos-duration="1000">
        <!-- Main intro card -->
        <div class="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-acc/20 shadow-xl hover:shadow-2xl transition-all duration-500">
          <div class="space-y-6 text-lg leading-relaxed">
            <p class="text-text/90">
              Hey, I'm <span class="text-acc font-bold text-xl">Oladele Uthman</span>, a backend engineer specializing in web backend development.
            </p>

            <p class="text-text/90">
              With <span class="text-acc font-bold">4+ years</span> of experience, I focus on writing clean, efficient, and maintainable backend code.
            </p>

            <p class="text-text/90">
              Currently, I'm learning <span class="text-acc font-bold">Go</span>, exploring <span class="text-acc font-bold">systems design</span>, and improving my backend development skills.
            </p>
          </div>
        </div>

        <!-- Skills highlight cards -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/30 hover:border-acc/60 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-acc/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-acc" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 class="font-bold text-acc font-ice">Backend Focus</h3>
            </div>
            <p class="text-sm text-text/80">Building scalable, secure server-side applications and APIs.</p>
          </div>

          <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/30 hover:border-acc/60 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-acc/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-acc" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-bold text-acc font-ice">DevOps Ready</h3>
            </div>
            <p class="text-sm text-text/80">Automation enthusiast with CI/CD and deployment expertise.</p>
          </div>
        </div>

        <!-- Tech stack showcase -->
        <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/30" data-aos="fade-up" data-aos-delay="400">
          <h3 class="font-bold text-acc font-ice mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
            </svg>
            Tech Stack
          </h3>
          <div class="flex flex-wrap gap-3">
            {#each ['Go', 'Ruby', 'PHP', 'Bash', 'Svelte'] as tech}
              <span class="px-3 py-1 bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:bg-acc/30 transition-colors duration-200">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </div>

      <!-- Enhanced Terminal -->
      <div class="lg:sticky lg:top-8" data-aos="fade-left" data-aos-duration="1000">
        <div class="bg-card/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border-2 border-acc/30 hover:border-acc/50 transition-all duration-500">
          <!-- Enhanced terminal header -->
          <div class="flex items-center justify-between p-4 bg-gradient-to-r from-card to-card/90 border-b border-acc/30">
            <div class="flex items-center">
              <div class="w-3.5 h-3.5 rounded-full bg-red-500 mx-1 shadow-sm"></div>
              <div class="w-3.5 h-3.5 rounded-full bg-yellow-500 mx-1 shadow-sm"></div>
              <div class="w-3.5 h-3.5 rounded-full bg-acc mx-1 shadow-sm"></div>
              <div class="ml-3 text-sm font-mono text-text/70">about-me.js</div>
            </div>
            
            <!-- Terminal controls -->
            <div class="flex items-center space-x-3">
              <div class="flex items-center space-x-1">
                <div class="w-2 h-2 rounded-full bg-acc animate-pulse"></div>
                <span class="text-xs font-mono text-text/60">running</span>
              </div>
              <button class="text-text/40 hover:text-text/70 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Enhanced terminal content -->
          <div 
            bind:this={terminalElement}
            class="bg-gradient-to-b from-card to-card/95 p-6 font-mono text-sm text-text overflow-auto scrollbar-thin scrollbar-thumb-acc/30 scrollbar-track-transparent" 
            style="height: 450px;"
          >
            {#each bioTerminalLines as line, i}
              <div class="flex hover:bg-acc/5 rounded transition-colors duration-200 py-0.5">
                <span class="text-acc/70 mr-4 select-none w-8 text-right text-xs leading-relaxed">{(i + 1).toString().padStart(2, '0')}</span>
                <span class="text-text/90 leading-relaxed flex-1">{line}</span>
              </div>
            {/each}
            {#if inView && currentLine < bioText.length}
              <div class="flex">
                <span class="text-acc/70 mr-4 select-none w-8 text-right text-xs">{(bioTerminalLines.length + 1).toString().padStart(2, '0')}</span>
                <div class="h-5 w-2 bg-acc animate-pulse rounded-sm" style="animation-duration: {cursorBlinkSpeed}ms"></div>
              </div>
            {/if}
          </div>

          <!-- Terminal footer with stats -->
          <div class="px-6 py-3 bg-card/80 border-t border-acc/20">
            <div class="flex justify-between items-center text-xs font-mono text-text/60">
              <div class="flex items-center space-x-4">
                <span>Lines: {bioText.length}</span>
                <span>Mode: JavaScript</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>