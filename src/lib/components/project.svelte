<script>
  // Projects component props
  export let projects;
  import ProjectCard from '$lib/components/projectCard.svelte';
import Heading from '$lib/components/heading.svelte';
</script>

<section id="projects" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <Heading 
  badge="Portfolio"
  heading="Featured Projects" 
  subtext="A curated selection of my work showcasing expertise in modern web development, innovative solutions, and thoughtful user experiences" 
/>
  <div class="grid md:grid-cols-3 gap-6">
    {#each projects as project, i}
      <div 
        data-aos="fade-up" 
        data-aos-delay={200 + (i * 100)}
        data-aos-anchor-placement="top-bottom"
      >
        <ProjectCard {project} index={i} />
      </div>
    {/each}
  </div>
</section>