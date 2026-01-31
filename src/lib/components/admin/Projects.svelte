<script>
  import ProjectForm from './Projects/ProjectForm.svelte';  
  export let projects;
  export let showProjectForm;
  export let editMode;
  export let newProject;
  export let addNewProject;
  export let editProject;
  export let deleteProject;
  export let toggleProjectStatus;
  export let cancelAddProject;
  export let submitProject;
  export let formatDate;
</script>

<div>
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-semibold text-white">Projects</h1>
    <button 
      on:click={addNewProject} 
      class="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
    >
      + New Project
    </button>
  </div>
  
  {#if showProjectForm}
    <ProjectForm 
      {editMode} 
      {newProject} 
      {cancelAddProject} 
      {submitProject} 
    />
  {/if}
  
  <!-- Desktop Table -->
  <div class="hidden md:block bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
    <table class="w-full">
      <thead>
        <tr class="border-b border-neutral-800">
          <th class="text-left px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</th>
          <th class="text-left px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Stack</th>
          <th class="text-left px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
          <th class="text-left px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
          <th class="text-right px-5 py-3 text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-neutral-800/50">
        {#each projects as project}
          <tr class="hover:bg-neutral-800/30 transition-colors">
            <td class="px-5 py-4 text-sm text-white">{project.name}</td>
            <td class="px-5 py-4">
              <div class="flex flex-wrap gap-1">
                {#each (Array.isArray(project.tech_stack) ? project.tech_stack.slice(0, 3) : []) as tech}
                  <span class="px-2 py-0.5 text-xs bg-neutral-800 text-neutral-400 rounded">
                    {tech}
                  </span>
                {/each}
              </div>
            </td>
            <td class="px-5 py-4 text-sm text-neutral-500">{formatDate(project.created_at)}</td>
            <td class="px-5 py-4">
              <span class="px-2 py-0.5 text-xs rounded-full {project.display_status ? 'bg-green-500/10 text-green-400' : 'bg-neutral-800 text-neutral-500'}">
                {project.display_status ? 'Active' : 'Hidden'}
              </span>
            </td>
            <td class="px-5 py-4">
              <div class="flex justify-end gap-2">
                <button 
                  on:click={() => toggleProjectStatus(project.id)}
                  class="px-2 py-1 text-xs rounded border {project.display_status ? 'border-neutral-700 text-neutral-400 hover:text-white' : 'border-green-500/30 text-green-400 hover:border-green-500'} transition-colors"
                >
                  {project.display_status ? 'Hide' : 'Show'}
                </button>
                <button 
                  on:click={() => editProject(project)}
                  class="px-2 py-1 text-xs rounded border border-neutral-700 text-neutral-400 hover:text-white transition-colors"
                >
                  Edit
                </button>
                <button 
                  on:click={() => deleteProject(project.id)}
                  class="px-2 py-1 text-xs rounded border border-red-500/30 text-red-400 hover:border-red-500 transition-colors"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        {:else}
          <tr>
            <td colspan="5" class="px-5 py-8 text-center text-sm text-neutral-600">
              No projects yet
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <!-- Mobile Cards -->
  <div class="md:hidden space-y-3">
    {#each projects as project}
      <div class="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
        <div class="flex items-start justify-between mb-3">
          <div>
            <h3 class="text-sm font-medium text-white">{project.name}</h3>
            <p class="text-xs text-neutral-500 mt-0.5">{formatDate(project.created_at)}</p>
          </div>
          <span class="px-2 py-0.5 text-xs rounded-full {project.display_status ? 'bg-green-500/10 text-green-400' : 'bg-neutral-800 text-neutral-500'}">
            {project.display_status ? 'Active' : 'Hidden'}
          </span>
        </div>
        
        <div class="flex flex-wrap gap-1 mb-4">
          {#each (Array.isArray(project.tech_stack) ? project.tech_stack.slice(0, 3) : []) as tech}
            <span class="px-2 py-0.5 text-xs bg-neutral-800 text-neutral-400 rounded">
              {tech}
            </span>
          {/each}
        </div>
        
        <div class="flex gap-2">
          <button 
            on:click={() => toggleProjectStatus(project.id)}
            class="flex-1 py-1.5 text-xs rounded border {project.display_status ? 'border-neutral-700 text-neutral-400' : 'border-green-500/30 text-green-400'}"
          >
            {project.display_status ? 'Hide' : 'Show'}
          </button>
          <button 
            on:click={() => editProject(project)}
            class="flex-1 py-1.5 text-xs rounded border border-neutral-700 text-neutral-400"
          >
            Edit
          </button>
          <button 
            on:click={() => deleteProject(project.id)}
            class="flex-1 py-1.5 text-xs rounded border border-red-500/30 text-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    {:else}
      <div class="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 text-center text-sm text-neutral-600">
        No projects yet
      </div>
    {/each}
  </div>
</div>