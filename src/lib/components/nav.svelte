<script>
  import Logo from "../../assets/logo.svg";
  import { onMount } from 'svelte';
  
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

<header class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${navTransparent ? 'bg-inherit' : 'bg-none'}`}>
  <nav class="w-full py-2 px-2">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center">
        <div class="h-12 w-auto flex items-center">
          <img src={Logo} alt="Logo" class="h-full w-15 object-contain" />
        </div>
      </div>
      
      <div class="flex items-center">
        <a 
          href="/resume.pdf" 
          download 
          class="group flex items-center gap-2 bg-acc hover:from-acc hover:to-acc text-text font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-acc px-3 py-2 hover:px-4"
        >
          <span class="max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs whitespace-nowrap text-sm">Download Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:translate-y-0.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  </nav>
</header>