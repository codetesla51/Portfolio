<script>
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/project.svelte";
  import Contact from "$lib/components/contact.svelte";
  import About from "$lib/components/about.svelte";
  import Skills from "$lib/components/skills.svelte";
  import { onMount } from 'svelte';

  export let data;
  let { projects, error } = data;

  // Scroll reveal state
  let scrollY = 0;
  let innerHeight = 0;

  // Section refs for scroll detection
  let heroRef;
  let aboutRef;
  let skillsRef;
  let projectsRef;
  let contactRef;

  onMount(() => {
    const updateScroll = () => {
      scrollY = window.scrollY;
      innerHeight = window.innerHeight;
    };

    window.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  });

  // Calculate section visibility
  $: getSectionOpacity = (element) => {
    if (!element) return 1;
    
    const rect = element.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    
    // Start darkening when section is 100vh away from viewport
    const fadeStartDistance = innerHeight;
    const fadeEndDistance = innerHeight * 0.3; // Fully visible when 30% into viewport
    
    if (sectionTop > fadeStartDistance) {
      // Section is far below viewport - fully dark
      return 0.15;
    } else if (sectionTop > fadeEndDistance) {
      // Section is approaching viewport - fade in
      const progress = (fadeStartDistance - sectionTop) / (fadeStartDistance - fadeEndDistance);
      return 0.15 + (0.85 * progress);
    } else {
      // Section is in or past viewport - fully visible
      return 1;
    }
  };

  const skillCategories = {
    "Programming Languages": [
      { name: "Go", svg: "https://skillicons.dev/icons?i=go" },
      { name: "Ruby", svg: "https://skillicons.dev/icons?i=ruby" },
      { name: "PHP", svg: "https://skillicons.dev/icons?i=php" },
      { name: "Bash", svg: "https://skillicons.dev/icons?i=bash" },
      { name: "Python", svg: "https://skillicons.dev/icons?i=python" }
    ],
    "Frontend": [
      { name: "Svelte", svg: "https://skillicons.dev/icons?i=svelte" },
      { name: "Tailwind CSS", svg: "https://skillicons.dev/icons?i=tailwind" }
    ],
    "Databases": [
      { name: "SQLite", svg: "https://skillicons.dev/icons?i=sqlite" },
      { name: "MySQL", svg: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", svg: "https://skillicons.dev/icons?i=postgres" },
      { name: "Supabase", svg: "https://skillicons.dev/icons?i=supabase" }
    ],
    "DevOps & Tools": [
      { name: "Linux", svg: "https://skillicons.dev/icons?i=linux" },
      { name: "Docker", svg: "https://skillicons.dev/icons?i=docker" },
      { name: "GitHub Actions", svg: "https://skillicons.dev/icons?i=githubactions" }
    ]
  };

  const personalInfo = {
    fullName: "Oladele Uthman",
    jobTitle: "Software Engineer (Frontend & Backend) | DevOps Enthusiast",
    email: "uoladele99@gmail.com",
    phone: "07063432968",
    location: "Ilorin, Kwara State, Nigeria",
    education: {
      institution: "University of Ilorin (UniLorin)",
      degree: "Computer Science",
      status: "Undergraduate"
    },
    socialLinks: [],
    achievements: [
      "Built open-source tools to streamline backend development",
      "Built a 2FA library from scratch using PHP",
      "Developed a REST API from scratch with PHP",
      "Over 2000 GitHub commits in 2024",
      "Maintains open-source repositories for developer tools",
    ]
  };

  // Bio text for About component
  const bioText = [
    "// Meet Uthman Oladele - The Go Backend Engineer 🚀",
    "package main",
    "",
    "import (",
    "    \"fmt\"",
    "    \"time\"",
    "    \"context\"",
    ")",
    "",
    "type Developer struct {",
    "    Alias        string",
    "    Role         string",
    "    Experience   string",
    "    Mindset      string",
    "    TechStack    []string",
    "    CurrentFocus string",
    "    Philosophy   string",
    "}",
    "",
    "func NewUthman() *Developer {",
    "    return &Developer{",
    "        Alias:        \"UthmanDev\",",
    "        Role:         \"Go Backend Engineer | DevOps Enthusiast\",",
    "        Experience:   \"Crafting high-performance, concurrent systems\",",
    "        Mindset:      \"Self-taught Gopher, performance-driven innovator\",",
    "        TechStack:    []string{\"Go\", \"Ruby\", \"PHP\", \"Docker\", \"K8s\"},",
    "        CurrentFocus: \"Mastering Go concurrency & distributed systems\",",
    "        Philosophy:   \"Write idiomatic Go. Build for scale. Ship fast.\",",
    "    }",
    "}",
    "",
    "// WhyIBuild demonstrates my core motivation",
    "func (d *Developer) WhyIBuild() string {",
    "    return \"Building blazingly fast backends that handle millions \" +",
    "           \"of requests. Go's simplicity meets enterprise scale.\"",
    "}",
    "",
    "// CoreBeliefs represents my engineering principles",
    "var CoreBeliefs = []string{",
    "    \"Goroutines make concurrency elegant and efficient\",",
    "    \"Microservices should communicate via clean APIs\",",
    "    \"Performance optimization is a continuous journey\",",
    "    \"Error handling in Go prevents production disasters\",",
    "}",
    "",
    "func main() {",
    "    uthman := NewUthman()",
    "    fmt.Printf(\"Ready to build something legendary with %s!\\n\", ",
    "               uthman.TechStack[0]) // Go first! 🐹",
    "}"
  ];
</script>

<!-- Hero Section - Always fully visible -->
<section bind:this={heroRef} id="hero">
  <Hero {personalInfo} />
</section>

<!-- About Section with scroll reveal -->
<section 
  bind:this={aboutRef} 
  id="about"
  class="scroll-reveal-section"
  style="opacity: {getSectionOpacity(aboutRef)}; filter: brightness({getSectionOpacity(aboutRef) < 1 ? 0.4 : 1});"
>
  <About {bioText} />
</section>

<!-- Skills Section with scroll reveal -->
<section 
  bind:this={skillsRef} 
  id="skills"
  class="scroll-reveal-section"
  style="opacity: {getSectionOpacity(skillsRef)}; filter: brightness({getSectionOpacity(skillsRef) < 1 ? 0.4 : 1});"
>
  <Skills {skillCategories} />
</section>

<!-- Projects Section with scroll reveal -->
<section 
  bind:this={projectsRef} 
  id="projects"
  class="scroll-reveal-section"
  style="opacity: {getSectionOpacity(projectsRef)}; filter: brightness({getSectionOpacity(projectsRef) < 1 ? 0.4 : 1});"
>
  <Projects {projects} />
</section>

<!-- Contact Section with scroll reveal -->
<section 
  bind:this={contactRef} 
  id="contact"
  class="scroll-reveal-section"
  style="opacity: {getSectionOpacity(contactRef)}; filter: brightness({getSectionOpacity(contactRef) < 1 ? 0.4 : 1});"
>
  <Contact />
</section>

<style lang="postcss">
  /* Terminal cursor animation */
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Grid animation */
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }

  /* Scroll reveal sections */
  .scroll-reveal-section {
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                filter 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, filter, transform;
  }

  /* Prevent layout shift during transitions */
  section {
    position: relative;
    z-index: 1;
  }

  /* Ensure hero stays fully visible */
  #hero {
    opacity: 1 !important;
    filter: brightness(1) !important;
  }

  /* Enhanced scroll reveal effect */
  .scroll-reveal-section {
    transform: translateY(0);
  }

  .scroll-reveal-section[style*="opacity: 0.15"] {
    transform: translateY(20px);
  }

  /* Performance optimizations */
  * {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
</style>