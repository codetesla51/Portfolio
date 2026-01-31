<script>
  export let stats;
</script>

<div class="grid grid-cols-2 gap-4 mb-8">
  <div class="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
    <p class="text-neutral-500 text-sm mb-1">Projects</p>
    <p class="text-3xl font-semibold text-white">{stats.totalProjects}</p>
  </div>
  
  <div class="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
    <p class="text-neutral-500 text-sm mb-1">Messages</p>
    <p class="text-3xl font-semibold text-white">{stats.totalMessages}</p>
  </div>
</div>