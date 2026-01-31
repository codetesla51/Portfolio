<script>
  export let messages;
  export let markAsRead;
</script>

<div class="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden">
  <div class="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
    <h2 class="text-sm font-medium text-white">Recent Messages</h2>
    <span class="text-xs text-neutral-500">
      {messages.filter(m => !m.read).length} unread
    </span>
  </div>
  
  <div class="divide-y divide-neutral-800/50">
    {#each messages.slice(0, 4) as message}
      <button 
        class="w-full px-5 py-3 text-left hover:bg-neutral-800/30 transition-colors {!message.read ? 'border-l-2 border-white' : ''}"
        on:click={() => markAsRead(message.id)}
      >
        <div class="flex items-center justify-between mb-1">
          <span class="text-sm {!message.read ? 'text-white font-medium' : 'text-neutral-400'} truncate">
            {message.from}
          </span>
          <span class="text-xs text-neutral-600 shrink-0 ml-2">{message.date}</span>
        </div>
        <p class="text-xs text-neutral-500 truncate">{message.subject}</p>
      </button>
    {:else}
      <div class="px-5 py-8 text-center text-sm text-neutral-600">
        No messages yet
      </div>
    {/each}
  </div>
</div>