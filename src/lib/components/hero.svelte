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
          
          <a 
            href="https://www.facebook.com/profile.php?id=100089196350154" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-text/70 hover:text-acc transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-0.73 0-1.325 0.595-1.325 1.325v21.35c0 0.73 0.595 1.325 1.325 1.325h11.495v-9.294h-3.129v-3.622h3.129v-2.671c0-3.1 1.893-4.789 4.656-4.789 1.325 0 2.464 0.099 2.797 0.144v3.24l-1.92 0.001c-1.506 0-1.797 0.716-1.797 1.765v2.309h3.586l-0.467 3.622h-3.119v9.294h6.125c0.73 0 1.325-0.595 1.325-1.325v-21.35c0-0.73-0.595-1.325-1.325-1.325z"/></svg>
          </a>
          
          <a 
            href="https://x.com/uthman_dev?t=0byug7sWjHZjQ5dZ6fQelQ&s=09" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-text/70 hover:text-acc transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter (X)"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          
          <a 
            href="https://github.com/codetesla51" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-text/70 hover:text-acc transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/oladele-uthman-a61578298" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-text/70 hover:text-acc transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>