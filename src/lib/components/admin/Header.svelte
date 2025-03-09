<script>
  export let logout;
</script>

<header class="bg-card border-b border-acc/30 backdrop-blur-sm sticky top-0 z-10">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <div class="flex items-center">
      <h1 class="text-2xl font-ice text-acc">ADMIN CONSOLE</h1>
    </div>
    <button on:click={logout} class="font-mono text-sm px-4 py-2 border border-acc/50 hover:bg-acc hover:text-sec rounded transition-all duration-300">
      LOGOUT
    </button>
  </div>
</header>