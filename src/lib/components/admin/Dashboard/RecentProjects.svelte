<script>
  export let projects;
  export let addNewProject;
</script>

<div class="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
  <div class="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
    <h2 class="text-sm font-medium text-white">Recent Projects</h2>
    <button 
      on:click={addNewProject} 
      class="text-xs text-neutral-500 hover:text-white transition-colors"
    >
      + Add
    </button>
  </div>
  
  <div class="divide-y divide-neutral-800/50">
    {#each projects.slice(0, 4) as project}
      <div class="px-5 py-3 flex items-center justify-between">
        <span class="text-sm text-neutral-300 truncate">{project.name}</span>
        <span class="text-xs px-2 py-0.5 rounded-full {project.display_status ? 'bg-green-500/10 text-green-400' : 'bg-neutral-800 text-neutral-500'}">
          {project.display_status ? 'Active' : 'Hidden'}
        </span>
      </div>
    {:else}
      <div class="px-5 py-8 text-center text-sm text-neutral-600">
        No projects yet
      </div>
    {/each}
  </div>
</div>