<script>
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/project.svelte";
  import Writing from "$lib/components/writing.svelte";

  export let data;
  let { projects, currentlyBuilding } = data;

  const personalInfo = {
    fullName: "Oladele Uthman",
    jobTitle: "Backend Engineer",
    email: "uoladele99@gmail.com",
    location: "Lagos, Nigeria"
  };
</script>

<svelte:head>
  <title>Uthman Oladele - Go Backend Engineer</title>
  <meta name="description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <link rel="canonical" href="https://devuthman.vercel.app/">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Uthman Oladele - Go Backend Engineer">
  <meta property="og:description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <meta property="og:url" content="https://devuthman.vercel.app/">
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/149274873?v=4">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Uthman Oladele - Go Backend Engineer">
  <meta name="twitter:description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/149274873?v=4">

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Uthman Oladele",
      "jobTitle": "Go Backend Engineer",
      "email": "mailto:uoladele99@gmail.com",
      "url": "https://devuthman.vercel.app/",
      "sameAs": ["https://github.com/codetesla51"]
    }
  </script>
</svelte:head>

<Hero {personalInfo} {currentlyBuilding} />
<Projects {projects} />
<Writing />
