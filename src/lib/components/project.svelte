<script>
  // Projects component props
  export let projects;
  import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<section id="projects" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 
    class="text-3xl font-bold text-acc mb-8 font-ice"
    data-aos="fade-right"
    data-aos-delay="100"
  >
    Featured Projects
  </h2>
  
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