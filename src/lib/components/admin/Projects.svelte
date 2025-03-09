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
  <div class="mb-6 flex justify-between items-center">
    <h2 class="text-2xl font-ice text-acc">PROJECTS</h2>
    <button on:click={addNewProject} class="text-sm font-mono px-4 py-2 bg-acc text-sec rounded hover:bg-acc/80 transition-all duration-300">
      + ADD PROJECT
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
  
  <div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm overflow-hidden">
    <table class="w-full">
      <thead>
        <tr class="border-b border-acc/30">
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">ID</th>
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">PROJECT NAME</th>
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">TECH STACK</th>
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">CREATED</th>
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">STATUS</th>
          <th class="text-left px-4 py-3 font-mono font-normal text-sm text-text/70">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {#each projects as project}
          <tr class="border-b border-acc/10">
            <td class="px-4 py-3 font-mono">{project.id}</td>
            <td class="px-4 py-3 font-mono">{project.name}</td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                {#each project.tech_stack as tech}
                  <span class="inline-block px-2 py-0.5 text-xs font-mono bg-acc/10 text-acc rounded">
                    {tech}
                  </span>
                {/each}
              </div>
            </td>
            <td class="px-4 py-3 font-mono text-sm">{formatDate(project.created_at)}</td>
            <td class="px-4 py-3">
              <span class="inline-block px-2 py-1 text-xs font-mono rounded {project.display_status ? 'bg-acc/20 text-acc' : 'bg-red-500/20 text-red-400'}">
                {project.display_status ? 'ACTIVE' : 'DISABLED'}
              </span>
            </td>
            <td class="px-4 py-3">
              <div class="flex space-x-2">
                <button 
                  on:click={() => toggleProjectStatus(project.id)}
                  class="text-xs font-mono px-2 py-1 rounded border {project.display_status ? 'border-red-500/50 text-red-400 hover:bg-red-500/10' : 'border-acc/50 text-acc hover:bg-acc/10'}"
                >
                  {project.display_status ? 'DISABLE' : 'ENABLE'}
                </button>
                <button 
                  on:click={() => editProject(project)}
                  class="text-xs font-mono px-2 py-1 rounded border border-acc/50 text-acc hover:bg-acc/10"
                >
                  EDIT
                </button>
                <button 
                  on:click={() => deleteProject(project.id)}
                  class="text-xs font-mono px-2 py-1 rounded border border-red-500/50 text-red-400 hover:bg-red-500/10"
                >
                  DELETE
                </button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>