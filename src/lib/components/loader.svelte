<script>
  import { onMount } from 'svelte';
  
  let loading = true;
  let progress = 0;
  let currentStep = 0;
  
  const steps = [
    'Initializing...',
    'Loading modules...',
    'Starting server...',
    'Ready!'
  ];
  
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  function enableScroll() {
    document.body.style.overflow = '';
  }
  
  onMount(async () => {
    disableScroll();
    
    // Simulate loading steps
    for (let i = 0; i < steps.length; i++) {
      currentStep = i;
      progress = ((i + 1) / steps.length) * 100;
      
      // Wait for each step
      await new Promise(resolve => setTimeout(resolve, i === steps.length - 1 ? 500 : 800));
    }
    
    // Small delay before hiding
    setTimeout(() => {
      loading = false;
      enableScroll();
    }, 300);
    
    return () => {
      enableScroll();
    };
  });
</script>

{#if loading}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-sec backdrop-blur-sm">
  <div class="text-center space-y-8">
    
    <!-- Simple Logo/Icon -->
    <div class="mb-8">
      <div class="w-16 h-16 mx-auto bg-acc/20 rounded-2xl flex items-center justify-center border border-acc/30">
        <svg class="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
        </svg>
      </div>
    </div>
    
    <!-- Simple Text -->
    <div class="space-y-4">
      <h1 class="text-2xl font-ice font-bold text-acc">Uthman Dev</h1>
      <p class="text-text/70 font-mono text-sm">{steps[currentStep]}</p>
    </div>
    
    <!-- Simple Progress Bar -->
    <div class="w-64 mx-auto">
      <div class="h-1 bg-sec/50 rounded-full overflow-hidden">
        <div 
          class="h-full bg-acc rounded-full transition-all duration-500 ease-out"
          style="width: {progress}%"
        ></div>
      </div>
      <div class="mt-2 text-xs font-mono text-text/50 text-center">
        {Math.round(progress)}%
      </div>
    </div>
    
  </div>
</div>
{/if}

<style>
  /* Simple fade animation */
  .fixed {
    animation: fadeIn 0.3s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>