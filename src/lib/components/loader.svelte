<script>
  import { isLoading } from '$lib/stores/loader';
</script>

<!-- Minimal, fast loader - only shows during actual loading states -->
{#if $isLoading}
<div class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" style="background: var(--surface-soft);">
  <div class="flex flex-col items-center gap-4">
    <!-- Simple spinner -->
    <div class="w-8 h-8 border-2 rounded-full animate-spin" style="border-color: var(--border); border-top-color: var(--text);"></div>
    <span class="text-sm font-mono" style="color: var(--text-muted);">Loading...</span>
  </div>
</div>
{/if}
