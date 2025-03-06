<script>
  import { onMount, onDestroy } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let isHoveringLink = false;

  function updateMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function handleLinkEnter() {
    isHoveringLink = true;
  }

  function handleLinkLeave() {
    isHoveringLink = false;
  }

  onMount(() => {
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      requestAnimationFrame(animateCursor);
    }

    window.addEventListener('mousemove', updateMousePosition);
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleLinkEnter);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    animateCursor();

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.style.cursor = 'default';
    };
  });
</script>

<style lang="postcss">
  .custom-cursor {
    @apply fixed z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
           rounded-full mix-blend-difference transition-all duration-200 ease-out;
  }

  .cursor-default {
    @apply w-4 h-4 bg-white bg-opacity-70 backdrop-blur-sm;
  }

  .cursor-hover {
    @apply w-12 h-12 bg-white bg-opacity-40 backdrop-blur-sm scale-[2.5];
  }
</style>

<!-- Custom Cursor Overlay -->
<div 
  class="custom-cursor {isHoveringLink ? 'cursor-hover' : 'cursor-default'}"
  style="left: {cursorX}px; top: {cursorY}px;"
/>

<!-- Global Cursor Hover Effect for Interactive Elements -->
<svelte:head>
  <style>
    a, button, [data-cursor-hover] {
      cursor: none !important;
    }
    a:hover, button:hover, [data-cursor-hover]:hover {
      cursor: none !important;
    }
  </style>
</svelte:head>