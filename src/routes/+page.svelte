<script>
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/project.svelte";
  import Contact from "$lib/components/contact.svelte";
  import About from "$lib/components/about.svelte";
  import Skills from "$lib/components/skills.svelte";
export let data;
  let { projects, error } = data;

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
    fullName: "Uthman Dev",
    jobTitle: "Backend Engineer | DevOps Enthusiast",
    email: "uoladele99@gmail.com",
    phone: "07063432968",
    location: "Ilorin, Kwara State, Nigeria",
    education: {
      institution: "University of Ilorin (UniLorin)",
      degree: "Computer Science",
      status: "Undergraduate"
    },
     projects, 
  achievements: [
    "Built open-source tools to streamline backend development",
    "Built a 2FA library from scratch using PHP",
    "Developed a REST API from scratch with PHP",
    "Over 2000 GitHub commits in 2024",
    "Maintains open-source repositories for developer tools",
  ]
  };

let bioText = [
  "// Meet Uthman Oladele - The Backend Architect 🚀",
  "const uthman = {",
  "    alias: 'UthmanDev',",
  "    role: 'Backend Engineer | DevOps Enthusiast',",
  "    experience: 'Crafting scalable, resilient backend systems.',",
  "    mindset: 'Self-taught problem solver, efficiency-driven innovator.',",
  "    techStack: ['Go', 'Ruby', 'PHP', 'Bash', 'Svelte'],",
  "    currentFocus: 'Mastering systems design, automation & backend optimization.',",
  "    philosophy: 'Write code that lasts. Build tools that matter. Automate everything.',",
  "    approach: {",
  "        architecture: 'Design for scale, optimize for performance.',",
  "        security: 'Harden every layer, assume nothing is safe.',",
  "        DevOps: 'Automate deployments, streamline workflows.',",
  "        innovation: 'Solve problems, not just write code.'",
  "    }",
  "};",
  "",
  "// The Why Behind the Code",
  "function whyIBuild() {",
  "    return `Tech should do the hard work, so people don’t have to. ",
  "            I build to automate, optimize, and empower.`;",
  "}",
  "",
  "// Core Beliefs 💡",
  "const beliefs = [",
  "    'Backend should be fast, scalable, and secure.',",
  "    'Automation isn’t optional; it’s the future.',",
  "    'Clean, efficient code is non-negotiable.',",
  "    'Every system should be built with failure recovery in mind.'",
  "];",
  "",
  "// Let’s push boundaries and build something legendary together! ⚡️"
];
</script>


  <Hero {personalInfo} />
  <About {bioText} />
  <Skills {skillCategories} />
  <Projects projects={personalInfo.projects} />
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
</style>