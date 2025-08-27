<script>
  import Profile from "../../assets/add04cf25230636a7806eb5ce532bc8e.jpg";
  import Resume from "../../assets/resume.pdf";
  export let personalInfo;
</script>

<section id="hero" class="relative overflow-hidden min-h-screen flex items-center">
  <!-- Enhanced background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-sec via-sec/95 to-sec/90"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--acc-rgb),0.05)_0%,transparent_50%)]"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="grid lg:grid-cols-12 gap-12 items-center">
      
      <!-- Enhanced Profile Section -->
      <div class="lg:col-span-5 flex justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="100">
        <div class="relative group">
          <!-- Enhanced glow effect -->
          <div class="absolute inset-0 bg-acc blur-2xl opacity-20 rounded-full scale-110 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div class="absolute inset-0 bg-acc blur-xl opacity-15 rounded-full scale-125 animate-pulse"></div>

          <!-- Main profile image with enhanced styling -->
          <div class="relative w-80 h-80 rounded-2xl overflow-hidden border-3 border-acc/30 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-2xl">
            <img src={Profile} alt="Uthman Dev - Profile" class="object-cover w-full h-full filter brightness-110" />
            <!-- Subtle overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-sec/20 to-transparent"></div>
          </div>

          <!-- Enhanced skill badges -->
          <div class="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm p-3 rounded-xl border-2 border-acc/40 transform rotate-12 hover:rotate-6 transition-all duration-300 shadow-lg" data-aos="fade-in" data-aos-delay="600">
            <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte" class="w-10 h-10" />
          </div>
          <div class="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm p-3 rounded-xl border-2 border-acc/40 transform -rotate-12 hover:-rotate-6 transition-all duration-300 shadow-lg" data-aos="fade-in" data-aos-delay="800">
            <img src="https://skillicons.dev/icons?i=go" alt="Go" class="w-10 h-10" />
          </div>

          <!-- Enhanced "OPEN TO WORK" badge -->
          <div class="absolute top-24 -left-10 bg-card/95 backdrop-blur-sm p-3 rounded-full border-3 border-acc/50 shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 group cursor-pointer" data-aos="fade-in" data-aos-delay="900">
            <div class="bg-gradient-to-br from-acc to-acc/80 text-sec w-20 h-20 rounded-full flex items-center justify-center font-ice font-bold text-sm shadow-inner">
              <div class="text-center">
                <span class="block text-xs">OPEN</span>
                <span class="block text-xs font-black">TO WORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Content Section -->
      <div class="lg:col-span-7">
        <!-- Terminal-style header with enhanced design -->
        <div class="bg-card/80 backdrop-blur-lg rounded-2xl border-2 border-acc/20 shadow-2xl overflow-hidden" data-aos="fade-left" data-aos-delay="300">
          <!-- Enhanced terminal header -->
          <div class="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-card to-card/90 border-b border-acc/20">
            <div class="flex items-center space-x-2">
              <div class="w-3.5 h-3.5 rounded-full bg-red-500 shadow-sm"></div>
              <div class="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-sm"></div>
              <div class="w-3.5 h-3.5 rounded-full bg-acc shadow-sm"></div>
              <div class="ml-3 text-sm font-mono opacity-70">~/portfolio/uthman-dev</div>
            </div>
            <div class="flex items-center space-x-2 opacity-60">
              <div class="w-2 h-2 rounded-full bg-acc animate-pulse"></div>
              <span class="text-xs font-mono">online</span>
            </div>
          </div>

          <div class="p-8 lg:p-10">
            <!-- Enhanced name and title -->
            <div class="mb-8">
              <h1 class="text-5xl lg:text-6xl font-black text-acc mb-3 tracking-tight font-ice leading-none">
                uthman dev
              </h1>
              <p class="text-2xl lg:text-3xl text-text/90 font-mono inline-flex items-center">
                {personalInfo.jobTitle}
                <span class="ml-3 h-5 w-5 bg-acc animate-pulse rounded-sm"></span>
              </p>
            </div>

            <!-- Enhanced info grid -->
            <div class="grid md:grid-cols-2 gap-8 mb-8" data-aos="fade-up" data-aos-delay="1800">
              <div class="space-y-6">
                <div>
                  <h3 class="font-bold text-acc mb-3 font-ice text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h3>
                  <p class="font-mono text-text/90 text-lg">{personalInfo.location}</p>
                </div>
                
                <div>
                  <h3 class="font-bold text-acc mb-3 font-ice text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </h3>
                  <div class="space-y-2">
                    <p class="font-mono text-text/90">{personalInfo.email}</p>
                    <p class="font-mono text-text/90">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h3 class="font-bold text-acc mb-3 font-ice text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Education
                  </h3>
                  <div class="space-y-1">
                    <p class="font-mono text-text/90">{personalInfo.education.institution}</p>
                    <p class="font-mono text-text/80 ml-4">{personalInfo.education.degree}</p>
                    <p class="font-mono text-acc font-semibold ml-4">{personalInfo.education.status}</p>
                  </div>
                </div>

                <div>
                  <h3 class="font-bold text-acc mb-3 font-ice text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Achievements
                  </h3>
                  <ul class="font-mono space-y-2">
                    {#each personalInfo.achievements as achievement, i}
                      <li class="flex items-start text-text/90" data-aos="fade-up" data-aos-delay={2000 + (i * 200)}>
                        <span class="text-acc mr-3 text-lg font-bold">▸</span>
                        <span class="leading-relaxed">{achievement}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            </div>

            <!-- Enhanced social links and buttons -->
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6" data-aos="fade-up" data-aos-delay="2400">
              <div class="flex items-center space-x-4">
                <span class="text-acc font-ice font-semibold">Connect:</span>
                <div class="flex space-x-4">
                  {#each personalInfo.socialLinks as social, i}
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      class="text-text hover:text-acc transition-all duration-300 transform hover:scale-125 p-2 rounded-lg hover:bg-acc/10"
                      aria-label={social.name}
                      data-aos="zoom-in"
                      data-aos-delay={2500 + (i * 100)}
                    >
                      {@html social.icon}
                    </a>
                  {/each}
                </div>
              </div>

              <div class="flex flex-wrap gap-4">
                <a 
                  href={Resume} 
                  download 
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-acc to-acc/90 text-sec font-bold rounded-xl hover:from-acc/90 hover:to-acc hover:scale-105 transition-all duration-300 font-ice shadow-lg shadow-acc/25"
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
                  class="inline-flex items-center px-6 py-3 bg-transparent border-2 border-acc text-acc font-bold rounded-xl hover:bg-acc hover:text-sec hover:scale-105 transition-all duration-300 font-ice shadow-lg hover:shadow-acc/25"
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
    </div>
  </div>
</section>