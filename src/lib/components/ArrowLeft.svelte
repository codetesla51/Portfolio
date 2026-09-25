<script>
  let { class: className = '' } = $props();
</script>

<!-- Nudges left on hover. Pair with `group` on the parent link. -->
<svg
  class="{className} shrink-0 transition-transform duration-150 group-hover:-translate-x-0.5"
  width="14"
  height="14"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M19 12H5M12 19l-7-7 7-7" />
</svg>
