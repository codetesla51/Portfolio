<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  
  let adminKey = '';
  let error = '';
  let loading = false;
  
  onMount(() => {
    // Check if already authenticated
    const token = localStorage.getItem('admin_token');
    if (token) {
      goto('/admin/dashboard');
    }
  });
  
  const handleLogin = async () => {
    loading = true;
    error = '';
    
    if (!adminKey.trim()) {
      error = 'Please enter your admin key';
      loading = false;
      return;
    }
    
    try {
      const response = await fetch('https://portfolio-backend-x9in.vercel.app/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          admin_key: adminKey
        })
      });
      
      // Check content-type before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('API did not return JSON, got:', contentType);
        error = 'Server error. Please try again later.';
        loading = false;
        return;
      }
      
      const data = await response.json();
      
      if (response.ok && data.token) {
        localStorage.setItem('admin_token', data.token);
        goto('/admin/dashboard');
      } else {
        error = data.message || data.error || 'Authentication failed';
      }
    } catch (err) {
      error = 'Connection error. Please try again.';
      console.error('Login error:', err);
    } finally {
      loading = false;
    }
  };
</script>

<div class="min-h-screen bg-black flex items-center justify-center px-6">
  <div class="w-full max-w-sm">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-semibold text-white mb-2">Admin</h1>
      <p class="text-sm text-neutral-500">Enter your admin key to continue</p>
    </div>
    
    <form on:submit|preventDefault={handleLogin} class="space-y-4">
      <div>
        <input
          type="password"
          bind:value={adminKey}
          class="w-full px-4 py-3 bg-black border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          placeholder="Admin key"
          autocomplete="current-password"
        />
      </div>
      
      {#if error}
        <p class="text-sm text-red-400">{error}</p>
      {/if}
      
      <button
        type="submit"
        disabled={loading}
        class="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {#if loading}
          <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Authenticating...
        {:else}
          Login
        {/if}
      </button>
    </form>
    
    <p class="mt-8 text-center text-xs text-neutral-700">
      <a href="/" class="hover:text-neutral-500 transition-colors">← Back to site</a>
    </p>
  </div>
</div>
