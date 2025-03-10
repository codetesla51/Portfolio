<script>
  import { onMount, onDestroy } from 'svelte';
  export let editMode;
  export let newProject;
  export let cancelAddProject;
  export let submitProject;
  
  // For TipTap editor
  let editorElement;
  let editor;
  
  onMount(async () => {
    if (typeof window !== 'undefined') {
      // Dynamically import TipTap modules
      const { Editor } = await import('@tiptap/core');
      const StarterKit = (await import('@tiptap/starter-kit')).default;
      const Image = (await import('@tiptap/extension-image')).default;
      const Link = (await import('@tiptap/extension-link')).default;
      const Youtube = (await import('@tiptap/extension-youtube')).default;
      
      // Initialize the editor
      editor = new Editor({
        element: editorElement,
        extensions: [
          StarterKit,
          Image.configure({
            inline: true,
            allowBase64: true,
          }),
          Link.configure({
            openOnClick: false,
          }),
          Youtube.configure({
            width: 640,
            height: 360,
            controls: true,
          }),
        ],
        content: newProject.description || '',
        autofocus: false,
        onUpdate: ({ editor }) => {
          // Store HTML content for internal use
          const html = editor.getHTML();
          // You could store this HTML in a variable if needed
        }
      });
    }
  });
  
  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
  
  function handleSubmit() {
    if (editor) {
      // Get markdown from TipTap editor
      const markdown = editor.storage.markdown.getMarkdown();
      newProject.description = markdown;
    }
    submitProject();
  }
  
  // Editor command functions
  function setLink() {
    const url = prompt('URL', 'https://');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }
  
  function addImage() {
    const url = prompt('Image URL', 'https://');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }
  
  function addYoutubeVideo() {
    const url = prompt('YouTube URL', 'https://youtube.com/watch?v=');
    if (url) {
      editor.commands.setYoutubeVideo({
        src: url
      });
    }
  }
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
      
      <!-- TipTap Editor Toolbar -->
      <div class="flex flex-wrap gap-1 p-2 bg-sec border border-acc/50 rounded-t-md">
        <!-- Text formatting -->
        <button on:click={() => editor.chain().focus().toggleBold().run()} class="p-1 hover:bg-acc/20 rounded" title="Bold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
        </button>
        <button on:click={() => editor.chain().focus().toggleItalic().run()} class="p-1 hover:bg-acc/20 rounded" title="Italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
        </button>
        <button on:click={() => editor.chain().focus().toggleStrike().run()} class="p-1 hover:bg-acc/20 rounded" title="Strike">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><path d="M16 6C16 3.8 14.2 2 12 2S8 3.8 8 6"/><path d="M8 18c0 2.2 1.8 4 4 4s4-1.8 4-4"/></svg>
        </button>
        
        <span class="border-r border-acc/30 mx-1 h-6"></span>
        
        <!-- Headings -->
        <button on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} class="p-1 hover:bg-acc/20 rounded" title="Heading 2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
        </button>
        
        <span class="border-r border-acc/30 mx-1 h-6"></span>
        
        <!-- Lists -->
        <button on:click={() => editor.chain().focus().toggleBulletList().run()} class="p-1 hover:bg-acc/20 rounded" title="Bullet List">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        </button>
        <button on:click={() => editor.chain().focus().toggleOrderedList().run()} class="p-1 hover:bg-acc/20 rounded" title="Numbered List">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
        </button>
        
        <span class="border-r border-acc/30 mx-1 h-6"></span>
        
        <!-- Media -->
        <button on:click={setLink} class="p-1 hover:bg-acc/20 rounded" title="Insert Link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </button>
        <button on:click={addImage} class="p-1 hover:bg-acc/20 rounded" title="Insert Image">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </button>
        <button on:click={addYoutubeVideo} class="p-1 hover:bg-acc/20 rounded" title="Insert YouTube Video">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
        </button>
      </div>
      
      <!-- TipTap Editor Content Area -->
      <div 
        bind:this={editorElement}
        class="w-full p-3 border border-t-0 bg-sec text-text font-mono border-acc/50 focus:border-acc focus:outline-none rounded-b-md min-h-32 overflow-auto"
      ></div>
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
        on:click={handleSubmit}
        class="px-4 py-2 bg-acc text-sec font-mono text-sm rounded hover:bg-acc/80"
      >
        {editMode ? 'UPDATE PROJECT' : 'SAVE PROJECT'}
      </button>
    </div>
  </div>
</div>

<style>
  /* TipTap editor styles */
  :global(.ProseMirror) {
    outline: none;
  }
  
  :global(.ProseMirror p) {
    margin-bottom: 0.75em;
  }
  
  :global(.ProseMirror img) {
    max-width: 100%;
    height: auto;
  }
  
  :global(.ProseMirror ul),
  :global(.ProseMirror ol) {
    padding-left: 1.5em;
    margin-bottom: 0.75em;
  }
  
  :global(.ProseMirror h2) {
    font-size: 1.5em;
    margin: 0.5em 0;
  }
  
  :global(.ProseMirror a) {
    color: #3b82f6;
    text-decoration: underline;
  }
  
  :global(.ProseMirror iframe) {
    max-width: 100%;
    border-radius: 0.375rem;
    margin: 0.75em 0;
  }
</style>