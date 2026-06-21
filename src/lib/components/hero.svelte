<script>
    import Resume from "../../assets/OLADELE USMAN.pdf";
    import Logo from "../../assets/logo.png";
    export let personalInfo;
    export let currentlyBuilding = null;
</script>

<section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden"
>
    <!-- Left vertical accent line -->
    <div
        class="hidden md:block absolute left-12 lg:left-20 top-0 bottom-0 w-px"
        style="background-image: linear-gradient(to bottom, transparent, var(--border-strong) 30%, var(--border-strong) 70%, transparent);"
    ></div>

    <div class="relative w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 py-24 sm:py-0 sm:min-h-screen sm:flex sm:items-center">
        <div class="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 w-full">

            <!-- Text -->
            <div class="flex-1 min-w-0">

                <!-- Name -->
                <h1
                    class="font-bold leading-[0.88] mb-8"
                    style="font-size: clamp(58px, 8.5vw, 104px); letter-spacing: -0.04em;"
                >
                    <span style="color: var(--text);">Uthman</span><br />
                    <span style="color: var(--text-muted);">Oladele</span>
                </h1>

                <!-- Role -->
                <div class="flex items-center gap-3 mb-8">
                    <div class="h-px w-7 flex-shrink-0" style="background-color: var(--border-strong);"></div>
                    <p class="font-mono text-xs tracking-[0.22em] uppercase" style="color: var(--text-muted);">
                        Backend Engineer<span class="blink" style="color: var(--text);">_</span>
                    </p>
                </div>

                <!-- Bio -->
                <p
                    class="max-w-md mb-10"
                    style="color: var(--text-soft); font-size: 15px; line-height: 1.78;"
                >
                    I build backend systems and developer tools with a focus on
                    reliability, performance, and maintainable architecture.
                </p>

                <!-- Currently building -->
                {#if currentlyBuilding?.name && currentlyBuilding?.url}
                    <div class="flex items-center gap-2.5 mb-10">
                        <span class="dot-pulse inline-block w-1.5 h-1.5 rounded-full" style="background-color: #22c55e;"></span>
                        <p class="font-mono text-xs" style="color: var(--text-muted);">
                            Currently building:
                            <a
                                href={currentlyBuilding.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="underline underline-offset-4 transition-opacity hover:opacity-100 opacity-80"
                                style="color: var(--text);"
                            >
                                {currentlyBuilding.name}
                            </a>
                        </p>
                    </div>
                {/if}

                <!-- Nav links -->
                <div class="flex items-center mb-14">
                    <a href="#projects" class="text-sm link-fade" style="color: var(--text);">Projects</a>
                    <span class="mx-4 text-sm" style="color: var(--border-strong);">/</span>
                    <a href={Resume} download class="text-sm link-fade" style="color: var(--text);">Resume</a>
                </div>

                <!-- Socials + email -->
                <div class="flex flex-wrap items-center gap-5">
                    <a href="https://github.com/codetesla51" target="_blank" rel="noopener noreferrer"
                        class="icon-link" style="color: var(--text-muted);" aria-label="GitHub">
                        <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    <a href="https://x.com/uthman_dev" target="_blank" rel="noopener noreferrer"
                        class="icon-link" style="color: var(--text-muted);" aria-label="X (Twitter)">
                        <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    <a href="https://dev.to/uthman_dev" target="_blank" rel="noopener noreferrer"
                        class="icon-link" style="color: var(--text-muted);" aria-label="DEV.to">
                        <svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.21-.16.31-.42.31-.79v-2.32c0-.37-.1-.63-.31-.79zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4.69V8.53h1.93c.92 0 1.54.19 1.98.77.38.5.56 1.18.56 2.02v1.96c0 .84-.18 1.52-.56 2.02h-.04zm4.01-5.87c0 .59-.47 1.06-1.06 1.06s-1.06-.47-1.06-1.06.47-1.06 1.06-1.06 1.06.47 1.06 1.06zm-.04 6.34h-2.09V10.3h2.09v5.47zm6.44-2.04c0 1.39-.52 2.17-1.93 2.17-1.02 0-1.7-.51-1.93-1.23l1.15-.66c.09.37.36.77.81.77.47 0 .73-.26.73-.77v-4.71h1.17v4.43z" />
                        </svg>
                    </a>

                    <span class="h-4 w-px" style="background-color: var(--border);"></span>

                    <a href="mailto:{personalInfo.email}" class="font-mono text-xs link-fade" style="color: var(--text-muted);">
                        {personalInfo.email}
                    </a>
                </div>
            </div>

            <!-- Image -->
            <div class="hidden lg:block w-[300px] xl:w-[330px] flex-shrink-0">
                <img
                    src={Logo}
                    alt="Uthman Oladele"
                    class="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    style="opacity: 0.72; transform: scaleX(-1); border: 1px solid var(--border);"
                />
            </div>

        </div>
    </div>
</section>

<style>
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .blink { animation: blink 1s step-end infinite; }

    @keyframes dot-pulse {
        0%, 100% { opacity: 0.9; }
        50% { opacity: 0.3; }
    }
    .dot-pulse { animation: dot-pulse 2.4s ease-in-out infinite; }

    .link-fade {
        opacity: 0.55;
        transition: opacity 0.18s ease;
        text-decoration: none;
    }
    .link-fade:hover { opacity: 1; }

    .icon-link {
        opacity: 0.5;
        transition: opacity 0.18s ease;
    }
    .icon-link:hover { opacity: 1; }
</style>