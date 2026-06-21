<script>
  export let project;
  export let index;

  $: techStack = project?.tech_stack?.slice(0, 3) || [];
</script>

{#if project}
<article
  class="py-7"
  style="border-top: 1px solid var(--border);"
>
  <!-- Header row -->
  <div class="flex items-baseline justify-between gap-6 mb-3">
    <h3 class="text-lg font-semibold" style="color: var(--text);">
      {project.name}
    </h3>

    <div class="flex items-center gap-4 flex-shrink-0">
      {#if project.doc_url}
        <a
          href={project.doc_url}
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs card-link"
          style="color: var(--text-muted);"
        >
          Docs ↗
        </a>
      {/if}
      {#if project.github_url}
        <a
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs card-link"
          style="color: var(--text-muted);"
        >
          GitHub ↗
        </a>
      {/if}
    </div>
  </div>

  <!-- Description -->
  <p class="text-sm leading-relaxed mb-5 max-w-2xl" style="color: var(--text-soft);">
    {project.description}
  </p>

  <!-- Tech -->
  <div class="flex flex-wrap gap-2">
    {#each techStack as tech}
      <span class="font-mono text-xs" style="color: var(--text-muted);">
        {tech}
      </span>
      <span class="text-xs" style="color: var(--border-strong);">·</span>
    {/each}
  </div>

</article>
{/if}

<style>
  .card-link {
    opacity: 0.55;
    transition: opacity 0.18s ease;
    text-decoration: none;
  }
  .card-link:hover { opacity: 1; }
</style>