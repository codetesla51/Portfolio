<script>
  export let editMode;
  export let newProject;
  export let cancelAddProject;
  export let submitProject;
</script>

<div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm p-6 mb-6">
  <h3 class="text-xl font-ice text-acc mb-4">{editMode ? 'EDIT PROJECT' : 'ADD NEW PROJECT'}</h3>
  
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-mono text-text/70 mb-1">PROJECT NAME</label>
      <input 
        type="text" 
        bind:value={newProject.name} 
        class="w-full p-3 border bg-sec text-text font-mono border-acc/50 focus:border-acc focus:ring-1 focus:ring-acc rounded-md outline-none"
        placeholder="Enter project name"
      />
    </div>
    
    <div>
      <label class="block text-sm font-mono text-text/70 mb-1">TECH STACK (comma separated)</label>
      <input 
        type="text" 
        bind:value={newProject.tech_stack} 
        class="w-full p-3 border bg-sec text-text font-mono border-acc/50 focus:border-acc focus:ring-1 focus:ring-acc rounded-md outline-none"
        placeholder="Laravel, Svelte, TailwindCSS, MySQL"
      />
    </div>
    
    <div>
      <label class="block text-sm font-mono text-text/70 mb-1">DESCRIPTION</label>
      <textarea 
        bind:value={newProject.description} 
        class="w-full p-3 border bg-sec text-text font-mono border-acc/50 focus:border-acc focus:ring-1 focus:ring-acc rounded-md outline-none h-32"
        placeholder="Enter project description"
      ></textarea>
    </div>
    
    <div class="flex items-center">
      <input 
        type="checkbox" 
        id="display_status" 
        bind:checked={newProject.display_status} 
        class="mr-2 h-4 w-4 border-acc/50 focus:ring-acc text-acc"
      />
      <label for="display_status" class="text-sm font-mono text-text/70">DISPLAY ON PORTFOLIO</label>
    </div>
    
    <div class="flex justify-end space-x-4 mt-6">
      <button 
        on:click={cancelAddProject}
        class="px-4 py-2 border border-text/30 text-text font-mono text-sm rounded hover:bg-text/10"
      >
        CANCEL
      </button>
      <button 
        on:click={submitProject}
        class="px-4 py-2 bg-acc text-sec font-mono text-sm rounded hover:bg-acc/80"
      >
        {editMode ? 'UPDATE PROJECT' : 'SAVE PROJECT'}
      </button>
    </div>
  </div>
</div>