<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

export let bioText = [
  "// Meet Uthman Oladele - The Go Backend Engineer 🚀",
  "package main",
  "",
  "import (",
  "    \"fmt\"",
  "    \"time\"",
  "    \"context\"",
  ")",
  "",
  "type Developer struct {",
  "    Alias        string",
  "    Role         string",
  "    Experience   string",
  "    Mindset      string",
  "    TechStack    []string",
  "    CurrentFocus string",
  "    Philosophy   string",
  "}",
  "",
  "func NewUthman() *Developer {",
  "    return &Developer{",
  "        Alias:        \"UthmanDev\",",
  "        Role:         \"Go Backend Engineer | DevOps Enthusiast\",",
  "        Experience:   \"Crafting high-performance, concurrent systems\",",
  "        Mindset:      \"Self-taught Gopher, performance-driven innovator\",",
  "        TechStack:    []string{\"Go\", \"Ruby\", \"PHP\", \"Docker\", \"K8s\"},",
  "        CurrentFocus: \"Mastering Go concurrency & distributed systems\",",
  "        Philosophy:   \"Write idiomatic Go. Build for scale. Ship fast.\",",
  "    }",
  "}",
  "",
  "// WhyIBuild demonstrates my core motivation",
  "func (d *Developer) WhyIBuild() string {",
  "    return \"Building blazingly fast backends that handle millions \" +",
  "           \"of requests. Go's simplicity meets enterprise scale.\"",
  "}",
  "",
  "// CoreBeliefs represents my engineering principles",
  "var CoreBeliefs = []string{",
  "    \"Goroutines make concurrency elegant and efficient\",",
  "    \"Microservices should communicate via clean APIs\",",
  "    \"Performance optimization is a continuous journey\",",
  "    \"Error handling in Go prevents production disasters\",",
  "}",
  "",
  "func main() {",
  "    uthman := NewUthman()",
  "    fmt.Printf(\"Ready to build something legendary with %s!\\n\", ",
  "               uthman.TechStack[0]) // Go first! 🐹",
  "}"
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
              Hey, I'm <span class="text-acc font-bold text-xl">Oladele Uthman</span>, a Go backend engineer specializing in high-performance, concurrent systems.
            </p>

            <p class="text-text/90">
              With <span class="text-acc font-bold">4+ years</span> of experience, I focus on writing idiomatic Go code that scales efficiently and handles massive concurrent loads.
            </p>

            <p class="text-text/90">
              Currently mastering <span class="text-acc font-bold">Go concurrency patterns</span>, exploring <span class="text-acc font-bold">distributed systems</span>, and building microservices that perform at enterprise scale.
            </p>
          </div>
        </div>

        <!-- Skills highlight cards -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/30 hover:border-acc/60 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-acc/20 rounded-lg flex items-center justify-center mr-3">
                <img src="https://skillicons.dev/icons?i=go" alt="Go" class="w-6 h-6" />
              </div>
              <h3 class="font-bold text-acc font-ice">Go Expert</h3>
            </div>
            <p class="text-sm text-text/80">Building blazingly fast, concurrent backend systems with Go.</p>
          </div>

          <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/30 hover:border-acc/60 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 bg-acc/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-acc" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 class="font-bold text-acc font-ice">Microservices</h3>
            </div>
            <p class="text-sm text-text/80">Designing distributed architectures that scale to millions of users.</p>
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
            <div class="flex items-center px-3 py-2 bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:bg-acc/30 transition-colors duration-200">
              <img src="https://skillicons.dev/icons?i=go" alt="Go" class="w-4 h-4 mr-2" />
              Go
            </div>
            <div class="flex items-center px-3 py-2 bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:bg-acc/30 transition-colors duration-200">
              <img src="https://skillicons.dev/icons?i=ruby" alt="Ruby" class="w-4 h-4 mr-2" />
              Ruby
            </div>
            <div class="flex items-center px-3 py-2 bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:bg-acc/30 transition-colors duration-200">
              <img src="https://skillicons.dev/icons?i=php" alt="PHP" class="w-4 h-4 mr-2" />
              PHP
            </div>
            <div class="flex items-center px-3 py-2 bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:bg-acc/30 transition-colors duration-200">
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" class="w-4 h-4 mr-2" />
              Docker
            </div>
            <div class="flex items-center px-3 py-2 bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:bg-acc/30 transition-colors duration-200">
              <img src="https://skillicons.dev/icons?i=kubernetes" alt="Kubernetes" class="w-4 h-4 mr-2" />
              K8s
            </div>
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
              <div class="ml-3 text-sm font-mono text-text/70">main.go</div>
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
                <span>Mode: Go</span>
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