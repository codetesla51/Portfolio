<script>
  export let messages;
  export let markAsRead;
  export let replyToMessage;
  export let deleteMessage;
  
  let filterStatus = 'all';
  let searchTerm = '';
  
  $: filteredMessages = messages
    .filter(message => {
      if (filterStatus === 'all') return true;
      if (filterStatus === 'read') return message.read;
      if (filterStatus === 'unread') return !message.read;
      return true;
    })
    .filter(message => {
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return (
        (message.name && message.name.toLowerCase().includes(term)) ||
        message.from.toLowerCase().includes(term) ||
        message.subject.toLowerCase().includes(term) ||
        message.content.toLowerCase().includes(term)
      );
    });
</script>

<div>
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-2xl font-semibold text-white">Messages</h1>
    <span class="text-sm text-neutral-500">
      {messages.filter(m => !m.read).length} unread
    </span>
  </div>
  
  <!-- Filters -->
  <div class="flex flex-col sm:flex-row gap-3 mb-6">
    <div class="flex gap-1">
      <button 
        class="px-3 py-1.5 text-xs rounded-lg transition-colors {filterStatus === 'all' ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 hover:text-white'}"
        on:click={() => filterStatus = 'all'}
      >
        All
      </button>
      <button 
        class="px-3 py-1.5 text-xs rounded-lg transition-colors {filterStatus === 'unread' ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 hover:text-white'}"
        on:click={() => filterStatus = 'unread'}
      >
        Unread
      </button>
      <button 
        class="px-3 py-1.5 text-xs rounded-lg transition-colors {filterStatus === 'read' ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-400 hover:text-white'}"
        on:click={() => filterStatus = 'read'}
      >
        Read
      </button>
    </div>
    
    <input 
      type="text" 
      bind:value={searchTerm} 
      placeholder="Search messages..." 
      class="flex-1 px-4 py-1.5 text-sm bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600"
    />
  </div>
  
  <!-- Messages List -->
  <div class="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
    {#if filteredMessages.length === 0}
      <div class="p-8 text-center text-sm text-neutral-600">
        {#if searchTerm}
          No messages matching "{searchTerm}"
        {:else if filterStatus !== 'all'}
          No {filterStatus} messages
        {:else}
          No messages yet
        {/if}
      </div>
    {:else}
      <div class="divide-y divide-neutral-800/50">
        {#each filteredMessages as message}
          <div class="p-4 hover:bg-neutral-800/30 transition-colors {!message.read ? 'border-l-2 border-white' : ''}">
            <div class="flex items-start justify-between mb-2">
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-sm font-medium {!message.read ? 'text-white' : 'text-neutral-400'} truncate">
                    {message.from}
                  </span>
                  {#if !message.read}
                    <span class="px-1.5 py-0.5 text-[10px] bg-white text-black rounded">NEW</span>
                  {/if}
                </div>
                <p class="text-sm {!message.read ? 'text-white font-medium' : 'text-neutral-400'}">{message.subject}</p>
              </div>
              <span class="text-xs text-neutral-600 shrink-0 ml-4">{message.date}</span>
            </div>
            
            <p class="text-sm text-neutral-500 mb-4 line-clamp-2">{message.content}</p>
            
            <div class="flex flex-wrap gap-2">
              {#if !message.read}
                <button 
                  class="px-3 py-1.5 text-xs bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
                  on:click={() => markAsRead(message.id)}
                >
                  Mark Read
                </button>
              {/if}
              
              <button 
                class="px-3 py-1.5 text-xs border border-neutral-700 text-neutral-400 rounded-lg hover:text-white hover:border-neutral-600 transition-colors"
                on:click={(e) => {
                  e.stopPropagation();
                  replyToMessage(message.from, message.subject, message.content);
                }}
              >
                Reply
              </button>
              
              <button 
                class="px-3 py-1.5 text-xs border border-red-500/30 text-red-400 rounded-lg hover:border-red-500 transition-colors"
                on:click={(e) => {
                  e.stopPropagation();
                  deleteMessage(message.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>