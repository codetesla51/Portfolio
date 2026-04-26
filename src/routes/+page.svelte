<script>
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
</script>

<svelte:head>
  <title>Uthman Oladele - Backend Developer | Go, PHP, PostgreSQL</title>
  <meta name="description" content="Backend developer specializing in Go, PHP, and PostgreSQL. Building scalable APIs, distributed systems, and developer tools. Based in Lagos, Nigeria.">
</svelte:head>

<Hero {personalInfo} />
<Projects {projects} />
<Writing />