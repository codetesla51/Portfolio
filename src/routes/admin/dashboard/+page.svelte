<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  import Header from '$lib/components/admin/Header.svelte';
import Dashboard from '$lib/components/admin/Dashboard.svelte';
import Projects from '$lib/components/admin/Projects.svelte';
import Messages from '$lib/components/admin/Messages.svelte';
import Footer from '$lib/components/admin/Footer.svelte';
  let stats = {
    totalProjects: 0,
    totalMessages: 0
  };
  
  let projects = [];
  let messages = [];
  let loading = true;
  let activeTab = 'dashboard';
  
  // Project form
  let showProjectForm = false;
  let editMode = false;
  let newProject = {
    id: null,
    name: '',
    tech_stack: '',
    description: '',
    display_status: true
  };
  
  onMount(async () => {
    // Simulate API fetch
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    stats = {
      totalProjects: 24,
      totalMessages: 42
    };
    
    projects = [
      { id: 1, name: "Brevity - AI-Powered PDF Summarizer", tech_stack: ["Laravel", "Svelte", "TailwindCSS", "MySQL"], slug: "brevity-ai-powered-pdf-summarizer", display_status: true, created_at: "2025-03-08T13:32:16.000000Z" },
      { id: 2, name: "CodeCollab - Real-time Coding Platform", tech_stack: ["React", "Node.js", "Socket.io", "MongoDB"], slug: "codecollab-platform", display_status: true, created_at: "2025-03-01T10:22:36.000000Z" },
      { id: 3, name: "FitTrack - Fitness Tracking App", tech_stack: ["Flutter", "Firebase", "TensorFlow"], slug: "fittrack-app", display_status: false, created_at: "2025-02-15T08:41:52.000000Z" },
      { id: 4, name: "EcoShop - Sustainable Marketplace", tech_stack: ["Vue.js", "Django", "PostgreSQL"], slug: "ecoshop-marketplace", display_status: true, created_at: "2025-02-05T15:19:43.000000Z" }
    ];
    
    messages = [
      { id: 1, from: "johndoe@example.com", subject: "Project Inquiry", date: "2025-03-09", read: false, content: "Hi, I'm interested in your web development services. Can we schedule a call?" },
      { id: 2, from: "recruiter@techcompany.com", subject: "Job Opportunity", date: "2025-03-08", read: true, content: "Hello, we were impressed by your portfolio and would like to discuss a potential role at our company." },
      { id: 3, from: "feedback@portfolio.com", subject: "Great Work!", date: "2025-03-07", read: false, content: "Just wanted to say I love your portfolio site. The design is amazing!" },
      { id: 4, from: "collaborator@project.com", subject: "Potential Collaboration", date: "2025-03-05", read: true, content: "I have an interesting project idea. Would you be interested in collaborating?" }
    ];
    
    loading = false;
  });
  
  const toggleProjectStatus = (id) => {
    projects = projects.map(project => {
      if (project.id === id) {
        return { ...project, display_status: !project.display_status };
      }
      return project;
    });
  };
  
  const markAsRead = (id) => {
    messages = messages.map(message => {
      if (message.id === id) {
        return { ...message, read: true };
      }
      return message;
    });
  };
  
  const logout = () => {
    goto('/admin');
  };
  
  const addNewProject = () => {
    editMode = false;
    showProjectForm = true;
    newProject = {
      id: null,
      name: '',
      tech_stack: '',
      description: '',
      display_status: true
    };
  };
  
  const editProject = (project) => {
    editMode = true;
    showProjectForm = true;
    newProject = {
      id: project.id,
      name: project.name,
      tech_stack: project.tech_stack.join(', '),
      description: project.description || '',
      display_status: project.display_status
    };
  };
  
  const deleteProject = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      projects = projects.filter(project => project.id !== id);
      stats.totalProjects -= 1;
    }
  };
  
  const cancelAddProject = () => {
    showProjectForm = false;
    newProject = {
      id: null,
      name: '',
      tech_stack: '',
      description: '',
      display_status: true
    };
  };
  
  const submitProject = () => {
    // In a real app, this would be an API call
    const techStackArray = newProject.tech_stack.split(',').map(item => item.trim());
    
    if (editMode) {
      // Update existing project
      projects = projects.map(project => {
        if (project.id === newProject.id) {
          return {
            ...project,
            name: newProject.name,
            tech_stack: techStackArray,
            description: newProject.description,
            display_status: newProject.display_status,
            slug: newProject.name.toLowerCase().replace(/\s+/g, '-')
          };
        }
        return project;
      });
    } else {
      // Add new project
      const project = {
        id: projects.length + 1,
        name: newProject.name,
        tech_stack: techStackArray,
        description: newProject.description,
        slug: newProject.name.toLowerCase().replace(/\s+/g, '-'),
        display_status: newProject.display_status,
        created_at: new Date().toISOString()
      };
      
      projects = [project, ...projects];
      stats.totalProjects += 1;
    }
    
    showProjectForm = false;
    newProject = {
      id: null,
      name: '',
      tech_stack: '',
      description: '',
      display_status: true
    };
  };
  
  // Format date to show day of week and month name
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const weekday = date.toLocaleString('en-us', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const year = date.getFullYear();
    
    return `${dayOfMonth} ${weekday}, ${month} ${year}`;
  };
</script>

<div class="min-h-screen bg-sec text-text">
  <Header {logout} />
  
  <!-- Main content -->
  <main class="container mx-auto px-4 py-6">
    {#if loading}
      <div class="flex justify-center items-center h-64">
        <div class="text-acc font-mono">LOADING SYSTEM DATA...</div>
      </div>
    {:else}
      <!-- Navigation -->
      <nav class="mb-8">
        <ul class="flex border-b border-acc/30">
          <li>
            <button 
              class="px-4 py-2 font-mono {activeTab === 'dashboard' ? 'border-b-2 border-acc text-acc' : 'text-text/70'}"
              on:click={() => activeTab = 'dashboard'}
            >
              DASHBOARD
            </button>
          </li>
          <li>
            <button 
              class="px-4 py-2 font-mono {activeTab === 'projects' ? 'border-b-2 border-acc text-acc' : 'text-text/70'}"
              on:click={() => activeTab = 'projects'}
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button 
              class="px-4 py-2 font-mono {activeTab === 'messages' ? 'border-b-2 border-acc text-acc' : 'text-text/70'}"
              on:click={() => activeTab = 'messages'}
            >
              MESSAGES
            </button>
          </li>
        </ul>
      </nav>

      {#if activeTab === 'dashboard'}
        <Dashboard 
          {stats} 
          {projects} 
          {messages} 
          {addNewProject} 
          {markAsRead} 
          {formatDate} 
        />
      {:else if activeTab === 'projects'}
        <Projects 
          {projects} 
          {showProjectForm} 
          {editMode} 
          {newProject} 
          {addNewProject} 
          {editProject} 
          {deleteProject} 
          {toggleProjectStatus} 
          {cancelAddProject} 
          {submitProject} 
          {formatDate} 
        />
      {:else if activeTab === 'messages'}
        <Messages {messages} {markAsRead} />
      {/if}
    {/if}
  </main>
  
  <Footer {formatDate} />
</div>