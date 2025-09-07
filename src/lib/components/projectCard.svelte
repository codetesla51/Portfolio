<script>
  export let project;
  export let index;
  

  
function handleViewDetailsClick(event) {
  event.preventDefault();
  
  console.log('View Details clicked for project:', project.name);
  
  document.body.classList.add('is-loading');
  
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-sec bg-opacity-90';
  
  const spinner = document.createElement('div');
  spinner.className = 'w-12 h-12 border-4 border-t-acc border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4';
  
  const loadingText = document.createElement('p');
  loadingText.className = 'text-text font-ice text-xl';
  loadingText.innerText = 'Loading project...';
  
  loadingDiv.appendChild(spinner);
  loadingDiv.appendChild(loadingText);
  document.body.appendChild(loadingDiv);
  
  console.log('Manual loader added to DOM');
  
  // Add a timeout to remove the loader if navigation takes too long
  const loaderTimeout = setTimeout(() => {
    if (document.body.contains(loadingDiv)) {
      document.body.removeChild(loadingDiv);
      document.body.classList.remove('is-loading');
      console.log('Loader removed due to timeout');
    }
  }, 5000); // 5 seconds timeout
  
  setTimeout(() => {
    console.log('Navigating to:', `/projects/${project.slug}`);
    window.location.href = `/projects/${project.slug}`;
  }, 100);
}
</script>

<div class="group relative bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-acc/20 hover:border-acc/60 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] h-full overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-acc/20">

  <!-- Enhanced background gradient on hover -->
  <div class="absolute inset-0 bg-gradient-to-br from-acc/5 via-transparent to-acc/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <!-- Subtle animated border effect -->
  <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-acc/20 via-transparent to-acc/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

  <div class="relative z-10 p-8">

    <!-- Enhanced header section -->
    <div class="flex justify-between items-start mb-6">
      <div class="relative">
        <!-- Glowing effect behind icon -->
        <div class="absolute inset-0 bg-acc/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>

        <div 
          class="relative p-4 bg-gradient-to-br from-sec to-sec/90 rounded-xl border-2 border-acc/40 group-hover:border-acc/70 transition-all duration-300 group-hover:scale-110"
          data-aos="zoom-in"
          data-aos-delay={300 + (index * 50)}
          data-aos-anchor-placement="top-bottom"
        >
          {#if project.icon}
            <img src={`https://skillicons.dev/icons?i=${project.icon}`} alt={project.name} class="w-8 h-8" />
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-acc group-hover:text-acc transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          {/if}
        </div>
      </div>

      <!-- Enhanced project number -->
      <div 
        class="flex items-center space-x-2"
        data-aos="fade-left"
        data-aos-delay={300 + (index * 50)}
      >
        <div class="w-8 h-0.5 bg-acc/30 group-hover:bg-acc/60 transition-colors duration-300"></div>
        <span class="font-mono text-2xl font-bold text-acc/80 group-hover:text-acc transition-colors duration-300">
          0{index+1}
        </span>
      </div>
    </div>

    <!-- Enhanced project title -->
    <div class="mb-6">
      <h3 
        class="text-2xl font-black text-acc mb-2 font-ice group-hover:text-acc transition-colors duration-300 leading-tight"
        data-aos="fade-up"
        data-aos-delay={400 + (index * 50)}
        data-aos-anchor-placement="top-bottom"
      >
        {project.name}
      </h3>

      <!-- Animated underline -->
      <div class="w-0 h-0.5 bg-gradient-to-r from-acc to-acc/60 group-hover:w-full transition-all duration-500"></div>
    </div>

    <!-- Enhanced tech stack display -->
    <div 
      class="mb-8"
      data-aos="fade-up"
      data-aos-delay={500 + (index * 50)}
      data-aos-anchor-placement="top-bottom"
    >
      <div class="flex items-center mb-4">
        <svg class="w-4 h-4 text-acc mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
        </svg>
        <span class="font-mono text-sm font-semibold text-acc/80 group-hover:text-acc transition-colors duration-300">
          Tech Stack
        </span>
      </div>

      <div class="bg-sec/50 rounded-lg p-4 border border-acc/20 group-hover:border-acc/40 transition-all duration-300 relative overflow-hidden">
        <!-- Subtle background pattern -->
        <div class="absolute inset-0 bg-gradient-to-br from-acc/5 via-transparent to-acc/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {#if project.tech_stack}
          <div class="relative z-10">
            {#each project.tech_stack.split(',') as tech, i}
              <span 
                class="inline-block px-3 py-1.5 m-1 bg-card/70 hover:bg-card/90 text-text/90 hover:text-text font-mono text-sm rounded-full border border-acc/20 hover:border-acc/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-default"
              >
                {tech.trim()}
                <!-- Small accent dot -->
                <span class="inline-block w-1 h-1 bg-acc/60 rounded-full ml-2 hover:bg-acc transition-colors duration-300"></span>
              </span>
            {/each}
          </div>
        {:else}
          <p class="font-mono text-sm text-text/70 italic text-center relative z-10">
            No tech stack specified
          </p>
        {/if}
        
        <!-- Animated border highlight -->
        <div class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-acc to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>

    <!-- Enhanced action section -->
    <div 
      class="flex justify-between items-center"
      data-aos="fade-up"
      data-aos-delay={600 + (index * 50)}
      data-aos-anchor-placement="top-bottom"
    >
      <!-- Status indicator -->
      <div class="flex items-center space-x-2">
        <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span class="text-xs font-mono text-text/60 group-hover:text-text/80 transition-colors duration-300">
          Available
        </span>
      </div>

      <!-- Enhanced CTA button -->
      <a 
        href={`/projects/${project.slug}`} 
        class="group/btn inline-flex items-center px-6 py-3 bg-transparent border-2 border-acc/40 text-acc hover:bg-acc hover:text-sec font-bold rounded-lg transition-all duration-300 font-mono text-sm transform hover:scale-105 hover:shadow-lg hover:shadow-acc/25"
        on:click={handleViewDetailsClick}
      >
        <span class="mr-2">View Details</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Bottom accent line -->
  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-acc/20 via-acc to-acc/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
</div>