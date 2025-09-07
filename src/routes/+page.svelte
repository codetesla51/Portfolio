<script>
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/project.svelte";
  import Contact from "$lib/components/contact.svelte";
  import About from "$lib/components/about.svelte";
  import Skills from "$lib/components/skills.svelte";
  import { onMount } from 'svelte';

  export let data;
  let { projects, error } = data;

  // Fog overlay state
  let showFogOverlay = true;

  function checkScrollPosition() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= pageHeight - 1) {
      showFogOverlay = false;
    } else {
      showFogOverlay = true;
    }
  }

  onMount(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  });

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

<!-- Fog overlay -->
{#if showFogOverlay}
  <div class="fog-overlay"></div>
{/if}

<Hero {personalInfo} />
<Projects {projects} />
<About {bioText} />
<Skills {skillCategories} />

<Contact />

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

  /* Fog overlay styled to match portfolio theme */
  .fog-overlay {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: linear-gradient(
      to top, 
      rgba(var(--sec-rgb, 15, 15, 15), 0.95), 
      rgba(var(--sec-rgb, 15, 15, 15), 0.7) 20%,
      rgba(var(--sec-rgb, 15, 15, 15), 0.3) 60%,
      transparent
    );
    backdrop-filter: blur(2px);
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 40;
  }

  /* Add subtle accent glow at the edge */
  .fog-overlay::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(var(--acc-rgb, 46, 204, 113), 0.3) 50%, 
      transparent
    );
  }
</style>