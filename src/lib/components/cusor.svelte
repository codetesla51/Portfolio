<script>
  import { onMount, onDestroy } from 'svelte';
  
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let isHoveringLink = false;
  let isClicking = false;
  
  let scrollY = 0;
  let innerHeight = 0;
  let docHeight = 0;
  let scrollPercentage = 0;
  let showScrollControls = false;
  let scrollDirection = "down"; // "up" or "down"
  
  // Initialize animation frame ID for cleanup
  let animationFrameId;

  function updateMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
  
  function handleMouseDown() {
    isClicking = true;
  }
  
  function handleMouseUp() {
    isClicking = false;
  }
  
  function handleLinkEnter() {
    isHoveringLink = true;
  }
  
  function handleLinkLeave() {
    isHoveringLink = false;
  }
  
  function updateScrollInfo() {
    scrollY = window.scrollY;
    innerHeight = window.innerHeight;
    docHeight = document.body.scrollHeight;
    scrollPercentage = (scrollY / (docHeight - innerHeight)) * 100;
    
    // Only show scroll controls when user has scrolled a bit
    showScrollControls = scrollY > 200;
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function scrollToBottom() {
    window.scrollTo({
      top: docHeight,
      behavior: 'smooth'
    });
  }
  
  function toggleScrollDirection() {
    scrollDirection = scrollDirection === "down" ? "up" : "down";
    
    if (scrollDirection === "up") {
      scrollToTop();
    } else {
      scrollToBottom();
    }
  }
  
  onMount(() => {
    function animateCursor() {
      // Smooth cursor follow with easing
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      animationFrameId = requestAnimationFrame(animateCursor);
    }
    
    // Event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', updateScrollInfo);
    window.addEventListener('resize', updateScrollInfo);
    
    // Add hover effects to interactive elements
    document.querySelectorAll('a, button, [data-cursor-hover], input, textarea, select').forEach(el => {
      el.addEventListener('mouseenter', handleLinkEnter);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    // Initialize scroll info
    updateScrollInfo();
    
    // Start cursor animation
    animateCursor();
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      // Clean up all event listeners
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', updateScrollInfo);
      window.removeEventListener('resize', updateScrollInfo);
      
      document.querySelectorAll('a, button, [data-cursor-hover], input, textarea, select').forEach(el => {
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      // Restore default cursor
      document.body.style.cursor = 'default';
      
      // Cancel animation frame
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<style lang="postcss">
  .custom-cursor {
    @apply fixed z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
           rounded-full mix-blend-difference transition-all duration-200 ease-out;
  }
  
  .cursor-default {
    @apply w-4 h-4 bg-acc bg-opacity-70 backdrop-blur-sm;
  }
  
  .cursor-hover {
    @apply w-12 h-12 bg-acc bg-opacity-40 backdrop-blur-sm scale-110;
  }
  
  .cursor-click {
    @apply scale-75;
  }
  
  .cursor-dot {
    @apply w-1 h-1 bg-text bg-opacity-90 absolute rounded-full left-2 top-2;
  }
  
  .scroll-controls {
    @apply fixed right-6 bottom-6 flex flex-col gap-2 z-50 opacity-0 transition-opacity duration-300;
  }
  
  .scroll-controls.visible {
    @apply opacity-100;
  }
  
  .scroll-button {
    @apply w-12 h-12 rounded-full bg-sec border-2 border-acc flex items-center justify-center 
           text-acc font-mono shadow-lg hover:bg-opacity-80 transition-all duration-200;
  }
  
  .scroll-indicator-container {
    @apply fixed top-0 left-0 right-0 h-1 bg-sec z-50;
  }
  
  .scroll-indicator {
    @apply h-full bg-acc transition-all duration-300;
  }
  
  .percentage-text {
    @apply fixed top-4 right-6 text-acc font-mono text-sm z-50 bg-sec bg-opacity-70 px-2 py-1 rounded;
  }
</style>

<!-- Custom Cursor Overlay -->
<div 
  class="custom-cursor {isHoveringLink ? 'cursor-hover' : 'cursor-default'} {isClicking ? 'cursor-click' : ''}"
  style="left: {cursorX}px; top: {cursorY}px;"
>
  <div class="cursor-dot"></div>
</div>

<!-- Scroll Progress Indicator -->
<div class="scroll-indicator-container">
  <div class="scroll-indicator" style="width: {scrollPercentage}%;"></div>
</div>

<!-- Percentage Display -->
<div class="percentage-text">
  {Math.round(scrollPercentage)}%
</div>

<!-- Scroll Controls -->
<div class="scroll-controls {showScrollControls ? 'visible' : ''}">
  <button class="scroll-button" on:click={toggleScrollDirection} data-cursor-hover>
    {#if scrollDirection === "down"}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    {/if}
  </button>
</div>

<!-- Global Cursor Hover Effect for Interactive Elements -->
<svelte:head>
  <style>
    * {
      cursor: none !important;
    }
    body {
      overflow-x: hidden;
    }
  </style>
</svelte:head>