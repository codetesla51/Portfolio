<script>
  import { isLoading } from '$lib/stores/loader';
</script>

<!-- Minimal, fast loader - only shows during actual loading states -->
{#if $isLoading}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
  <div class="flex flex-col items-center gap-4">
    <!-- Simple spinner -->
    <div class="w-8 h-8 border-2 border-neutral-800 border-t-white rounded-full animate-spin"></div>
    <span class="text-sm text-neutral-500 font-mono">Loading...</span>
  </div>
</div>
{/if}