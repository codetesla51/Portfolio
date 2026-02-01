<script>  
  import { onMount } from 'svelte';  
  import { browser } from '$app/environment';  
  import Heading from '$lib/components/heading.svelte';  

 export let bioText = [
  "// Meet Uthman Oladele - Go Backend Developer",
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
  "        Role:         \"CS Student | Go Backend Developer\",",
  "        Experience:   \"Designing reliable APIs and backend services\",",
  "        Mindset:      \"Curious, Practical backend engineer grounded in fundamentals.\",",
  "        TechStack:    []string{\"Go\", \"Ruby\", \"PHP\", \"Svelte\", \"Docker\"},",
  "        CurrentFocus: \"Systems design, compiler theory, and backend architecture\",",
  "        Philosophy:   \"Write clean Go. Build reliable systems. Keep learning.\",",
  "    }",
  "}",
  "",
  "// WhyIBuild demonstrates my core motivation",
  "func (d *Developer) WhyIBuild() string {",
  "    return \"Building backends grounded in solid fundamentals and practical design.\"",
  "}",
  "",
  "// CoreBeliefs represents my engineering principles",
  "var CoreBeliefs = []string{",
  "    \"APIs should be clean and reliable\",",
  "    \"Theory strengthens practical systems engineering\",",
  "    \"Optimize with measurement and understanding\",",
  "    \"Explicit error handling reduces risk in production\",",
  "}",
  "",
  "func main() {",
  "    uthman := NewUthman()",
  "    fmt.Printf(\"Ready to build something useful with %s!\\n\", ",
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
  <!-- Clean background -->  
  <div class="absolute inset-0 bg-gradient-to-b from-sec to-sec/95"></div>  
    
  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">  
    <!-- Section Header -->  
    <div class="text-center mb-16" data-aos="fade-up">  
      <Heading
        badge="Introduction"
        heading="About Me"
        subtext="Passionate developer crafting digital experiences with precision, creativity, and cutting-edge technology"
      />
    </div>  

    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">  
      
      <!-- Left Content - Simplified -->  
      <div class="space-y-8" data-aos="fade-right" data-aos-duration="1000">  
        
        <!-- Main bio card -->
        <div class="bg-card/60 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-acc/20 shadow-xl hover:shadow-2xl hover:border-acc/40 transition-all duration-500">  
          <div class="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">  
            <p class="text-text/90">  
              Hey, I'm <span class="text-acc font-bold text-xl">Oladele Uthman</span>, a Computer Science student and Go backend engineer focused on systems design and compiler theory.  
            </p>  
            
            <p class="text-text/90">  
              I specialize in designing secure, scalable APIs and backend architectures that emphasize reliability and performance. My work spans from structuring data flows and optimizing databases to building services that integrate cleanly with modern infrastructures.  
            </p>  

            <p class="text-text/90">  
              Beyond backend development, I actively explore <span class="text-acc font-bold">systems fundamentals</span>—studying compiler theory, distributed systems, and the deeper mechanics of programming languages. This research mindset shapes how I approach engineering problems.  
            </p>  

            <p class="text-text/90">  
              As a CS student, I bridge academic learning with practical engineering, aiming to deliver solutions that are both technically sound and future-ready.  
            </p>
          </div>  
        </div>  
        
        <!-- Tech Stack Card -->  
        <div class="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-acc/20 hover:border-acc/40 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">  
          <h3 class="font-bold text-acc font-ice mb-4 flex items-center text-lg">  
            <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">  
              <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>  
            </svg>  
            Primary Tech Stack  
          </h3>  
          <div class="flex flex-wrap gap-3">  
            <div class="flex items-center px-4 py-2 bg-acc/10 hover:bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:border-acc/50 transition-all duration-200">  
              <img src="https://skillicons.dev/icons?i=go" alt="Go" class="w-4 h-4 mr-2" />  
              Go  
            </div>  
            <div class="flex items-center px-4 py-2 bg-acc/10 hover:bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:border-acc/50 transition-all duration-200">  
              <img src="https://skillicons.dev/icons?i=ruby" alt="Ruby" class="w-4 h-4 mr-2" />  
              Ruby  
            </div>  
            <div class="flex items-center px-4 py-2 bg-acc/10 hover:bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:border-acc/50 transition-all duration-200">  
              <img src="https://skillicons.dev/icons?i=php" alt="PHP" class="w-4 h-4 mr-2" />  
              PHP  
            </div>  
            <div class="flex items-center px-4 py-2 bg-acc/10 hover:bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:border-acc/50 transition-all duration-200">  
              <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte" class="w-4 h-4 mr-2" />  
              Svelte  
            </div>  
            <div class="flex items-center px-4 py-2 bg-acc/10 hover:bg-acc/20 text-acc rounded-lg text-sm font-mono border border-acc/30 hover:border-acc/50 transition-all duration-200">  
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" class="w-4 h-4 mr-2" />  
              Docker  
            </div>  
          </div>  
        </div>  
      </div>  

      <!-- Right Side - Terminal -->  
      <div class="lg:sticky lg:top-8" data-aos="fade-left" data-aos-duration="1000">  
        <div class="bg-card/60 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-acc/20 hover:border-acc/40 transition-all duration-500">  
          
          <!-- Terminal header -->  
          <div class="flex items-center justify-between p-4 bg-card/80 border-b border-acc/20">  
            <div class="flex items-center">  
              <div class="w-3 h-3 rounded-full bg-red-500 mx-1"></div>  
              <div class="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>  
              <div class="w-3 h-3 rounded-full bg-acc mx-1"></div>  
              <div class="ml-4 text-sm font-mono text-text/70">main.go</div>  
            </div>  
              
            <div class="flex items-center space-x-2">  
              <div class="w-2 h-2 rounded-full bg-acc animate-pulse"></div>  
              <span class="text-xs font-mono text-text/60">running</span>  
            </div>  
          </div>  

          <!-- Terminal content -->
          <div   
            bind:this={terminalElement}  
            class="bg-card/40 p-4 sm:p-6 font-mono text-xs sm:text-sm text-text overflow-auto"   
            style="height: 320px;"
          >
            {#each bioTerminalLines as line, i}  
              <div class="flex hover:bg-acc/5 rounded transition-colors duration-200 py-0.5">  
                <span class="text-acc/60 mr-4 select-none w-6 text-right text-xs leading-relaxed">{(i + 1).toString().padStart(2, '0')}</span>  
                <span class="text-text/90 leading-relaxed flex-1">{line}</span>  
              </div>  
            {/each}  
            {#if inView && currentLine < bioText.length}  
              <div class="flex">  
                <span class="text-acc/60 mr-4 select-none w-6 text-right text-xs">{(bioTerminalLines.length + 1).toString().padStart(2, '0')}</span>  
                <div class="h-5 w-2 bg-acc animate-pulse rounded-sm" style="animation-duration: {cursorBlinkSpeed}ms"></div>  
              </div>  
            {/if}  
          </div>  

          <!-- Terminal footer -->  
          <div class="px-6 py-3 bg-card/80 border-t border-acc/20">  
            <div class="flex justify-between items-center text-xs font-mono text-text/60">  
              <div class="flex items-center space-x-4">  
                <span>Lines: {bioText.length}</span>  
                <span>Lang: Go</span>  
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