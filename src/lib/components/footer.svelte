<script>
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/profile.php?id=100089196350154", 
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-0.73 0-1.325 0.595-1.325 1.325v21.35c0 0.73 0.595 1.325 1.325 1.325h11.495v-9.294h-3.129v-3.622h3.129v-2.671c0-3.1 1.893-4.789 4.656-4.789 1.325 0 2.464 0.099 2.797 0.144v3.24l-1.92 0.001c-1.506 0-1.797 0.716-1.797 1.765v2.309h3.586l-0.467 3.622h-3.119v9.294h6.125c0.73 0 1.325-0.595 1.325-1.325v-21.35c0-0.73-0.595-1.325-1.325-1.325z"/></svg>`
    },
    { 
      name: "Twitter (X)", 
      url: "https://x.com/uthman_dev?t=0byug7sWjHZjQ5dZ6fQelQ&s=09", 
      svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`
    },
    { 
      name: "GitHub", 
      url: "https://github.com/codetesla51", 
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/oladele-uthman-a61578298", 
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
    }
  ];
</script>

<footer class="bg-bg text-text py-8 px-4 text-center">
  <div class="max-w-md mx-auto">
    <div class="flex justify-center space-x-6 mb-6">
      {#each socialLinks as social}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-text/70 hover:text-acc transition-colors duration-300"
        >
          {@html social.svg}
        </a>
      {/each}
    </div>

    <p class="text-text/50 text-sm mb-2">
      © {currentYear} Uthman Dev. All Rights Reserved
    </p>
    <p class="text-text/50 text-sm">
      Built with Svelte, Laravel, and Tailwind
    </p>
  </div>
</footer>