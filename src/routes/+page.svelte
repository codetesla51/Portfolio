<script>
  export let data;

  const personalInfo = {
    email: "uoladele99@gmail.com",
  };

  const projects = [
    {
      name: 'Logos',
      description: 'A scripting language written in Go. Pratt parser, tree-walking interpreter, closures, goroutine-backed concurrency, sandboxed VM, and cross-platform binary compilation.',
      tech_stack: ['Go', 'Compilers', 'AST'],
      github_url: 'https://github.com/codetesla51/logos',
      doc_url: 'https://logos-lang.vercel.app/',
      private: false
    },
    {
      name: 'Kyu',
      description: 'Distributed job queue for Go backed by PostgreSQL and Redis. Retries, scheduling, middleware chain, Prometheus metrics, and a stale job reaper. Benchmarked at 52ns/op with zero allocations.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis'],
      github_url: 'https://github.com/codetesla51/kyu',
      doc_url: 'https://kyu-job-queue.vercel.app/',
      private: false
    },
    {
      name: 'Raw-HTTP',
      description: 'HTTP/1.1 server built from TCP sockets. Keep-alive, TLS, static file serving, graceful shutdown. Buffer pooling pushed throughput from 5,000 to 11,000 RPS.',
      tech_stack: ['Go', 'TCP/IP', 'TLS'],
      github_url: 'https://github.com/codetesla51/raw-http',
      doc_url: null,
      private: false
    },
    {
      name: 'go-git',
      description: 'Git implementation built from first principles in Go. Covers object storage, content addressing, branching, and commit history — built to understand how version control actually works under the hood.',
      tech_stack: ['Go', 'VCS', 'Systems'],
      github_url: 'https://github.com/codetesla51/go-git',
      doc_url: null,
      private: false
    },
    {
      name: 'Limitz',
      description: 'Rate limiting library for Go. Five algorithms — fixed window, sliding window, token bucket, leaky bucket, sliding log — with pluggable storage backends. Swap Redis for Postgres without touching call sites.',
      tech_stack: ['Go', 'Redis', 'PostgreSQL'],
      github_url: 'https://github.com/codetesla51/limitz',
      doc_url: null,
      private: false
    },
    {
      name: 'Seal',
      description: 'JWT authentication library for Go. Rotating refresh tokens with theft detection via typed errors, and four pluggable storage backends: Redis, PostgreSQL, MySQL, SQLite.',
      tech_stack: ['Go', 'JWT', 'Redis'],
      github_url: 'https://github.com/codetesla51/seal',
      doc_url: null,
      private: false
    },
    {
      name: 'Oladele Ledger',
      description: 'Family savings platform in Go. Two isolated money pools, dual JWT auth via separate Seal instances for members and admins, and an async approval pipeline on Kyu with automatic retries. Pool transfers use SERIALIZABLE transactions with row-level locking to prevent race conditions.',
      tech_stack: ['Go', 'PostgreSQL', 'Redis'],
      github_url: null,
      doc_url: null,
      private: true
    },
    {
      name: 'Dotfiles / Arch Rice',
      description: 'Dynamic wallpaper-based rice for Arch Linux on Hyprland, built over Omarchy. Matugen extracts a palette from any wallpaper and templates it into Waybar, Ghostty, btop, Cava, SwayNC, and GTK. Installer handles dependency checks, backups, and symlinking via GNU Stow.',
      tech_stack: ['Hyprland', 'Wayland', 'Matugen'],
      github_url: 'https://github.com/codetesla51/uthman_dotfiles',
      doc_url: null,
      private: false
    },
    {
      name: 'DSA Notes',
      description: 'Complete DSA curriculum with Go implementations and 4000+ lines of study notes. Covers data structures, algorithms, and complexity analysis with working code examples.',
      tech_stack: ['Go', 'Algorithms', 'Education'],
      github_url: 'https://github.com/codetesla51/dsa-notes',
      doc_url: null,
      private: false
    },
    {
      name: 'golexer',
      description: 'A comprehensive lexical analyzer (tokenizer) library for Go. Designed for building programming languages, domain-specific languages (DSLs), configuration parsers, and template engines.',
      tech_stack: ['Go', 'Compilers', 'DSL'],
      github_url: 'https://github.com/codetesla51/golexer',
      doc_url: null,
      private: false
    }
  ];

  const articles = [
    {
      title: "Stop Writing Bash Scripts, There's a Better Way",
      url: "https://dev.to/uthman_dev/stop-writing-bash-scripts-theres-a-better-way-50en"
    },
    {
      title: "Building Git from Scratch in Go: What I Learned About Version Control Internals",
      url: "https://dev.to/uthman_dev/building-git-from-scratch-in-go-what-i-learned-about-version-control-internals-4dih"
    },
    {
      title: "How Buffer Pooling Doubled My HTTP Server's Throughput (4000-7721 RPS)",
      url: "https://dev.to/uthman_dev/how-buffer-pooling-doubled-my-http-servers-throughput-4000-7721-rps-3i0g"
    },
    {
      title: "Building an HTTP Server from TCP Sockets: 250-4000 RPS",
      url: "https://dev.to/uthman_dev/building-an-http-server-from-tcp-sockets-250-4000-rps-2m93"
    },
    {
      title: "Building a Terminal Calculator That Actually Does Logic - Axion",
      url: "https://dev.to/uthman_dev/building-a-terminal-calculator-that-actually-does-logic-axion-1p0m"
    }
  ];

  import Logo from "../assets/logo.png";
  import Resume from "../assets/OLADELE USMAN.pdf";
</script>

<svelte:head>
  <title>Uthman Oladele - Go Backend Engineer</title>
  <meta name="description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <link rel="canonical" href="https://devuthman.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Uthman Oladele - Go Backend Engineer">
  <meta property="og:description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <meta property="og:url" content="https://devuthman.vercel.app/">
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/149274873?v=4">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Uthman Oladele - Go Backend Engineer">
  <meta name="twitter:description" content="Go backend engineer building APIs, distributed systems, and developer tools with PostgreSQL, Redis, and production-focused architecture.">
  <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/149274873?v=4">
</svelte:head>

<!-- ═══════════════════════════════════════════
     HERO
════════════════════════════════════════════ -->
<section id="hero" class="relative md:min-h-screen md:flex md:items-center overflow-hidden bg-canvas font-mono">
  <div class="hidden md:block absolute left-6 md:left-12 lg:left-20 top-0 bottom-0 w-px bg-hairline"></div>

  <div class="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 pt-20 pb-12 md:py-0 md:min-h-screen md:flex md:items-center">
    <div class="flex flex-col lg:flex-row items-start gap-16 lg:gap-28 w-full">

      <div class="flex-1 min-w-0 w-full">

        <!-- Name -->
        <h1 class="mb-10">
          <span class="sr-only">Uthman Oladele</span>
          <div class="mb-4 text-[12px] text-ash">
            <span class="text-stone">»</span> oladele
          </div>
          <div class="ascii-name" aria-hidden="true">
            <svg viewBox="0 0 620 84" preserveAspectRatio="none" style="width: 100%; height: auto; display: block;">
              <text x="0" y="12" style="font-family: 'Geist Mono', monospace; font-size: 11px; white-space: pre; user-select: none;" fill="currentColor">
                <tspan x="0" dy="0">   ██╗   ██╗████████╗██╗  ██╗███╗   ███╗ █████╗ ███╗   ██╗</tspan>
                <tspan x="0" dy="14">   ██║   ██║╚══██╔══╝██║  ██║████╗ ████║██╔══██╗████╗  ██║</tspan>
                <tspan x="0" dy="14">   ██║   ██║   ██║   ███████║██╔████╔██║███████║██╔██╗ ██║</tspan>
                <tspan x="0" dy="14">   ██║   ██║   ██║   ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║</tspan>
                <tspan x="0" dy="14">   ╚██████╔╝   ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║</tspan>
                <tspan x="0" dy="14">    ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝</tspan>
              </text>
            </svg>
          </div>
        </h1>

        <!-- Role + Tech stack -->
        <div class="flex flex-wrap items-center gap-x-5 gap-y-3 mb-10">
          <div class="flex items-center gap-3">
            <span class="text-ink font-bold">#</span>
            <p class="text-xs sm:text-sm tracking-[0.15em] uppercase text-mute">
              Backend Engineer
            </p>
          </div>
          <span class="hidden sm:block h-4 w-px bg-hairline"></span>
          <div class="flex flex-wrap items-center gap-4">
            <span class="icon-link" aria-label="Go" title="Go">
              <svg class="w-[20px] h-[20px]" viewBox="0 0 207 78" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" fill-rule="evenodd"><path d="m16.2 24.1c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6z"/><path d="m1.1 33.3c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6z"/><path d="m25.3 42.5c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7z"/><g transform="translate(55)"><path d="m74.1 22.3c-6.3 1.6-10.6 2.8-16.8 4.4-1.5.4-1.6.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 .1 8 5.6 14.6 13.5 15.7 6.8.9 12.5-1.5 17-6.6.9-1.1 1.7-2.3 2.7-3.7-3.6 0-8.1 0-19.3 0-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3 7.1-9.3 16.5-15.2 28-17.3 9.4-1.7 18.4-.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1.6.9.2 1.4-1 1.7z"/><path d="m107.2 77.6c-9.1-.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7.5-5.4.6-8 .9zm23.8-40.4c-.1-1.3-.1-2.3-.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-.6 7.9-4.1 12.2-10.5 12.7-19.1z" fill-rule="nonzero"/></g></g></svg>
            </span>
            <span class="icon-link" aria-label="PostgreSQL" title="PostgreSQL">
              <svg class="w-[20px] h-[20px]" viewBox="0 0 432.071 445.383" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><g style="fill-rule:nonzero;clip-rule:nonzero;fill:none;stroke:#fff;stroke-width:12.4651;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"><path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style="fill:#000;stroke:#000;stroke-width:37.3953;stroke-linecap:butt;stroke-linejoin:miter"/><path stroke="none" d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style="fill:#336791;stroke:none"/><path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329"/><path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style="stroke-linejoin:bevel"/><path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z"/><path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938"/><path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style="fill:#fff;stroke-width:4.155;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style="fill:#fff;stroke-width:2.0775;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435"/></g></svg>
            </span>
            <span class="icon-link" aria-label="GNU Bash" title="Bash">
              <svg class="w-[20px] h-[20px]" fill="#4EAA25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z"/></svg>
            </span>
            <span class="icon-link" aria-label="Arch Linux" title="Arch Linux">
              <svg class="w-[20px] h-[20px]" fill="#1793D1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 01.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"/></svg>
            </span>
          </div>

        <!-- Bio -->
        <p class="max-w-md mb-12 text-sm sm:text-[15px] leading-relaxed text-body">
          I'm a self-taught backend engineer. I write Go, build things from scratch, and care enough to ship them to production.
        </p>

        <!-- Nav links -->
        <div class="flex items-center mb-16 text-sm">
          <a href="/why-hire-me" class="link-fade text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink">Why hire me</a>
          <span class="mx-4 text-ash">/</span>
          <a href="#projects" class="link-fade text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink">Projects</a>
          <span class="mx-4 text-ash">/</span>
          <a href={Resume} download class="link-fade text-ink underline underline-offset-4 decoration-hairline hover:decoration-ink">Resume</a>
        </div>

        <!-- Socials + email -->
        <div class="flex flex-wrap items-center gap-5">
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
          <span class="h-4 w-px bg-hairline"></span>
          <a href="mailto:{personalInfo.email}" class="link-fade text-xs text-mute break-all">
            {personalInfo.email}
          </a>
        </div>
      </div>

      <!-- Logo -->
      <div class="hidden lg:flex flex-shrink-0 items-center justify-center w-full" style="max-width: clamp(140px, 20vw, 280px);">
        <img
          src={Logo}
          alt="Uthman Oladele"
          class="logo-mark w-full h-auto"
        />
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     PROJECTS
════════════════════════════════════════════ -->
<section id="projects" class="bg-canvas font-mono">
  <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-28">

    <div class="flex items-center gap-3 mb-12">
      <span class="text-ink font-bold">#</span>
      <span class="text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-ink">Projects</span>
    </div>

    <div class="border-t border-hairline">
      {#each projects as project}
        <article class="py-8 border-b border-hairline">
          <div class="flex items-baseline justify-between gap-4 flex-wrap mb-4">
            <div class="flex items-baseline gap-3 flex-wrap">
              <h3 class="text-base font-medium text-ink">{project.name}</h3>
              {#if project.private}
                <span class="text-[11px] bg-surface-dark text-canvas rounded-sm px-2 py-[2px] tracking-wide">private</span>
              {/if}
            </div>
            {#if project.doc_url || project.github_url}
              <div class="flex items-center gap-4 flex-shrink-0">
                {#if project.doc_url}
                  <a href={project.doc_url} target="_blank" rel="noopener noreferrer"
                    class="card-link text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute">Docs ↗</a>
                {/if}
                {#if project.github_url}
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                    class="card-link text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute">GitHub ↗</a>
                {/if}
              </div>
            {/if}
          </div>
          <p class="text-[14px] leading-[1.7] mb-5 max-w-2xl text-body">
            {project.description}
          </p>
          <div class="flex flex-wrap items-center gap-2">
            {#each project.tech_stack.slice(0, 3) as tech, i}
              <span class="text-[11px] text-mute tracking-wide">{tech}</span>
              {#if i < project.tech_stack.slice(0, 3).length - 1}
                <span class="text-[11px] text-ash">·</span>
              {/if}
            {/each}
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-12 pt-6 border-t border-hairline">
      <a href="https://github.com/codetesla51?tab=repositories" target="_blank" rel="noopener noreferrer"
        class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-mute">More on GitHub →</a>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════
     WRITING
════════════════════════════════════════════ -->
<section id="writing" class="bg-canvas font-mono">
  <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-28">

    <div class="flex items-center gap-3 mb-12">
      <span class="text-ink font-bold">#</span>
      <span class="text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-ink">Writing</span>
    </div>

    <div class="border-t border-hairline">
      {#each articles as article}
        <a href={article.url} target="_blank" rel="noopener noreferrer"
          class="article-row flex items-baseline justify-between gap-6 py-7 border-b border-hairline">
          <span class="flex items-baseline gap-3 text-[14px] leading-[1.7] text-body">
            {article.title}
          </span>
          <span class="text-xs flex-shrink-0 text-mute opacity-50 group-hover:opacity-100">↗</span>
        </a>
      {/each}
    </div>

    <div class="mt-12 pt-6 border-t border-hairline">
      <a href="/writing"
        class="link-fade text-xs text-mute underline decoration-hairline underline-offset-4 hover:decoration-um">All posts →</a>
    </div>

  </div>
</section>

<style>
  .link-fade, .card-link {
    opacity: 0.6;
    transition: opacity 0.18s ease;
  }
  .link-fade:hover, .card-link:hover { opacity: 1; }

  .logo-mark {
    opacity: 0.4;
    transform: scaleX(-1);
    transition: opacity 0.2s ease;
    object-fit: contain;
  }
  .logo-mark:hover { opacity: 0.65; }

  .ascii-name {
    width: 100%;
    color: var(--ink);
    overflow: hidden;
  }

  .icon-link { opacity: 0.5; transition: opacity 0.18s ease; }
  .icon-link:hover { opacity: 1; }

  .article-row { text-decoration: none; transition: opacity 0.18s ease; }
  .article-row:hover { opacity: 0.7; }

  a:focus-visible, button:focus-visible {
    outline: 1px solid var(--color-ash);
    outline-offset: 2px;
  }
</style>
