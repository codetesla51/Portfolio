<script>
  import { onMount } from 'svelte';
  import { isLoading } from '$lib/stores/loader';
  
  let progress = 0;
  let currentStep = 0;
  let dots = '';
  
  const steps = [
    'Initializing portfolio...',
    'Fetching projects...',
    'Loading content...',
    'Finalizing...'
  ];
  
  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    document.body.style.overflow = 'hidden';
    document.body.dataset.scrollTop = scrollTop.toString();
    document.body.dataset.scrollLeft = scrollLeft.toString();
    window.scrollTo(scrollLeft, scrollTop);
  }
  
  function enableScroll() {
    const scrollTop = parseInt(document.body.dataset.scrollTop || '0');
    const scrollLeft = parseInt(document.body.dataset.scrollLeft || '0');
    
    document.body.style.overflow = '';
    delete document.body.dataset.scrollTop;
    delete document.body.dataset.scrollLeft;
    window.scrollTo(scrollLeft, scrollTop);
  }
  
  // Simulate progress while actual loading happens
  function simulateProgress() {
    const progressInterval = setInterval(() => {
      if (!$isLoading) {
        clearInterval(progressInterval);
        progress = 100;
        return;
      }
      
      // Slow down progress as it gets higher (more realistic)
      const increment = progress < 30 ? 8 : progress < 70 ? 4 : 1;
      progress = Math.min(progress + increment, 95); // Cap at 95% until actual loading completes
      
      // Update step based on progress
      if (progress < 25) currentStep = 0;
      else if (progress < 50) currentStep = 1;
      else if (progress < 80) currentStep = 2;
      else currentStep = 3;
      
    }, 200);
    
    return progressInterval;
  }
  
  // Animate dots
  function animateDots() {
    const dotInterval = setInterval(() => {
      if (!$isLoading) {
        clearInterval(dotInterval);
        return;
      }
      dots = dots.length >= 3 ? '' : dots + '.';
    }, 500);
    
    return dotInterval;
  }
  
  onMount(() => {
    disableScroll();
    
    const progressInterval = simulateProgress();
    const dotInterval = animateDots();
    
    // Watch for loading completion from your store
    const unsubscribe = isLoading.subscribe(loading => {
      if (!loading) {
        progress = 100;
        setTimeout(() => {
          enableScroll();
        }, 300);
      }
    });
    
    return () => {
      enableScroll();
      clearInterval(progressInterval);
      clearInterval(dotInterval);
      unsubscribe();
    };
  });
</script>

{#if $isLoading}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-sec backdrop-blur-sm">
  <div class="text-center space-y-8 max-w-md mx-auto px-4">
    
    <!-- Enhanced Logo Section -->
    <div class="relative">
      <!-- Outer glow ring -->
      <div class="absolute inset-0 w-20 h-20 mx-auto bg-acc/20 rounded-2xl blur-lg animate-pulse"></div>
      
      <!-- Main logo container -->
      <div class="relative w-16 h-16 mx-auto bg-card/60 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-acc/40 shadow-lg">
        <svg class="w-8 h-8 text-acc" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
        </svg>
      </div>
    </div>
    
    <!-- Brand and Status -->
    <div class="space-y-4">
      <div>
        <h1 class="text-3xl font-ice font-bold text-acc mb-2">Uthman Dev</h1>
        <div class="inline-block px-3 py-1 bg-acc/10 border border-acc/30 rounded-full">
          <span class="text-acc/80 font-mono text-xs tracking-wider">PORTFOLIO LOADING</span>
        </div>
      </div>
      
      <!-- Current Step with animated dots -->
      <div class="h-6 flex items-center justify-center">
        <p class="text-text/80 font-mono text-sm">
          {steps[currentStep]}{dots}
        </p>
      </div>
    </div>
    
    <!-- Enhanced Progress Section -->
    <div class="space-y-3">
      <!-- Progress bar -->
      <div class="w-80 max-w-full mx-auto">
        <div class="h-2 bg-sec/50 rounded-full overflow-hidden border border-acc/20">
          <div 
            class="h-full bg-gradient-to-r from-acc/80 to-acc rounded-full transition-all duration-500 ease-out relative overflow-hidden"
            style="width: {progress}%"
          >
            <!-- Shimmer effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      <!-- Percentage and status -->
      <div class="flex justify-between items-center text-xs font-mono text-text/60">
        <span>Loading data...</span>
        <span class="text-acc font-bold">{Math.round(progress)}%</span>
      </div>
    </div>
    
    <!-- Connection Status -->
    <div class="flex items-center justify-center space-x-2 text-xs">
      <div class="flex items-center space-x-2">
        <div class="w-2 h-2 rounded-full {progress > 70 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse"></div>
        <span class="font-mono text-text/60">
          {progress > 70 ? 'Connected' : 'Connecting...'}
        </span>
      </div>
    </div>
    
  </div>
</div>
{/if}

<style>
  /* Shimmer animation for progress bar */
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
  
  /* Smooth fade */
  .fixed {
    animation: fadeIn 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
</style>
