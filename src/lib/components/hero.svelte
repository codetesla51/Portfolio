<script>
  import Profile from "../../assets/52def21b-5811-4e7a-9dd9-f768cb60dc49.jpeg";

  export let personalInfo;
  
</script>

<section id="hero" class="relative overflow-hidden">
  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
    <div class="grid md:grid-cols-5 gap-8 items-center">
      
      <div class="md:col-span-2 flex justify-center" data-aos="fade-right" data-aos-delay="100">
        <div class="relative">
          <div class="absolute inset-0 bg-acc blur-xl opacity-30 rounded-full"></div>
          
          <div class="relative w-64 h-64 rounded-xl overflow-hidden border-2 border-acc transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img src={Profile} alt="Uthman Dev - Profile" class="object-cover w-full h-full" />

          </div>
          
          <div class="absolute -top-4 -right-4 bg-sec p-2 rounded-lg border border-acc transform rotate-12" data-aos="fade-in" data-aos-delay="600">
            <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte" class="w-8 h-8" />
          </div>
          <div class="absolute -bottom-4 -left-4 bg-sec p-2 rounded-lg border border-acc transform -rotate-12" data-aos="fade-in" data-aos-delay="800">
            <img src="https://skillicons.dev/icons?i=go" alt="Go" class="w-8 h-8" />
          </div>
          
          <!-- JERW Badge -->
          <div class="absolute top-20 -left-8 bg-sec p-2 rounded-full border-2 border-acc shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-300" data-aos="fade-in" data-aos-delay="900">
            <div class="bg-acc text-sec w-16 h-16 rounded-full flex items-center justify-center font-ice font-bold text-sm">
<div class="text-center">
  <span class="block">OPEN</span>
  <span class="block text-xs mt-0.5">TO WORK</span>
</div>            </div>
          </div>
        </div>
      </div>
      
      <div class="md:col-span-3 bg-card backdrop-blur-sm rounded-xl p-8 border border-acc/20" data-aos="fade-left" data-aos-delay="300">
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-acc"></div>
          <div class="ml-2 text-xs font-mono opacity-70">~/portfolio/uthman-dev</div>
        </div>
        
        <h1 class="text-4xl font-bold text-acc mb-1 tracking-tight font-ice">
          uthman dev
        </h1>
        <p class="text-xl text-text/80 mb-6 font-mono inline-flex items-center">
          {personalInfo.jobTitle}
          <span class="ml-2 h-4 w-4 bg-acc animate-pulse"></span>
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6" data-aos="fade-up" data-aos-delay="1800">
          <div>
            <h3 class="font-semibold text-acc mb-2 font-ice">Location</h3>
            <p class="font-mono flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-acc" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.location}
            </p>
            <h3 class="font-semibold text-acc mt-4 mb-2 font-ice">Contact</h3>
            <p class="font-mono flex items-center">
              {personalInfo.email}
            </p>
            <p class="font-mono flex items-center mt-1">
              {personalInfo.phone}
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-acc mb-2 font-ice">Education</h3>
            <p class="font-mono">{personalInfo.education.institution}</p>
            <p class="font-mono ml-6">{personalInfo.education.degree}</p>
            <p class="font-mono ml-6 text-acc">{personalInfo.education.status}</p>
            
            <h3 class="font-semibold text-acc mt-4 mb-2 font-ice">Achievements</h3>
            <ul class="font-mono space-y-1">
              {#each personalInfo.achievements as achievement, i}
                <li class="flex items-start" data-aos="fade-up" data-aos-delay={2000 + (i * 200)}>
                  <span class="text-acc mr-2">▹</span>
                  <span>{achievement}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="2400">
          <div class="flex space-x-3">
            {#each personalInfo.socialLinks as social, i}
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-text hover:text-acc transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
                data-aos="zoom-in"
                data-aos-delay={2500 + (i * 100)}
              >
                {@html social.icon}
              </a>
            {/each}
          </div>
          
          <div class="flex flex-wrap gap-3 ml-auto">
            <a 
              href="/path/to/uthman-dev-cv.pdf" 
              download 
              class="inline-flex items-center px-4 py-2 bg-acc text-sec font-semibold rounded-lg hover:bg-acc/90 transition-colors font-ice"
              data-aos="fade-up"
              data-aos-delay="2600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
            <a 
              href="#projects" 
              class="inline-flex items-center px-4 py-2 bg-sec border border-acc text-acc font-semibold rounded-lg hover:bg-acc hover:text-sec transition-all duration-300 font-ice"
              data-aos="fade-up"
              data-aos-delay="2700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Check My Works
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>