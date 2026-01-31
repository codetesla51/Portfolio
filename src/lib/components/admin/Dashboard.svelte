<script>
  import StatsCards from './Dashboard/StatsCards.svelte';
  import RecentProjects from './Dashboard/RecentProjects.svelte';
  import RecentMessages from './Dashboard/RecentMessages.svelte';
  
  export let stats;
  export let projects;
  export let messages;
  export let addNewProject;
  export let markAsRead;
  export let formatDate;
</script>

<div>
  <h1 class="text-2xl font-semibold text-white mb-6">Dashboard</h1>
  
  <StatsCards {stats} />
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <RecentProjects {projects} {addNewProject} />
    <RecentMessages {messages} {markAsRead} />
  </div>
</div>