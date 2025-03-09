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
}</script>

<div class="bg-card p-6 rounded-xl border border-acc/30 hover:border-acc transition-all duration-300 transform hover:-translate-y-1 h-full">
  <div class="flex justify-between items-start mb-4">
    <div 
      class="p-3 bg-sec rounded-lg border border-acc/50"
      data-aos="zoom-in"
      data-aos-delay={300 + (index * 50)}
      data-aos-anchor-placement="top-bottom"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-acc" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <span 
      class="font-mono text-acc/70"
      data-aos="fade-left"
      data-aos-delay={300 + (index * 50)}
    >
      0{index+1}.
    </span>
  </div>
  
  <h3 
    class="text-xl font-bold text-acc mb-2 font-ice"
    data-aos="fade-up"
    data-aos-delay={400 + (index * 50)}
    data-aos-anchor-placement="top-bottom"
  >
    {project.name}
  </h3>
  
  <p 
    class="font-mono text-sm text-text/80 mb-4"
    data-aos="fade-up"
    data-aos-delay={500 + (index * 50)}
    data-aos-anchor-placement="top-bottom"
  >
    Tech Stack: {project.tech_stack}
  </p>
  
  <div 
    class="flex justify-end"
    data-aos="fade-up"
    data-aos-delay={600 + (index * 50)}
    data-aos-anchor-placement="top-bottom"
  >
    <a 
      href={`/projects/${project.slug}`} 
      class="text-acc hover:text-text transition-colors inline-flex items-center font-mono text-sm"
      on:click={handleViewDetailsClick}
    >
      View Details
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>