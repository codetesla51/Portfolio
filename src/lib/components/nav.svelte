<script>
  import { onMount } from 'svelte';
  import Logo from "../../assets/logo.svg";
  
  let scrollY = 0;
  let navTransparent = true;

  function handleScroll() {
    scrollY = window.scrollY;
    navTransparent = scrollY < 20;
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header 
  class="fixed top-0 left-0 w-full z-50 transition-all duration-300 
  {navTransparent 
    ? 'bg-transparent backdrop-blur-sm' 
    : 'bg-sec/80 backdrop-blur-md shadow-sm'}"
>
  <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img 
          src={Logo} 
          alt="Logo" 
          class="h-10 w-auto object-contain transition-transform hover:scale-105"
        />
      </div>
      
      <!-- Download Resume Button -->
      <a 
        href="/resume.pdf" 
        download 
        class="group relative inline-flex items-center justify-center 
        px-6 py-2 text-sm font-medium tracking-tighter text-sec 
        bg-acc 
        rounded-xl shadow-lg transition-all duration-300 
        hover:bg-acc/90 
        hover:shadow-xl hover:-translate-y-1 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-acc/50"
      >
        <span class="absolute inset-0 bg-acc opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></span>
        <span class="relative flex items-center gap-2">
          Download CV
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="transition-transform group-hover:translate-y-0.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </span>
      </a>
    </div>
  </nav>
</header>

<style>
</style>