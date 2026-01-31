<script>
  export let logout;
  export let activeTab = 'dashboard';
</script>

<header class="border-b border-neutral-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-8">
      <a href="/admin/dashboard" class="text-lg font-semibold text-white">
        Admin
      </a>
      
      <nav class="hidden sm:flex items-center gap-1">
        <button 
          class="px-3 py-1.5 text-sm rounded-lg transition-colors {activeTab === 'dashboard' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'}"
          on:click={() => activeTab = 'dashboard'}
        >
          Dashboard
        </button>
        <button 
          class="px-3 py-1.5 text-sm rounded-lg transition-colors {activeTab === 'projects' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'}"
          on:click={() => activeTab = 'projects'}
        >
          Projects
        </button>
        <button 
          class="px-3 py-1.5 text-sm rounded-lg transition-colors {activeTab === 'messages' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'}"
          on:click={() => activeTab = 'messages'}
        >
          Messages
        </button>
      </nav>
    </div>
    
    <button 
      on:click={logout} 
      class="text-sm text-neutral-500 hover:text-white transition-colors"
    >
      Logout
    </button>
  </div>
  
  <!-- Mobile nav -->
  <div class="sm:hidden border-t border-neutral-800 px-6 py-2 flex gap-1">
    <button 
      class="flex-1 px-3 py-2 text-xs rounded-lg transition-colors {activeTab === 'dashboard' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}"
      on:click={() => activeTab = 'dashboard'}
    >
      Dashboard
    </button>
    <button 
      class="flex-1 px-3 py-2 text-xs rounded-lg transition-colors {activeTab === 'projects' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}"
      on:click={() => activeTab = 'projects'}
    >
      Projects
    </button>
    <button 
      class="flex-1 px-3 py-2 text-xs rounded-lg transition-colors {activeTab === 'messages' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}"
      on:click={() => activeTab = 'messages'}
    >
      Messages
    </button>
  </div>
</header>
