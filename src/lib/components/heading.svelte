<script>
  export let heading = "";
  export let subtext = "";
  export let badge = "";
</script>

<div class="mb-12 md:mb-16">
  <!-- Optional Badge -->
  {#if badge}
    <span class="text-neutral-500 text-sm font-mono tracking-wider uppercase mb-4 block">
      {badge}
    </span>
  {/if}

  <!-- Main Heading -->
  {#if heading}
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
      {heading}
    </h2>
  {/if}

  <!-- Subtext -->
  {#if subtext}
    <p class="text-neutral-500 text-lg max-w-2xl">
      {subtext}
    </p>
  {/if}
</div>