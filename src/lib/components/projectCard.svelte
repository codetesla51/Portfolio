<script>
  // Props for the component
  export let title = "Project Title";
  export let about = "This is a short description about the project that gives the user a brief understanding of what it's about.";
  export let link = "/projects/some-project";
</script>

<a 
  href={link} 
  class="block w-full max-w-md mx-auto bg-sec rounded-2xl shadow-2xl overflow-hidden 
         transform transition-all duration-500 ease-in-out 
         hover:scale-[1.02] md:hover:scale-105 hover:shadow-3xl 
         border border-opacity-10 border-text/10 relative group
         focus:outline-none focus:ring-2 focus:ring-acc focus:ring-opacity-50"
>
  <div class="p-6 sm:p-8 relative z-10">
    <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-text transition-colors duration-300 
               hover:text-acc 
               transform group-hover:scale-[1.01] sm:group-hover:scale-[1.02]">
      {title}
    </h2>
    
    <p class="text-text text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed opacity-80 
              transition-all duration-300 group-hover:opacity-100 
              line-clamp-3">
      {about}
    </p>
    
    <div class="absolute bottom-0 left-0 right-0 h-1 
                bg-acc 
                transform scale-x-0 group-hover:scale-x-100 
                origin-left transition-transform duration-500"></div>
  </div>
</a>

<style>
  /* Responsive hover effects for touch devices */
  @media (hover: hover) {
    a {
      perspective: 1000px;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    a:hover {
      transform: rotateX(5deg) rotateY(-5deg);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
  }

  /* Ensure smooth scaling on smaller screens */
  @media (max-width: 640px) {
    a:hover {
      transform: scale(1.02);
    }
  }
</style>