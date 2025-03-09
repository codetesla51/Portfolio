<script>
  // Skills component props
  export let skillCategories;
</script>

<section id="skills" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 
    class="text-3xl font-bold text-acc mb-8 font-ice"
    data-aos="fade-right"
    data-aos-delay="100"
  >
    Technology Expertise
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each Object.entries(skillCategories) as [category, icons], i}
      <div 
        class="bg-card p-6 rounded-xl border border-acc/30 hover:border-acc/60 transition-all"
        data-aos="zoom-in-up"
        data-aos-delay={200 + (i * 100)}
      >
        <div 
          class="flex items-center mb-4"
          data-aos="fade-right"
          data-aos-delay={300 + (i * 100)}
          data-aos-anchor-placement="top-bottom"
        >
          <div class="w-8 h-8 rounded-full bg-sec flex items-center justify-center border border-acc/50 mr-3">
            <span class="text-acc font-bold font-ice">{i+1}</span>
          </div>
          <h3 class="text-xl font-semibold text-text capitalize font-ice">{category}</h3>
        </div>
        
        <div class="flex flex-wrap gap-4 ml-4">
          {#each icons as icon, iconIndex}
            <div 
              class="group relative"
              data-aos="fade-up"
              data-aos-delay={400 + (i * 100) + (iconIndex * 50)}
              data-aos-anchor-placement="top-bottom"
            >
              <div class="absolute -inset-0.5 bg-acc opacity-0 group-hover:opacity-30 rounded-md blur transition duration-300"></div>
              <div class="relative bg-sec p-2 rounded-md border border-acc/30 group-hover:border-acc transition-all duration-300">
                <img 
                  src={icon.svg} 
                  alt={icon.name} 
                  class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                />
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-sec text-xs font-mono text-text border border-acc rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {icon.name}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>