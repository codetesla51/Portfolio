<script>
  import Profile from "../../assets/add04cf25230636a7806eb5ce532bc8e.jpg";
  import Resume from "../../assets/resume.pdf";
  export let personalInfo;
</script>

<section id="hero" class="relative overflow-hidden min-h-screen flex items-center">
  <!-- Clean background -->
  <div class="absolute inset-0 bg-gradient-to-br from-sec via-sec/95 to-sec/90"></div>
  
  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      
      <!-- Clean Profile Section -->
      <div class="flex justify-center lg:justify-start order-2 lg:order-1" data-aos="fade-right" data-aos-delay="100">
        <div class="relative">
          <!-- Subtle glow -->
          <div class="absolute inset-0 bg-acc blur-3xl opacity-20 rounded-full scale-110"></div>
          
          <!-- Clean profile image -->
          <div class="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-acc/20 shadow-2xl">
            <img src={Profile} alt="Uthman Dev" class="object-cover w-full h-full" />
          </div>

          <!-- Status indicator -->
          <div class="absolute -top-4 -right-4 bg-acc text-sec px-4 py-2 rounded-full font-mono text-sm font-bold shadow-lg">
            Available
          </div>
        </div>
      </div>

      <!-- Clean Content Section -->
      <div class="order-1 lg:order-2">
        <!-- Main heading -->
        <div class="mb-8">
          <div class="inline-block p-1 bg-gradient-to-r from-acc/20 to-acc/10 rounded-2xl mb-6">
            <div class="bg-sec/80 backdrop-blur-sm rounded-xl px-6 py-3">
              <span class="font-mono text-acc/80 text-sm font-semibold tracking-wider uppercase">Full Stack Developer</span>
            </div>
          </div>
          
          <h1 class="text-5xl lg:text-7xl font-black text-acc mb-6 font-ice leading-tight">
            Uthman Dev
          </h1>
          
          <!-- Decorative line -->
          <div class="flex items-center space-x-4 mb-8">
            <div class="w-20 h-0.5 bg-gradient-to-r from-acc/60 to-acc/30"></div>
            <div class="w-2 h-2 bg-acc rounded-full animate-pulse"></div>
            <div class="w-12 h-0.5 bg-gradient-to-r from-acc/30 to-transparent"></div>
          </div>
          
          <p class="text-xl lg:text-2xl text-text/90 leading-relaxed mb-8 max-w-lg">
            Creating exceptional digital experiences with modern technologies and thoughtful design
          </p>
        </div>

        <!-- Essential info only -->
        <div class="mb-8 space-y-4">
          <div class="flex items-center text-text/80">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-acc" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="font-mono text-lg">{personalInfo.location}</span>
          </div>
          
          <div class="flex items-center text-text/80">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-acc" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="font-mono text-lg">{personalInfo.email}</span>
          </div>
        </div>

        <!-- Clean action buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href={Resume} 
            download 
            class="inline-flex items-center justify-center px-8 py-4 bg-acc text-sec font-bold rounded-xl hover:bg-acc/90 hover:scale-105 transition-all duration-300 font-ice text-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
          
          <a 
            href="#projects" 
            class="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-acc text-acc font-bold rounded-xl hover:bg-acc hover:text-sec hover:scale-105 transition-all duration-300 font-ice text-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 7h.01M7 3h5c.512 0 .987.17 1.387.48l5.226 4.168c.377.302.387.922 0 1.204L13.387 12.52c-.4.31-.875.48-1.387.48H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z"/>
            </svg>
            View Projects
          </a>
        </div>

        <!-- Clean social links -->
        <div class="flex items-center space-x-6" data-aos="fade-up" data-aos-delay="600">
          <span class="text-text/60 font-mono text-sm">Connect:</span>
          {#each personalInfo.socialLinks as social, i}
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-text/70 hover:text-acc transition-all duration-300 transform hover:scale-110"
              aria-label={social.name}
            >
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>