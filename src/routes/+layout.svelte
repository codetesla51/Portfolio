<!-- src/routes/+layout.svelte -->
<script>
  import Loader from '$lib/components/loader.svelte';
  import Resume from "../assets/OLADELE USMAN.pdf";
  import "../app.css";
  import { afterNavigate } from '$app/navigation';

  afterNavigate(() => {
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
    // Init code block headers after navigation
    setTimeout(() => {
      if (typeof initCodeBlocks === 'function') initCodeBlocks();
    }, 100);
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<div class="min-h-screen flex flex-col font-mono">

  <!-- Desktop: side dots — improved: pill, hairline, hover labels -->
  <nav class="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 nav-glass rounded-full px-3 py-6 border border-hairline">
    <a href="/#projects" class="group relative flex items-center justify-center" aria-label="Projects">
      <span class="dot group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
      <span class="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm border border-hairline bg-canvas px-2 py-1 text-[11px] tracking-wide text-mute opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
    </a>
    <a href="/#writing" class="group relative flex items-center justify-center" aria-label="Writing">
      <span class="dot group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
      <span class="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm border border-hairline bg-canvas px-2 py-1 text-[11px] tracking-wide text-mute opacity-0 group-hover:opacity-100 transition-opacity">Writing</span>
    </a>
    <span class="w-4 h-px bg-hairline my-1"></span>
    <a href={Resume} download class="nav-btn group relative" aria-label="Resume">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
      </svg>
      <span class="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm border border-hairline bg-canvas px-2 py-1 text-[11px] tracking-wide text-mute opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
      <span class="pointer-events-none absolute right-full top-1/2 mr-4 flex w-36 -translate-y-1/2 flex-col items-end gap-0" aria-hidden="true">
        <span class="-rotate-3 whitespace-nowrap font-mono text-[10px] italic tracking-wide text-mute">cv's right here — no stress</span>
        <svg class="h-8 w-8 shrink-0 rotate-[8deg] text-mute" fill="currentColor" viewBox="0 0 375.01 375.01" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <path d="M330.254,210.966c-56.916,1.224-110.16,25.704-167.076,28.764c-16.524,0.612-33.048-1.224-45.9-8.568 c23.256-4.283,45.288-12.239,61.812-27.54c17.749-15.911,19.584-45.287,8.568-66.095c-10.404-19.584-36.72-20.196-55.08-15.3 C89.125,132.63,59.75,184.65,84.229,221.369c-26.928,1.836-53.856,0-80.172,1.225c-5.508,0.611-5.508,8.567,0.612,8.567 c26.928,1.836,59.364,4.284,91.188,2.448c1.836,1.225,3.672,3.061,5.508,4.284c64.872,45.288,159.732-11.628,229.5-13.464 C338.821,223.817,338.821,210.354,330.254,210.966z M89.737,196.277c-6.732-25.091,15.3-46.511,35.496-56.916 c20.196-10.404,48.96-10.404,55.692,15.912c7.956,30.6-18.36,48.959-43.452,56.916c-11.628,3.672-22.644,6.12-34.272,7.344 C96.47,213.413,92.186,206.069,89.737,196.277z"/>
              <path d="M371.869,211.577c-8.567-5.508-16.523-11.016-24.479-16.523c-6.732-4.896-13.464-10.404-21.42-12.24 c-6.12-1.836-12.24,7.344-6.732,11.627c6.732,4.896,14.076,9.18,20.809,13.464c4.896,3.061,9.792,6.732,14.075,9.792 c-4.896,2.448-9.792,4.284-14.688,6.732c-3.672,1.836-7.956,3.672-11.628,5.508c-1.224,0.612-2.448,1.836-3.061,3.06 c-1.836,2.448-0.611,1.225,0,0.612c-2.447,1.836-2.447,7.956,1.837,7.344l0,0c1.224,0.612,2.447,0.612,4.283,0.612 c4.284-1.224,9.181-3.06,13.464-4.896c9.181-3.673,18.36-7.345,26.929-12.24C376.153,220.758,376.153,214.025,371.869,211.577z"/>
            </g>
          </g>
        </svg>
      </span>
    </a>
  </nav>

  <!-- Mobile: bottom nav — improved: pill, active, hairline -->
  <nav class="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden nav-glass border border-hairline rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 flex items-center gap-0.5 sm:gap-1 max-w-[90vw]">
    <a href="/#projects" class="mob-link px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-surface-soft transition-colors">
      <span class="text-[10px] sm:text-[11px] tracking-wide whitespace-nowrap">Projects</span>
    </a>
    <span class="w-px h-4 bg-hairline"></span>
    <a href="/#writing" class="mob-link px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-surface-soft transition-colors">
      <span class="text-[10px] sm:text-[11px] tracking-wide whitespace-nowrap">Writing</span>
    </a>
    <span class="w-px h-4 bg-hairline"></span>
    <a href={Resume} download class="mob-link ml-1 sm:ml-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-ink text-canvas hover:opacity-90 transition-opacity whitespace-nowrap" aria-label="Resume">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
      </svg>
    </a>
  </nav>

  <Loader />

  <div class="mx-auto w-full max-w-5xl flex-1 min-h-screen flex flex-col border-x border-hairline">
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-10 border-t border-hairline bg-canvas">
      <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <div>
          <p class="text-sm mb-1.5 text-mute">Got a project or opportunity?</p>
          <a
            href="mailto:uoladele99@gmail.com"
            class="font-mono text-xs link-fade text-ink"
          >
            uoladele99@gmail.com
          </a>
        </div>

        <div class="flex items-center gap-5">
          <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="GitHub">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://x.com/uthman_dev" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="X">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="Dev.to">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.21-.16.31-.42.31-.79v-2.32c0-.37-.1-.63-.31-.79zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.69V8.53h1.93c.92 0 1.54.19 1.98.77.38.5.56 1.18.56 2.02v1.96c0 .84-.18 1.52-.56 2.02h-.04zm4.01-5.87c0 .59-.47 1.06-1.06 1.06s-1.06-.47-1.06-1.06.47-1.06 1.06-1.06 1.06.47 1.06 1.06zm-.04 6.34h-2.09V10.3h2.09v5.47zm6.44-2.04c0 1.39-.52 2.17-1.93 2.17-1.02 0-1.7-.51-1.93-1.23l1.15-.66c.09.37.36.77.81.77.47 0 .73-.26.73-.77v-4.71h1.17v4.43z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/oladele-usman-4a56833b1" target="_blank" rel="noopener noreferrer"
            class="icon-link text-mute" aria-label="LinkedIn">
            <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  </div>

</div>

<style>
  .nav-glass {
    background: color-mix(in srgb, var(--color-canvas) 82%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .nav-btn {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 9999px;
    border: 1px solid color-mix(in srgb, var(--color-mute) 35%, transparent);
    background: transparent;
    color: var(--color-mute);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: color 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
    cursor: pointer;
  }
  .nav-btn:hover {
    color: var(--color-ink);
    border-color: var(--color-ink);
    transform: scale(1.05);
  }

  .dot {
    width: 0.38rem;
    height: 0.38rem;
    border-radius: 9999px;
    background: var(--color-ink);
    opacity: 0.35;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .mob-link {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--color-mute);
    text-decoration: none;
    transition: color 0.18s ease, background 0.18s ease;
  }
  .mob-link:hover { color: var(--color-ink); }

  .icon-link {
    opacity: 0.45;
    transition: opacity 0.18s ease;
  }
  .icon-link:hover { opacity: 1; }

  .link-fade {
    opacity: 0.7;
    text-decoration: none;
    transition: opacity 0.18s ease;
  }
  .link-fade:hover { opacity: 1; }
</style>
