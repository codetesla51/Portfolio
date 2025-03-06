<!-- Hero.svelte -->
<script>
  export let title = "Full Stack Developer · DevOps Enthusiast · Open-Source Builder · Student";
  export let bio = "I'm Uthman Dev, a passionate full-stack developer, student, and problem-solver. I specialize in Laravel, Go, Ruby, and Svelte, building automation tools, scalable backends, and open-source projects. I love clean code, DevOps, and pushing technology forward.";
  export let isAvailable = true;

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/codetesla51", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>` },
    { name: "X", url: "https://twitter.com/codetesla51", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>` },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/uthman-dev/", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>` },
    { name: "CodePen", url: "https://codepen.io/codetesla51", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L1 9v6l11 7 11-7V9L12 2zm6.79 8.5L12 4.91 5.21 10.5 12 16.09l6.79-5.59zm-8.04 1.5l-3.95-3.26V15.5l3.95-3.5zm2.5 0l3.95-3.26V15.5l-3.95-3.5z"></path></svg>` },
    // New social platforms with modern icons
    { name: "Facebook", url: "https://facebook.com/uthmandeveloper", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>` },
    { name: "Reddit", url: "https://reddit.com/user/codetesla51", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path></svg>` },
    { name: "WhatsApp", url: "https://wa.me/yourphonenumber", icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>` }
  ];

  // Code sample for background animation
  const codeSnippet = `// Meet Uthman Dev 🚀
class Developer {
  constructor() {
    this.skills = ["Laravel", "Go", "Ruby", "Svelte", "DevOps", "Docker"];
    this.passions = ["Open Source", "Automation", "Clean Code", "Building Scalable Systems"];
    this.currentFocus = "Exploring Rust & WebAssembly";
  }

  innovate() {
    console.log("Writing clean, efficient code to power the future.");
  }

  collaborate(project) {
    console.log("Let's build something amazing together!");
    return project.optimize();
  }
}

// Ready to create? Let's code. 💡
const uthman = new Developer();
uthman.innovate();`;

</script>
<section class="section">
  
  <div class=" mx-auto px-4 py-8 md:py-12 lg:py-16">
    <!-- Responsive grid layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
      <!-- Content side -->
      <div class="z-20 text-text order-2 lg:order-1">
        <!-- Available tag -->
        {#if isAvailable}
          <div class="inline-flex items-center mb-6">
            <span class="relative flex h-3 w-3 mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-acc"></span>
            </span>
            <span class="text-green-400 tracking-wide text-sm bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30">
              Available for Work
            </span>
          </div>
        {/if}
        
        <!-- Title with responsive font sizes -->
        <h1 class="font-ice text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight tracking-tight">
          {title}
        </h1>
        
        <!-- Bio text with responsive width -->
        <p class="text-text text-base sm:text-lg leading-relaxed mb-8">
          {bio}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href="/uthman" 
            class="inline-flex items-center justify-center px-6 py-3 
                   border border-acc text-acc hover:bg-acc hover:text-sec 
                   rounded-lg transition-all duration-300 
                   transform hover:-translate-y-1 hover:shadow-lg 
                   group"
          >
            <span class="mr-2">Learn More About Me</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </div>
        
        <!-- Social Links with responsive layout -->
        <div class="flex flex-wrap gap-3 sm:gap-4 mt-6">
          {#each socialLinks as link}
            <a href="{link.url}" 
               class="flex items-center text-text hover:text-green-400 transition-all duration-200 transform hover:-translate-y-1 bg-sec hover:bg-sec px-3 py-2 rounded-lg" 
               target="_blank" 
               rel="noopener noreferrer">
              {@html link.icon}
              <span class="ml-2 text-sm sm:text-base">{link.name}</span>
            </a>
          {/each}
        </div>
      </div>
      
      <div class="flex justify-center items-center order-2 lg:order-2">
        <!-- Terminal container with responsive width -->
        <div class="relative w-full max-w-lg mx-auto">
          <!-- Terminal-like UI -->
          <div class="bg-card rounded-lg border border-sec shadow-lg overflow-hidden ">
            <!-- Terminal header -->
            <div class="bg-sec px-4 py-2 flex items-center">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="text-gray-400 text-xs mx-auto">developer.js</div>
            </div>
            
            <!-- Terminal content with responsive font size -->
            <pre class="text-acc font-mono font-light p-4 text-xs sm:text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">{codeSnippet}</pre>
          </div>
          
          <!-- Floating elements around the code - responsive positioning -->
          <div class="absolute -top-4 -right-4 bg-green-500/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-xl"></div>
          <div class="absolute -bottom-6 -left-6 bg-blue-500/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-xl"></div>
          
          <!-- Additional floating element for visual interest -->
          <div class="absolute top-1/2 -left-8 bg-purple-500/10 w-10 h-10 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  </div>
  </section>


<style>
  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(74, 222, 128, 0.3); }
    50% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.6); }
    100% { box-shadow: 0 0 5px rgba(74, 222, 128, 0.3); }
  }
  
  :global(.glow-effect) {
    animation: glow 2s infinite ease-in-out;
  }
  
  /* Custom scrollbar for code block */
  :global(.scrollbar-thin) {
    scrollbar-width: thin;
  }
  
  :global(.scrollbar-thumb-gray-700) {
    scrollbar-color: #374151 transparent;
  }
  
  :global(.scrollbar-track-gray-900) {
    scrollbar-track-color: #111827;
  }
</style>