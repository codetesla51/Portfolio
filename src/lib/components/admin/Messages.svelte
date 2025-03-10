<script>
  export let messages;
  export let markAsRead;
  export let replyToMessage;
  export let deleteMessage;
</script>

<div>
  <div class="mb-6">
    <h2 class="text-2xl font-ice text-acc">MESSAGES</h2>
  </div>
  
  <div class="bg-card rounded-lg border border-acc/30 backdrop-blur-sm">
    <div class="divide-y divide-acc/10">
      {#each messages as message}
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
                replyToMessage(message.from, message.subject,message.content);
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
  </div>
</div>