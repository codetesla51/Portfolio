<script>
  export let messages;
  export let markAsRead;
</script>

<div>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-ice text-acc">RECENT MESSAGES</h2>
    <span class="text-sm font-mono px-3 py-1 bg-acc/20 text-acc rounded">
      {messages.filter(m => !m.read).length} UNREAD
    </span>
  </div>
  
  <div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm overflow-hidden">
    <div class="divide-y divide-acc/10">
      {#each messages.slice(0, 3) as message}
        <div class="p-4 hover:bg-sec/50 cursor-pointer {!message.read ? 'border-l-2 border-acc' : ''}" on:click={() => markAsRead(message.id)}>
          <div class="flex justify-between mb-1">
            <span class="font-mono {!message.read ? 'text-acc' : 'text-text'}">{message.from}</span>
            <span class="text-xs font-mono text-text/50">{message.date}</span>
          </div>
          <p class="font-mono text-sm {!message.read ? 'font-bold' : 'text-text/80'}">{message.subject}</p>
        </div>
      {/each}
    </div>
  </div>
</div>