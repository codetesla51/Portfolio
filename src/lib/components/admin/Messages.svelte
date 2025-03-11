<script>
  export let messages;
  export let markAsRead;
  export let replyToMessage;
  export let deleteMessage;
  
  let filterStatus = 'all'; // 'all', 'read', 'unread'
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
  <div class="mb-6">
    <h2 class="text-2xl font-ice text-acc">MESSAGES</h2>
  </div>
  
  <!-- Filter controls -->
  <div class="mb-4 flex flex-wrap gap-2 items-center">
    <div class="flex space-x-2">
      <button 
        class="px-3 py-1 font-mono text-xs rounded border {filterStatus === 'all' ? 'bg-acc text-white' : 'bg-sec/50 text-text border-acc/30 hover:bg-sec'}"
        on:click={() => filterStatus = 'all'}
      >
        ALL
      </button>
      <button 
        class="px-3 py-1 font-mono text-xs rounded border {filterStatus === 'unread' ? 'bg-acc text-white' : 'bg-sec/50 text-text border-acc/30 hover:bg-sec'}"
        on:click={() => filterStatus = 'unread'}
      >
        UNREAD
      </button>
      <button 
        class="px-3 py-1 font-mono text-xs rounded border {filterStatus === 'read' ? 'bg-acc text-white' : 'bg-sec/50 text-text border-acc/30 hover:bg-sec'}"
        on:click={() => filterStatus = 'read'}
      >
        READ
      </button>
    </div>
    
    <div class="flex-1 min-w-[200px]">
      <input 
        type="text" 
        bind:value={searchTerm} 
        placeholder="SEARCH MESSAGES..." 
        class="w-full px-3 py-1 bg-sec/50 border border-acc/30 rounded font-mono text-xs text-text focus:outline-none focus:border-acc"
      />
    </div>
    
    <div class="font-mono text-xs text-text/50">
      {filteredMessages.length} / {messages.length} 
      ({messages.filter(m => !m.read).length} UNREAD)
    </div>
  </div>
  
  <div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm">
    {#if filteredMessages.length === 0}
      <div class="p-8 text-center font-mono text-text/50">
        {#if searchTerm && filterStatus !== 'all'}
          NO {filterStatus.toUpperCase()} MESSAGES MATCHING '{searchTerm}'
        {:else if searchTerm}
          NO MESSAGES MATCHING '{searchTerm}'
        {:else if filterStatus !== 'all'}
          NO {filterStatus.toUpperCase()} MESSAGES
        {:else}
          NO MESSAGES AVAILABLE
        {/if}
      </div>
    {:else}
      <div class="divide-y divide-acc/10">
        {#each filteredMessages as message}
          <div class="p-4 hover:bg-sec/50 {!message.read ? 'border-l-2 border-acc' : ''}">
            <div class="flex justify-between mb-1">
              <span class="font-mono {!message.read ? 'text-acc' : 'text-text'}">{message.from}</span>
              <span class="text-xs font-mono text-text/50">{message.date}</span>
            </div>
            <p class="font-mono text-sm font-bold mb-2">{message.subject}</p>
            <p class="font-mono text-sm text-text/80">{message.content}</p>
            
            <div class="mt-3 flex space-x-2">
              {#if !message.read}
                <button 
                  class="px-2 py-1 bg-acc/80 text-white text-xs font-mono rounded hover:bg-acc"
                  on:click={() => markAsRead(message.id)}
                >
                  MARK READ
                </button>
              {/if}
              
              <button 
                class="px-2 py-1 bg-blue-500/80 text-white text-xs font-mono rounded hover:bg-blue-500"
                on:click={(e) => {
                  e.stopPropagation();
                  replyToMessage(message.from, message.subject, message.content);
                }}
              >
                REPLY IN GMAIL
              </button>
              
              <button 
                class="px-2 py-1 bg-red-500/80 text-white text-xs font-mono rounded hover:bg-red-500"
                on:click={(e) => {
                  e.stopPropagation();
                  deleteMessage(message.id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>