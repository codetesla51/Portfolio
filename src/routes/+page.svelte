<script>
  import { onMount } from "svelte";
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/project.svelte";
  import Writing from "$lib/components/writing.svelte";

  export let data;
  let { projects } = data;

  const personalInfo = {
    fullName: "Oladele Uthman",
    jobTitle: "Backend Engineer",
    email: "uoladele99@gmail.com",
    location: "Lagos, Nigeria"
  };

  onMount(() => {
    const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    for (const element of revealElements) {
      const delay = Number(element.getAttribute("data-delay") || 0);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      observer.observe(element);
    }

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Uthman Oladele - Backend Developer | Go, PHP, PostgreSQL</title>
  <meta name="description" content="Backend developer specializing in Go, PHP, and PostgreSQL. Building scalable APIs, distributed systems, and developer tools. Based in Lagos, Nigeria.">
</svelte:head>

<Hero {personalInfo} />
<Projects {projects} />
<Writing />
