<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let bioText = [
    "// About Uthman Oladele",
    "const aboutMe = {",
    "  name: 'Uthman Oladele',",
    "  passion: 'Building scalable and innovative applications',",
    "  experience: '4+ years in web and backend development',",
    "  background: 'Self-taught developer with a problem-solving mindset',",
    "  currentFocus: 'Exploring system design and automation',",
    "  philosophy: 'Clean code, scalable systems, and seamless experiences',",
    "};",
    "",
    "// Why I build things",
    "function whyIBuild() {",
    "  return 'I believe technology should make life easier and solve real problems';",
    "}",
    "",
    "// Let's create something amazing together!"
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

<section id="about" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="grid md:grid-cols-2 gap-8 items-center">
    <div data-aos="fade-right" data-aos-duration="1000">
      <h2 class="text-3xl font-bold text-acc mb-4 font-ice">About Me</h2>
      
      <div class="space-y-4 text-text/80">
        <p>
          Hey, I'm <span class="text-acc font-semibold">Uthman Oladele</span>. I love solving real-world problems through technology.
        </p>
        
        <p>
          With <span class="text-acc font-semibold">4+ years</span> of experience, I specialize in crafting scalable and efficient software solutions. My focus is on automation, backend systems, and seamless user experiences.
        </p>

        <p>
          I enjoy breaking down complex problems into simple solutions. Every project I work on is an opportunity to build something impactful.
        </p>

        <p>Let's build something amazing together!</p>
      </div>
    </div>
    
    <div 
      data-aos="fade-left"
      data-aos-duration="1000"
      class="bg-sec rounded-xl shadow-xl overflow-hidden border border-acc/30"
    >
      <div class="flex items-center p-2 bg-sec border-b border-acc/30">
        <div class="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
        <div class="w-3 h-3 rounded-full bg-acc mx-1"></div>
        <div class="ml-2 text-xs font-mono text-text/60">terminal — about-me.js</div>
      </div>
      
      <div 
        bind:this={terminalElement}
        class="bg-card p-6 font-mono text-text overflow-auto" 
        style="height: 350px;"
      >
        {#each bioTerminalLines as line, i}
          <div class="flex">
            <span class="text-acc mr-3">{(i + 1).toString().padStart(2, '0')}</span>
            <span>{line}</span>
          </div>
        {/each}
        {#if inView}
          <div class="h-5 border-r-2 border-acc animate-pulse mt-2 ml-8" style="animation-duration: {cursorBlinkSpeed}ms"></div>
        {/if}
      </div>
    </div>
  </div>
</section>