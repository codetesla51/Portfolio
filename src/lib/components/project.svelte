<script>
  import Heading from "$lib/components/heading.svelte";
  import Card from "$lib/components/projectCard.svelte";
  
  const projects = [
    {
      title: "E-commerce Platform",
      about: "A modern shopping experience built with SvelteKit and Tailwind CSS, featuring responsive design and seamless checkout.",
      link: "/projects/ecommerce"
    },
    {
      title: "Portfolio Website",
      about: "A clean, minimalist portfolio designed to showcase creative work with elegant animations and intuitive navigation.",
      link: "/projects/portfolio"
    },
    {
      title: "Task Management App",
      about: "Stay organized with this productivity tool featuring drag-and-drop task organization, reminders, and progress tracking.",
      link: "/projects/task-app"
    },
    {
      title: "Blog CMS",
      about: "A content management system with markdown support, image optimization, and SEO tools for modern blogging needs.",
      link: "/projects/blog-cms"
    }
  ];
</script>

<section class="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
<Heading 
  heading="My Work"
  subtext="Over the years, I've built numerous projects, but these are the ones I'm most proud of. Many are open-source, so if something stands out to you, feel free to explore the code or contribute your ideas to make them even better."
/>  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-12">
    {#each projects as project}
      <Card 
        title={project.title}
        about={project.about}
        link={project.link}
        class="w-full rounded-3xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      />
    {/each}
  </div>
</section>

<style>
  /* Additional responsive tweaks if needed */
  @media (max-width: 640px) {
    section {
      padding: 2rem 1rem;
    }
  }
</style>