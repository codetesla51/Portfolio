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
  <StatsCards {stats} />
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <RecentProjects {projects} {addNewProject} />
    
    <RecentMessages {messages} {markAsRead} />
  </div>
</div>