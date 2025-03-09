<script>
  export let projects;
  export let addNewProject;
</script>

<div>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-ice text-acc">RECENT PROJECTS</h2>
    <button on:click={addNewProject} class="text-sm font-mono px-3 py-1 bg-acc text-sec rounded hover:bg-acc/80 transition-all duration-300">
      + ADD PROJECT
    </button>
  </div>
  
  <div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm overflow-hidden">
    <table class="w-full">
      <thead>
        <tr class="border-b border-acc/30">
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">PROJECT</th>
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">STATUS</th>
        </tr>
      </thead>
      <tbody>
        {#each projects.slice(0, 3) as project}
          <tr class="border-b border-acc/10">
            <td class="px-4 py-3 font-mono">{project.name}</td>
            <td class="px-4 py-3">
              <span class="inline-block px-2 py-1 text-xs font-mono rounded {project.display_status ? 'bg-acc/20 text-acc' : 'bg-red-500/20 text-red-400'}">
                {project.display_status ? 'ACTIVE' : 'DISABLED'}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>