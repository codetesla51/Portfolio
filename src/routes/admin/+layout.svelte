<script>
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  
  let isAuthenticated = false;
  let isLoading = true;
  
  onMount(() => {
    checkAuthentication();
  });
  
  function checkAuthentication() {
    // Get admin token from localStorage
    const adminToken = localStorage.getItem('admin_token');
    
    // Check if we're on the login page
    const isLoginPage = $page.url.pathname === '/admin/auth';
    
    if (adminToken) {
      // User has a token, consider them authenticated
      isAuthenticated = true;
      
      // If they're on the login page but already authenticated, redirect to dashboard
      if (isLoginPage) {
        goto('/admin/dashboard');
      }
    } else {
      // No token found, user is not authenticated
      isAuthenticated = false;
      
      // If not on login page and not authenticated, redirect to login
      if (!isLoginPage) {
        goto('/admin/auth');
      }
    }
    
    isLoading = false;
  }
</script>

{#if isLoading}
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
{:else if isAuthenticated || $page.url.pathname === '/admin/auth' || $page.url.pathname === '/admin'}
  <slot />
{/if}