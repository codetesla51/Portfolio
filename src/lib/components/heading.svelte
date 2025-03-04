<script>
  export let heading = "";
  export let subtext = "";
</script>

<div class="flex flex-col justify-start items-start text-left p-6">
  {#if heading}
    <h1 class="text-3xl font-bold tex-acc font-ice">{heading}</h1>
  {/if}

  {#if subtext}
    <p class="text-text mt-2 text-lg">{subtext}</p>
  {/if}
</div>