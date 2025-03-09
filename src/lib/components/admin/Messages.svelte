<script>
  export let messages;
  export let markAsRead;
</script>

<div>
  <div class="mb-6">
    <h2 class="text-2xl font-ice text-acc">MESSAGES</h2>
  </div>
  
  <div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm">
    <div class="divide-y divide-acc/10">
      {#each messages as message}
        <div class="p-4 hover:bg-sec/50 cursor-pointer {!message.read ? 'border-l-2 border-acc' : ''}" on:click={() => markAsRead(message.id)}>
          <div class="flex justify-between mb-1">
            <span class="font-mono {!message.read ? 'text-acc' : 'text-text'}">{message.from}</span>
            <span class="text-xs font-mono text-text/50">{message.date}</span>
          </div>
          <p class="font-mono text-sm font-bold mb-2">{message.subject}</p>
          <p class="font-mono text-sm text-text/80">{message.content}</p>
        </div>
      {/each}
    </div>
  </div>
</div>