<script>
  export let editMode;
  export let newProject;
  export let cancelAddProject;
  export let submitProject;
</script>

<div class="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 mb-6">
  <h3 class="text-lg font-medium text-white mb-6">{editMode ? 'Edit Project' : 'New Project'}</h3>
  
  <div class="space-y-5">
    <div>
      <label class="block text-sm text-neutral-400 mb-2">Name</label>
      <input 
        type="text" 
        bind:value={newProject.name} 
        class="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
        placeholder="Project name"
      />
    </div>
    
    <div>
      <label class="block text-sm text-neutral-400 mb-2">Tech Stack</label>
      <input 
        type="text" 
        bind:value={newProject.tech_stack} 
        class="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
        placeholder="Go, PostgreSQL, Redis (comma separated)"
      />
    </div>
    
    <div>
      <label class="block text-sm text-neutral-400 mb-2">Description</label>
      <textarea 
        bind:value={newProject.description} 
        class="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors h-32 resize-none"
        placeholder="Project description..."
      ></textarea>
    </div>
    
    <div>
      <label class="block text-sm text-neutral-400 mb-2">Image URL</label>
      <input 
        type="text" 
        bind:value={newProject.image} 
        class="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
        placeholder="https://..."
      />
    </div>
    
    <div class="flex items-center gap-3">
      <input 
        type="checkbox" 
        id="display_status" 
        bind:checked={newProject.display_status} 
        class="w-4 h-4 rounded border-neutral-700 bg-black text-white focus:ring-0 focus:ring-offset-0"
      />
      <label for="display_status" class="text-sm text-neutral-400">Show on portfolio</label>
    </div>
    
    <div class="flex justify-end gap-3 pt-4">
      <button 
        on:click={cancelAddProject}
        class="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
      >
        Cancel
      </button>
      <button 
        on:click={submitProject}
        class="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
      >
        {editMode ? 'Update' : 'Create'}
      </button>
    </div>
  </div>
</div>