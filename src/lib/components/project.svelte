<script>
  import Heading from "$lib/components/heading.svelte";
  import Card from "$lib/components/projectCard.svelte";
  
  // Dummy project data
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

<section class="py-16 px-4 md:px-8 max-w-7xl mx-auto">
  <Heading 
    heading="My Works"
    subtext="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved."
  />
 <div class="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
  {#each projects as project}
    <Card 
      title={project.title}
      about={project.about}
      link={project.link}
      class="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] rounded-3xl shadow-lg p-6"
    />
  {/each}
</div>
</section>