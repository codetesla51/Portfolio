<script>
  import { goto } from '$app/navigation';
  
  let adminKey = '';
  let error = '';
  let loading = false;
  
  const handleLogin = async () => {
    if (!adminKey.trim()) {
      error = 'Admin key is required';
      return;
    }
    
    loading = true;
    error = '';
    
    try {
      const response = await fetch('https://portfolio-backend-x9in.vercel.app/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          admin_key: adminKey
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.token) {
        localStorage.setItem('admin_token', data.token);
        goto('/admin/dashboard');
      } else {
        error = data.message || 'Invalid admin key';
      }
    } catch (err) {
      console.error('Login error:', err);
      error = 'Connection error. Please try again.';
    } finally {
      loading = false;
    }
  };
</script>

<div class="flex items-center justify-center min-h-screen bg-sec">
  <div class="w-full max-w-md p-8 rounded-lg bg-card backdrop-blur-sm border border-acc/30">
    <h1 class="text-4xl font-ice text-acc mb-8 text-center">SYSTEM ACCESS</h1>
    
    <form on:submit|preventDefault={handleLogin} class="space-y-6">
      <div>
        <label for="adminKey" class="block text-text font-mono mb-2">ADMIN KEY</label>
        <input
          type="password"
          id="adminKey"
          bind:value={adminKey}
          disabled={loading}
          class="w-full p-3 border bg-sec text-text font-mono border-acc/50 focus:border-acc focus:ring-1 focus:ring-acc rounded-md outline-none disabled:opacity-50"
          placeholder="_enter_security_key_"
        />
      </div>
      
      {#if error}
        <div class="text-red-500 font-mono text-sm">{error}</div>
      {/if}
      
      <button
        type="submit"
        disabled={loading || !adminKey.trim()}
        class="w-full py-3 bg-acc hover:bg-acc/80 disabled:bg-acc/50 disabled:cursor-not-allowed text-sec font-ice text-xl rounded-md transition-all duration-300 flex justify-center items-center"
      >
        {#if loading}
          <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          AUTHENTICATING...
        {:else}
          LOGIN
        {/if}
      </button>
    </form>
    
    <div class="mt-6 text-center text-text/50 font-mono text-sm">
      SECURE SYSTEM v2.5.12
    </div>
  </div>
</div>
