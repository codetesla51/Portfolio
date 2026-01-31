<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  
  import Header from '$lib/components/admin/Header.svelte';
  import Dashboard from '$lib/components/admin/Dashboard.svelte';
  import Projects from '$lib/components/admin/Projects.svelte';
  import Messages from '$lib/components/admin/Messages.svelte';
  import Footer from '$lib/components/admin/Footer.svelte';
  
  // Import data from the page load function
  export let data;
  
  // Debug log to check what's in the data
  console.log("Data from load function:", data);
  
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
    display_status: true,
    image: ''
  };
  
onMount(async () => {
  try {
    // Check if data.projects exists and is an array
    if (data && Array.isArray(data.projects)) {
      console.log("Projects from data:", data.projects);
      projects = data.projects;
    } else {
      console.warn("No projects data found or it's not an array:", data);
      
      // Fallback: direct API fetch if data not available from load function
      try {
        // Get token for authentication
        const token = localStorage.getItem('admin_token');
        console.log("Auth token exists for projects fetch:", !!token);
        
        const response = await fetch('https://portfolio-backend-x9in.vercel.app/projects', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
        
        console.log("Projects API response status:", response.status);
        
        // Check content-type before parsing JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.warn("Projects API did not return JSON, got:", contentType);
          projects = [];
        } else if (response.ok) {
          const result = await response.json();
          console.log("Projects API Response:", result);
          
          // Handle different response structures
          if (result && Array.isArray(result.data)) {
            projects = result.data;
          } else if (result && Array.isArray(result.projects)) {
            projects = result.projects;
          } else if (Array.isArray(result)) {
            projects = result;
          } else {
            projects = [];
            console.warn("API didn't return an array of projects");
          }
          console.log("Projects loaded:", projects.length);
        } else {
          const errorText = await response.text();
          console.error("Projects API error:", errorText);
          projects = [];
        }
      } catch (fallbackError) {
        console.error("Projects fetch failed:", fallbackError);
        projects = [];
      }
    }
    
    stats.totalProjects = projects.length;
    
    // Fetch contacts/messages
    try {
      const token = localStorage.getItem('admin_token');
      console.log("Auth token exists for contacts fetch:", !!token);
      
      if (!token) {
        console.warn("No admin token found, using fallback messages");
        messages = getFallbackMessages();
      } else {
        const contactsResponse = await fetch('https://portfolio-backend-x9in.vercel.app/contacts', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
        
        console.log("Contacts API response status:", contactsResponse.status);
        
        // Check content-type before parsing JSON
        const contentType = contactsResponse.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.warn("Contacts API did not return JSON, got:", contentType);
          messages = getFallbackMessages();
        } else if (contactsResponse.ok) {
          const result = await contactsResponse.json();
          console.log("Contacts API Response:", result);
          
          // Handle different response structures
          let contactsArray = null;
          if (result && Array.isArray(result.data)) {
            contactsArray = result.data;
          } else if (result && Array.isArray(result.contacts)) {
            contactsArray = result.contacts;
          } else if (Array.isArray(result)) {
            contactsArray = result;
          }
          
          if (contactsArray) {
            messages = contactsArray.map(contact => ({
              id: contact.id,
              from: contact.email,
              name: contact.name,
              subject: contact.inquiry || 'No Subject',
              date: contact.created_at,
              read: contact.is_read || false,
              content: contact.message
            }));
            console.log("Contacts loaded:", messages.length);
          } else {
            console.warn("API didn't return an array of contacts", result);
            messages = getFallbackMessages();
          }
        } else {
          const errorText = await contactsResponse.text();
          console.error("Contacts API error:", errorText);
          messages = getFallbackMessages();
        }
      }
    } catch (contactsError) {
      console.error("Contacts fetch failed:", contactsError);
      messages = getFallbackMessages();
    }
    
    stats.totalMessages = messages.length;
  } catch (error) {
    console.error("Error in onMount:", error);
    projects = [];
    messages = getFallbackMessages();
    stats.totalMessages = messages.length;
  } finally {
    loading = false;
  }
});  
  // Function to get fallback messages if API fails
  function getFallbackMessages() {
    console.log("Using fallback messages");
    return [
      { id: 1, from: "johndoe@example.com", name: "John Doe", subject: "Project Inquiry", date: "2025-03-09", read: false, content: "Hi, I'm interested in your web development services. Can we schedule a call?" },
      { id: 2, from: "recruiter@techcompany.com", name: "Tech Recruiter", subject: "Job Opportunity", date: "2025-03-08", read: true, content: "Hello, we were impressed by your portfolio and would like to discuss a potential role at our company." },
      { id: 3, from: "feedback@portfolio.com", name: "Feedback User", subject: "Great Work!", date: "2025-03-07", read: false, content: "Just wanted to say I love your portfolio site. The design is amazing!" },
      { id: 4, from: "collaborator@project.com", name: "Potential Collaborator", subject: "Potential Collaboration", date: "2025-03-05", read: true, content: "I have an interesting project idea. Would you be interested in collaborating?" }
    ];
  }
  
const toggleProjectStatus = async (id) => {
  try {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const token = localStorage.getItem('admin_token');

    const response = await fetch(`https://portfolio-backend-x9in.vercel.app/projects/${id}/toggle-display`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to update project status: ${response.status}`);
    }

    const data = await response.json();

    // Update local state correctly
    projects = projects.map(p => 
      p.id === id ? { ...p, display_status: data.new_status } : p
    );

    console.log("Updated project status:", data.new_status);

  } catch (error) {
    console.error('Error toggling project status:', error);
    alert('Failed to update project status. Please try again.');
  }
};  
  const markAsRead = async (id) => {
    try {
      const message = messages.find(m => m.id === id);
      if (!message) return;
      
      // Get token first and check if it exists
      const token = localStorage.getItem('admin_token');
      if (!token) {
        console.warn("No admin token found, cannot mark message as read");
        throw new Error("No admin token found");
      }
      
      const response = await fetch(`https://portfolio-backend-x9in.vercel.app/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        },
      });
      
      console.log("Mark as read API response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Mark as read API error:", errorText);
        throw new Error(`Failed to mark message as read: ${response.status}`);
      }
      
      // Update local state
      messages = messages.map(message => {
        if (message.id === id) {
          return { ...message, read: true };
        }
        return message;
      });
    } catch (error) {
      console.error('Error marking message as read:', error);
      // Update UI anyway for better UX, even if API call failed
      messages = messages.map(message => {
        if (message.id === id) {
          return { ...message, read: true };
        }
        return message;
      });
    }
  };
  
const replyToMessage = (email, subject, originalContent) => {
    const encodedSubject = encodeURIComponent(`Re: ${subject}`);
    const encodedBody = encodeURIComponent(`\n\n---\nReply to the following message:\n\n${originalContent}\n\n---\nSent from my Portfolio Admin Panel`);

    // Gmail intent for Android
    const gmailIntent = `intent://compose?to=${email}&subject=${encodedSubject}&body=${encodedBody}#Intent;scheme=mailto;package=com.google.android.gm;end;`;

    // Fallback to mailto if not Android
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

    if (/android/i.test(navigator.userAgent)) {
        window.location.href = gmailIntent;
    } else {
        window.location.href = mailtoLink;
    }
};  
  
  const deleteMessage = async (id) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        const token = localStorage.getItem('admin_token');
        if (!token) {
          console.warn("No admin token found, cannot delete message");
          throw new Error("No admin token found");
        }
        
        const response = await fetch(`https://portfolio-backend-x9in.vercel.app/contacts/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
        
        console.log("Delete message API response status:", response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Delete message API error:", errorText);
          throw new Error(`Failed to delete message: ${response.status}`);
        }
        
        // Update local state
        messages = messages.filter(m => m.id !== id);
        stats.totalMessages = messages.length;
        
      } catch (error) {
        console.error('Error deleting message:', error);
        alert('Failed to delete message. Please try again.');
      }
    }
  };
  
  const logout = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      
      // Call backend logout endpoint
      if (token) {
        await fetch('https://portfolio-backend-x9in.vercel.app/admin/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
      }
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // Always clear local storage and redirect
      localStorage.removeItem('admin_token');
      goto('/admin');
    }
  };

  const addNewProject = () => {
    editMode = false;
    showProjectForm = true;
    newProject = {
      id: null,
      name: '',
      tech_stack: '',
      description: '',
      display_status: true,
      image: ''
    };
  };
  
  const editProject = (project) => {
    editMode = true;
    showProjectForm = true;
    newProject = {
      id: project.id,
      name: project.name,
      tech_stack: Array.isArray(project.tech_stack) ? project.tech_stack.join(', ') : '',
      description: project.description || '',
      display_status: project.display_status,
      image: project.image || '',
      slug: project.slug
    };
  };
  
  const deleteProject = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const project = projects.find(p => p.id === id);
        if (!project) return;
        
        const token = localStorage.getItem('admin_token');
        if (!token) {
          console.warn("No admin token found, cannot delete project");
          throw new Error("No admin token found");
        }
        
        const response = await fetch(`https://portfolio-backend-x9in.vercel.app/projects/${project.slug}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        console.log("Delete project API response status:", response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Delete project API error:", errorText);
          throw new Error(`Failed to delete project: ${response.status}`);
        }
        
        projects = projects.filter(p => p.id !== id);
        stats.totalProjects = projects.length;
        
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project. Please try again.');
      }
    }
  };
  
  const cancelAddProject = () => {
    showProjectForm = false;
    newProject = {
      id: null,
      name: '',
      tech_stack: '',
      description: '',
      display_status: true,
      image: ''
    };
  };
  
  const submitProject = async () => {
    try {
      const techStackArray = newProject.tech_stack.split(',').map(item => item.trim());
      
      const projectData = {
        name: newProject.name,
        tech_stack: techStackArray,
        description: newProject.description,
        display_status: newProject.display_status,
        image: newProject.image
      };
      
      const token = localStorage.getItem('admin_token');
      if (!token) {
        console.warn("No admin token found, cannot submit project");
        throw new Error("No admin token found");
      }
      
      let response;
      
      if (editMode) {
        // Update existing project
        response = await fetch(`https://portfolio-backend-x9in.vercel.app/projects/${newProject.slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(projectData)
        });
      } else {
        // Add new project
        response = await fetch('https://portfolio-backend-x9in.vercel.app/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify(projectData)
        });
      }
      
      console.log("Submit project API response status:", response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Submit project API error:", errorText);
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const result = await response.json();
      
      if (editMode) {
        // Update local state
        projects = projects.map(p => {
          if (p.id === newProject.id) {
            return result.project;
          }
          return p;
        });
      } else {
        // Add new project to local state
        projects = [result.project, ...projects];
        stats.totalProjects = projects.length;
      }
      
      showProjectForm = false;
      newProject = {
        id: null,
        name: '',
        tech_stack: '',
        description: '',
        display_status: true,
        image: ''
      };
      
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Failed to save project. Please try again.');
    }
  };
  
  // Format date to show day of week and month name
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      
      const weekday = date.toLocaleString('en-us', { weekday: 'long' });
      const dayOfMonth = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'long' });
      const year = date.getFullYear();
      
      return `${dayOfMonth} ${weekday}, ${month} ${year}`;
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };
</script>

<div class="min-h-screen bg-black text-white">
  <Header {logout} bind:activeTab />
  
  <main class="max-w-6xl mx-auto px-6 py-8">
    {#if loading}
      <div class="flex justify-center items-center h-64">
        <div class="text-neutral-500">Loading...</div>
      </div>
    {:else}
      {#if activeTab === 'dashboard'}
        <Dashboard 
          {stats} 
          {projects} 
          {messages} 
          {addNewProject} 
          {markAsRead} 
          {formatDate} 
          {replyToMessage}
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
        <Messages 
          {messages} 
          {markAsRead} 
          {replyToMessage} 
          {deleteMessage} 
          {formatDate} 
        />
      {/if}
    {/if}
  </main>
</div>