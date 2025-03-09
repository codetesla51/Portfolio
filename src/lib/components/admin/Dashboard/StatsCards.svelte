<script>
  export let stats;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
  <div class="bg-card p-6 rounded-lg border border-acc/30 backdrop-blur-sm">
    <h3 class="text-sm font-mono text-text/70 mb-1">TOTAL PROJECTS</h3>
    <p class="text-4xl font-ice text-acc">{stats.totalProjects}</p>
  </div>
  
  <div class="bg-card p-6 rounded-lg border border-acc/30 backdrop-blur-sm">
    <h3 class="text-sm font-mono text-text/70 mb-1">TOTAL MESSAGES</h3>
    <p class="text-4xl font-ice text-acc">{stats.totalMessages}</p>
  </div>
</div>