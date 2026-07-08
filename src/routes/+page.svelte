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
<section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-canvas font-mono">
  <div class="hidden md:block absolute left-6 md:left-12 lg:left-20 top-0 bottom-0 w-px bg-hairline"></div>

  <div class="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-20 sm:py-0 sm:min-h-screen sm:flex sm:items-center">
    <div class="flex flex-col lg:flex-row items-start gap-14 lg:gap-24 w-full">

      <div class="flex-1 min-w-0 w-full">

        <!-- Name -->
        <h1 class="mb-8">
          <span class="block font-bold leading-[1.1] text-mute" style="font-size: clamp(20px, 3.4vw, 28px); letter-spacing: 0.02em;">
            Oladele
          </span>
          <span class="sr-only">Uthman</span>
          <pre class="ascii-name text-ink" aria-hidden="true">{`
 ██╗   ██╗████████╗██╗  ██╗███╗   ███╗ █████╗ ███╗   ██╗
 ██║   ██║╚══██╔══╝██║  ██║████╗ ████║██╔══██╗████╗  ██║
 ██║   ██║   ██║   ███████║██╔████╔██║███████║██╔██╗ ██║
 ██║   ██║   ██║   ██╔══██║██║╚██╔╝██║██╔══██║██║╚██╗██║
 ╚██████╔╝   ██║   ██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
  ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝`}</pre>
        </h1>

        <!-- Role + Tech stack -->
        <div class="flex flex-wrap items-center gap-x-4 gap-y-3 mb-8">
          <div class="flex items-center gap-3">
            <span class="text-ink font-bold">[+]</span>
            <p class="text-xs sm:text-sm tracking-[0.15em] uppercase text-mute">
              Backend Engineer
            </p>
          </div>
          <span class="hidden sm:block h-4 w-px bg-hairline"></span>
          <div class="flex flex-wrap items-center gap-4">
            <span class="icon-link text-ink" aria-label="PostgreSQL" title="PostgreSQL">
              <svg class="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"/>
              </svg>
            </span>
            <span class="icon-link text-ink" aria-label="Go" title="Go">
              <svg class="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/>
              </svg>
            </span>
            <span class="icon-link text-ink" aria-label="GNU Bash" title="Bash">
              <svg class="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z"/>
              </svg>
            </span>
            <span class="icon-link text-ink" aria-label="Arch Linux" title="Arch Linux">
              <svg class="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74zM22.898 21.36v-.623h-.234v-.084h.562v.084h-.234v.623h.331v-.707h.142l.167.5.034.107a2.26 2.26 0 01.038-.114l.17-.493H24v.707h-.091v-.593l-.206.593h-.084l-.205-.602v.602h-.091"/>
              </svg>
            </span>
          </div>
        </div>

        <!-- Bio -->
        <p class="max-w-md mb-10 text-sm sm:text-base leading-relaxed text-body">
          I'm a self-taught backend engineer. I write Go, build things from scratch, and care enough to ship them to production.
        </p>

        <!-- Nav links -->
        <div class="flex items-center mb-14 text-sm">
          <a href="#projects" class="link-fade text-ink underline underline-offset-4">Projects</a>
          <span class="mx-4 text-ash">/</span>
          <a href={Resume} download class="link-fade text-ink underline underline-offset-4">Resume</a>
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
      <div class="hidden md:flex flex-shrink-0 items-center justify-center w-full" style="max-width: clamp(160px, 22vw, 320px);">
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
  <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">

    <div class="flex items-center gap-3 mb-10">
      <span class="text-ink font-bold">[+]</span>
      <span class="text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-ink">Projects</span>
    </div>

    <div class="border-t border-hairline">
      {#each projects as project}
        <article class="py-7 border-b border-hairline">
          <div class="flex items-baseline justify-between gap-4 flex-wrap mb-3">
            <div class="flex items-baseline gap-3 flex-wrap">
              <span class="text-ink">[+]</span>
              <h3 class="text-base font-medium text-ink">{project.name}</h3>
              {#if project.private}
                <span class="text-xs bg-surface-dark text-canvas rounded-sm px-2 py-[2px]">private</span>
              {/if}
            </div>
            {#if project.doc_url || project.github_url}
              <div class="flex items-center gap-4 flex-shrink-0">
                {#if project.doc_url}
                  <a href={project.doc_url} target="_blank" rel="noopener noreferrer"
                    class="card-link text-xs text-mute underline">Docs ↗</a>
                {/if}
                {#if project.github_url}
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                    class="card-link text-xs text-mute underline">GitHub ↗</a>
                {/if}
              </div>
            {/if}
          </div>
          <p class="text-sm leading-relaxed mb-5 max-w-2xl pl-5 text-body">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-3 pl-5">
            {#each project.tech_stack.slice(0, 3) as tech, i}
              <span class="text-xs text-mute">{tech}</span>
              {#if i < project.tech_stack.slice(0, 3).length - 1}
                <span class="text-xs text-ash">·</span>
              {/if}
            {/each}
          </div>
        </article>
      {/each}
    </div>

    <div class="mt-10 pt-6 border-t border-hairline">
      <a href="https://github.com/codetesla51?tab=repositories" target="_blank" rel="noopener noreferrer"
        class="link-fade text-xs text-mute underline">More on GitHub →</a>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════
     WRITING
════════════════════════════════════════════ -->
<section id="writing" class="bg-canvas font-mono">
  <div class="max-w-[960px] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">

    <div class="flex items-center gap-3 mb-10">
      <span class="text-ink font-bold">[+]</span>
      <span class="text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-ink">Writing</span>
    </div>

    <div class="border-t border-hairline">
      {#each articles as article}
        <a href={article.url} target="_blank" rel="noopener noreferrer"
          class="article-row flex items-baseline justify-between gap-6 py-6 border-b border-hairline">
          <span class="flex items-baseline gap-3 text-sm leading-relaxed text-body">
            <span class="text-ink flex-shrink-0">[+]</span>{article.title}
          </span>
          <span class="text-xs flex-shrink-0 text-mute">↗</span>
        </a>
      {/each}
    </div>

    <div class="mt-10 pt-6 border-t border-hairline">
      <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
        class="link-fade text-xs text-mute underline">More on Dev.to →</a>
    </div>

  </div>
</section>

<style>
  .link-fade, .card-link {
    opacity: 0.6;
    transition: opacity 0.15s ease;
  }
  .link-fade:hover, .card-link:hover { opacity: 1; }

  .logo-mark {
    opacity: 0.5;
    transform: scaleX(-1);
    transition: opacity 0.2s ease;
    object-fit: contain;
  }
  .logo-mark:hover { opacity: 0.75; }

  .ascii-name {
    display: block;
    margin: 0;
    font-family: ui-monospace, "Cascadia Mono", "Segoe UI Mono", Consolas, "Liberation Mono", Menlo, Monaco, "Courier New", monospace;
    font-weight: 700;
    font-size: clamp(4.2px, 2.05vw, 15px);
    font-variant-ligatures: none;
    line-height: 1.15;
    letter-spacing: 0;
    white-space: pre;
    overflow-x: auto;
    max-width: 100%;
    -webkit-font-smoothing: antialiased;
    scrollbar-width: none;
  }
  .ascii-name::-webkit-scrollbar { display: none; }

  .icon-link { opacity: 0.55; transition: opacity 0.15s ease; }
  .icon-link:hover { opacity: 1; }

  .article-row { text-decoration: none; transition: opacity 0.15s ease; }
  .article-row:hover { opacity: 0.7; }

  a:focus-visible, button:focus-visible {
    outline: 1px solid #201d1d;
    outline-offset: 2px;
  }
</style>