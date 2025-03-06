<script>
  const skillCategories = {
    'Programming Languages': [
      { name: "Go", svg: "https://skillicons.dev/icons?i=go" },
      { name: "Ruby", svg: "https://skillicons.dev/icons?i=ruby" },
      { name: "PHP", svg: "https://skillicons.dev/icons?i=php" },
      { name: "Bash", svg: "https://skillicons.dev/icons?i=bash" },
      { name: "Python", svg: "https://skillicons.dev/icons?i=python" }
    ],
    'Frontend': [
      { name: "Svelte", svg: "https://skillicons.dev/icons?i=svelte" },
      { name: "Tailwind CSS", svg: "https://skillicons.dev/icons?i=tailwind" }
    ],
    'Databases': [
      { name: "SQLite", svg: "https://skillicons.dev/icons?i=sqlite" },
      { name: "MySQL", svg: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", svg: "https://skillicons.dev/icons?i=postgresql" },
      { name: "Supabase", svg: "https://skillicons.dev/icons?i=supabase" }
    ],
    'DevOps & Tools': [
      { name: "Linux", svg: "https://skillicons.dev/icons?i=linux" },
      { name: "Docker", svg: "https://skillicons.dev/icons?i=docker" },
      { name: "GitHub Actions", svg: "https://skillicons.dev/icons?i=githubactions" }
    ]
  };

  const personalInfo = {
    fullName: "Uthman Dev",
    jobTitle: "Full Stack Developer & Systems Design Enthusiast",
    email: "contact@uthmandev.com",
    phone: "+1 (234) 567-8900",
    location: "Ilorin, Kwara State, Nigeria",
    education: {
      institution: "University of Ilorin (UniLorin)",
      degree: "Computer Science",
      status: "Undergraduate"
    },
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/codetesla51",
        svg: "https://skillicons.dev/icons?i=github"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uthman-dev/",
        svg: "https://skillicons.dev/icons?i=linkedin"
      }
    ]
  };

  // Abstract SVG generator function
  function generateAbstractSVG() {
    return `
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="abstractGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2ecc71" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#1e1e1e" stop-opacity="0.5"/>
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#abstractGradient)"/>
        <g transform="translate(200, 200) rotate(45)">
          <path 
            d="M0,-150 
               Q75,-75 150,0 
               Q75,75 0,150 
               Q-75,75 -150,0 
               Q-75,-75 0,-150Z" 
            fill="none" 
            stroke="#2ecc71" 
            stroke-width="3"
            opacity="0.7"
          />
          <circle cx="0" cy="0" r="30" fill="#2ecc71" opacity="0.3"/>
        </g>
      </svg>
    `;
  }
</script>

<div class="bg-sec text-text min-h-screen py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto space-y-16">
    <div class="grid md:grid-cols-3 gap-10">
      <div class="md:col-span-1 flex justify-center items-center">
        <div class="relative w-64 h-64">
          {@html generateAbstractSVG()}
        </div>
      </div>

      <div class="md:col-span-2 bg-card rounded-lg p-8 space-y-6">
        <div>
          <h1 class="text-4xl font-bold text-acc mb-2 tracking-tight font-ice">
            {personalInfo.fullName}
          </h1>
          <p class="text-xl text-text/80 mb-6 font-mono">
            {personalInfo.jobTitle}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold text-acc mb-2">Contact</h3>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
          </div>
          <div>
            <h3 class="font-semibold text-acc mb-2">Education</h3>
            <p>{personalInfo.education.institution}</p>
            <p>{personalInfo.education.degree}</p>
            <p>{personalInfo.education.status}</p>
          </div>
        </div>

        <div class="flex items-center space-x-4 mt-6">
          <div class="flex space-x-4">
            {#each personalInfo.socialLinks as social}
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="text-text hover:text-acc transition-colors"
              >
                <img src={social.svg} alt={social.name} class="w-6 h-6" />
              </a>
            {/each}
          </div>
          <a 
            href="/path/to/uthman-dev-cv.pdf" 
            download 
            class="inline-flex items-center px-4 py-2 bg-acc text-sec font-semibold rounded-lg hover:bg-acc/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>

    <div class="bg-card rounded-lg p-8">
      <h2 class="text-3xl font-bold text-acc mb-8 font-ice">Professional Profile</h2>
      <div class="text-text/90 space-y-4">
        <p>
          I'm a passionate computer science student at the University of Ilorin, 
          deeply invested in the art of software engineering and systems design. 
          My journey in technology is driven by a relentless curiosity to understand 
          and solve complex computational challenges.
        </p>
        <p>
          As a full-stack developer, I specialize in crafting robust, scalable 
          solutions that bridge innovative design with technical excellence. 
          My expertise spans multiple programming languages and frameworks, 
          with a particular focus on creating efficient and elegant software architectures.
        </p>
        <p>
          Beyond coding, I'm fascinated by systems design, exploring how complex 
          technological ecosystems can be built to solve real-world problems 
          with simplicity and efficiency.
        </p>
      </div>
    </div>

    <div class="bg-card rounded-lg p-8">
      <h2 class="text-3xl font-bold text-acc mb-8 font-ice">Technology Expertise</h2>
      {#each Object.entries(skillCategories) as [category, icons]}
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-text/80 mb-4 capitalize font-mono">{category}</h3>
          <div class="flex flex-wrap gap-4">
            {#each icons as icon}
              <div class="tooltip group" data-tip={icon.name}>
                <img 
                  src={icon.svg} 
                  alt={icon.name} 
                  class="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  /* Additional custom styles can be added here if needed */
</style>