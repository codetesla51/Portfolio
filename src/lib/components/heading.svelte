<script>
  export let heading = "";
  export let subtext = "";
  export let badge = ""; // Optional badge text
  export let centered = false; // Center alignment option
</script>

<div class="flex flex-col justify-start items-start text-left p-6 py-4 px-4">
  
  <!-- Optional Badge -->
  {#if badge}
    <div class="inline-block p-1 bg-gradient-to-r from-acc/20 to-acc/10 rounded-2xl mb-6">
      <div class="bg-sec/80 backdrop-blur-sm rounded-xl px-6 py-3">
        <span class="font-mono text-acc/80 text-sm font-semibold tracking-wider uppercase">{badge}</span>
      </div>
    </div>
  {/if}

  <!-- Main Heading -->
  {#if heading}
    <div class="mb-4">
      <h1 class="text-4xl md:text-5xl font-bold text-acc font-ice mb-4 leading-tight">
        {heading}
      </h1>
      
      <!-- Decorative line -->
      <div class="flex items-center space-x-4 mb-2">
        <div class="w-16 h-0.5 bg-gradient-to-r from-acc/60 to-acc/30"></div>
        <div class="w-2 h-2 bg-acc rounded-full animate-pulse"></div>
        <div class="w-8 h-0.5 bg-gradient-to-r from-acc/30 to-transparent"></div>
      </div>
    </div>
  {/if}

  <!-- Subtext -->
  {#if subtext}
    <div class="relative">
      <!-- Subtle background accent -->
      <div class="absolute inset-0 bg-gradient-to-r from-acc/5 to-transparent rounded-lg opacity-60"></div>
      
      <p class="relative text-text/90 text-lg md:text-xl leading-relaxed font-medium">
        {subtext}
      </p>
    </div>
  {/if}
</div>