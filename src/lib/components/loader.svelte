<script>
	import { onMount, tick } from 'svelte';
	import { writable, derived } from 'svelte/store';
	
	const loadingStages = [
		'package main',
		'',
		'import (',
		'    "fmt"',
		'    "time"',
		'    "net/http"',
		'    "github.com/uthmandev/portfolio"',
		')',
		'',
		'// 🚀 Booting Uthman Dev Environment',
		'type Developer struct {',
		'    Name       string   `json:"name"`',
		'    Role       string   `json:"role"`',
		'    Skills     []string `json:"skills"`',
		'    Status     string   `json:"status"`',
		'    Experience int      `json:"years"`',
		'}',
		'',
		'func main() {',
		'    dev := Developer{',
		'        Name:       "Uthman Dev",',
		'        Role:       "Full Stack Developer",',
		'        Skills:     []string{"Go", "JavaScript", "React", "Docker"},',
		'        Status:     "Available for projects",',
		'        Experience: 4,',
		'    }',
		'',
		'    // 📂 Initializing Portfolio System',
		'    portfolio := portfolio.New()',
		'    if err := portfolio.LoadProjects(); err != nil {',
		'        panic(err)',
		'    }',
		'',
		'    // 🌐 Establishing Network Connections',
		'    server := &http.Server{',
		'        Addr:         ":8080",',
		'        Handler:      setupRoutes(),',
		'        ReadTimeout:  15 * time.Second,',
		'        WriteTimeout: 15 * time.Second,',
		'    }',
		'',
		'    // 💼 Loading Experience Module',
		'    experience := loadCareerData(dev)',
		'    fmt.Printf("Loading %d years of experience...\\n", experience)',
		'',
		'    // ⚡ Optimizing Digital Workspace',
		'    go optimizePerformance()',
		'    defer cleanup()',
		'',
		'    fmt.Println("🎯 System ready to innovate!")',
		'    fmt.Printf("🚀 Server starting on %s\\n", server.Addr)',
		'    log.Fatal(server.ListenAndServe())',
		'}'
	];
	
	// Configuration options (maintaining original timing)
	const config = {
		typingSpeed: { min: 20, max: 70 },     // Original speed per character
		linePause: { min: 300, max: 700 },     // Original pause between lines
		initialDelay: 300,                      // Original delay before starting
		cursorBlinkSpeed: 500,                  // Original cursor blink interval
		progressIncrement: 7,                   // Original progress bar increment per line
		glitchIntensity: 0.8,                  // Original glitch frequency
		glitchDuration: 150,                    // Original glitch duration
		finalPause: 800                         // Original pause before completion
	};
	
	// Enhanced state variables
	let displayedLines = [];
	let displayingText = '';
	let currentLineIndex = 0;
	let currentCharIndex = 0;
	let showCursor = true;
	let typingInProgress = false;
	let progress = 0;
	let loading = true;
	let systemStatus = 'INITIALIZING';
	let memoryUsage = 0;
	let cpuUsage = 0;
	
	$: loadingPercent = Math.min(Math.round(progress), 100);
	
	function disableScroll() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		
		document.body.style.overflow = 'hidden';
		
		document.body.dataset.scrollTop = scrollTop.toString();
		document.body.dataset.scrollLeft = scrollLeft.toString();
		
		window.scrollTo(scrollLeft, scrollTop);
	}

	function enableScroll() {
		const scrollTop = parseInt(document.body.dataset.scrollTop || '0');
		const scrollLeft = parseInt(document.body.dataset.scrollLeft || '0');
		
		document.body.style.overflow = '';
		
		delete document.body.dataset.scrollTop;
		delete document.body.dataset.scrollLeft;
		
		window.scrollTo(scrollLeft, scrollTop);
	}
	
	async function typeText(text) {
		typingInProgress = true;
		displayingText = '';
		currentCharIndex = 0;
		
		for (let i = 0; i < text.length; i++) {
			displayingText += text[i];
			currentCharIndex = i;
			
			const typeDelay = Math.floor(
				Math.random() * (config.typingSpeed.max - config.typingSpeed.min) + 
				config.typingSpeed.min
			);
			
			await new Promise(resolve => setTimeout(resolve, typeDelay));
		}
		
		displayedLines = [...displayedLines, displayingText];
		displayingText = '';
		typingInProgress = false;
		currentCharIndex = 0;
	}
	
	function applyRandomGlitch() {
		if (Math.random() > config.glitchIntensity && displayedLines.length > 0) {
			const glitchIndex = Math.floor(Math.random() * displayedLines.length);
			const originalLine = displayedLines[glitchIndex];
			
			const glitchLine = originalLine
				.split('')
				.map(char => Math.random() > 0.9 ? randomChar() : char)
				.join('');
				
			const updatedLines = [...displayedLines];
			updatedLines[glitchIndex] = glitchLine;
			displayedLines = updatedLines;
			
			setTimeout(() => {
				const restoredLines = [...displayedLines];
				restoredLines[glitchIndex] = originalLine;
				displayedLines = restoredLines;
			}, config.glitchDuration);
		}
	}
	
	function randomChar() {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/';
		return chars.charAt(Math.floor(Math.random() * chars.length));
	}
	
	function updateSystemMetrics() {
		// Simulate realistic system metrics
		memoryUsage = Math.min(20 + (progress / 100) * 60 + Math.random() * 10, 85);
		cpuUsage = Math.min(10 + (progress / 100) * 40 + Math.random() * 20, 75);
	}
	
	onMount(async () => {
		disableScroll();
		
		const cursorTimer = setInterval(() => {
			showCursor = !showCursor;
		}, config.cursorBlinkSpeed);
		
		const glitchTimer = setInterval(() => {
			if (!loading) {
				clearInterval(glitchTimer);
				return;
			}
			applyRandomGlitch();
		}, 600);
		
		const metricsTimer = setInterval(() => {
			if (!loading) {
				clearInterval(metricsTimer);
				return;
			}
			updateSystemMetrics();
		}, 200);
		
		await new Promise(resolve => setTimeout(resolve, config.initialDelay));
		
		for (let i = 0; i < loadingStages.length; i++) {
			currentLineIndex = i;
			
			await typeText(loadingStages[i]);
			
			progress += config.progressIncrement;
			
			const pauseDuration = Math.floor(
				Math.random() * (config.linePause.max - config.linePause.min) +
				config.linePause.min
			);
			await new Promise(resolve => setTimeout(resolve, pauseDuration));
		}
		
		progress = 100;
		
		setTimeout(() => {
			loading = false;
			enableScroll();
		}, config.finalPause);
		
		return () => {
			enableScroll();
			clearInterval(cursorTimer);
			clearInterval(glitchTimer);
			clearInterval(metricsTimer);
		};
	});
</script>

{#if loading}
<div class="fixed inset-0 z-50 flex items-center justify-center bg-sec backdrop-blur-sm transition-opacity duration-500">
	<div class="w-full max-w-md p-4 bg-transparent">
		<!-- Terminal Window -->
		<div class="bg-[#1a1a1a] p-4 rounded-lg border border-acc/20 shadow-lg relative overflow-hidden">
			<!-- Terminal Header -->
			<div class="flex items-center justify-between mb-3">
				<div class="flex items-center space-x-2">
					<div class="w-3 h-3 bg-red-500 rounded-full"></div>
					<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div class="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>
				<div class="text-acc/70 text-xs font-ice">⚙️ GO COMPILER</div>
				<div class="text-text/50 text-xs font-mono">
					{loadingPercent}%
				</div>
			</div>
			
			<!-- Progress Bar -->
			<div class="h-1 w-full bg-sec/50 rounded-full mb-3 overflow-hidden">
				<div class="h-full bg-acc transition-all duration-300 rounded-full glow-effect" style="width: {loadingPercent}%"></div>
			</div>
			
			<!-- Terminal Content -->
			<div class="bg-[#0d0d0d] p-3 rounded border border-acc/10 shadow-inner">
				<pre class="font-mono text-acc text-sm whitespace-pre-wrap break-words min-h-[200px] max-h-[300px] overflow-y-auto terminal-content">
{#each displayedLines as line}{line}
{/each}{#if typingInProgress}{displayingText}{/if}{#if showCursor}<span class="cursor">▋</span>{/if}</pre>
			</div>
			
			<!-- System Status -->
			<div class="mt-3 flex justify-between items-center text-xs font-mono">
				<div class="text-text/50">Initialize: <span class="text-acc">{currentLineIndex + 1}/{loadingStages.length}</span></div>
				<div class="text-acc/90 blink-slow">SYSTEM {loadingPercent < 100 ? 'LOADING' : 'READY'}</div>
			</div>
		</div>
	</div>
</div>
{/if}

<style>
@keyframes pulse-cursor {
	0%, 50% { opacity: 1; }
	51%, 100% { opacity: 0; }
}

@keyframes pulse-text {
	0%, 100% { opacity: 0.8; transform: scale(1); }
	50% { opacity: 1; transform: scale(1.02); }
}

@keyframes glow {
	0%, 100% { 
		box-shadow: 0 0 10px rgba(6, 182, 212, 0.5); 
	}
	50% { 
		box-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.3); 
	}
}

@keyframes shimmer {
	0% { transform: translateX(-100%) skewX(-12deg); }
	100% { transform: translateX(200%) skewX(-12deg); }
}

@keyframes scanline {
	0% { transform: translateY(-100%); }
	100% { transform: translateY(500%); }
}

@keyframes matrix-rain {
	0% { transform: translateY(-100px); opacity: 0; }
	10% { opacity: 1; }
	90% { opacity: 1; }
	100% { transform: translateY(calc(100vh + 100px)); opacity: 0; }
}

.cursor {
	animation: pulse-cursor 1s infinite;
	display: inline-block;
}

.pulse-text {
	animation: pulse-text 2s infinite;
}

.glow-effect {
	animation: glow 2s infinite;
}

.animate-shimmer {
	animation: shimmer 2s infinite;
}

.terminal-glow {
	box-shadow: 
		0 0 20px rgba(6, 182, 212, 0.3),
		0 0 40px rgba(6, 182, 212, 0.1),
		inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.terminal-content {
	position: relative;
	text-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
}

.terminal-content::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	background: 
		linear-gradient(transparent 50%, rgba(34, 197, 94, 0.03) 50%),
		linear-gradient(90deg, transparent 50%, rgba(34, 197, 94, 0.01) 50%);
	background-size: 100% 4px, 4px 100%;
	pointer-events: none;
	z-index: 1;
}

.terminal-content::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 2px;
	background: rgba(34, 197, 94, 0.3);
	pointer-events: none;
	animation: scanline 6s linear infinite;
	z-index: 2;
	filter: blur(1px);
}

.code-line {
	position: relative;
	z-index: 3;
}

.line-number {
	display: inline-block;
	width: 3ch;
	text-align: right;
	user-select: none;
	opacity: 0.6;
}

/* Syntax highlighting for Go */
.terminal-content :global(.keyword) {
	color: #ff79c6;
	font-weight: bold;
}

.terminal-content :global(.string) {
	color: #f1fa8c;
}

.terminal-content :global(.comment) {
	color: #6272a4;
	font-style: italic;
}

.terminal-content :global(.type) {
	color: #8be9fd;
}

.terminal-content :global(.function) {
	color: #50fa7b;
}

/* Responsive adjustments */
@media (max-width: 768px) {
	.terminal-content {
		font-size: 0.75rem;
		min-height: 250px;
		max-height: 300px;
	}
	
	.line-number {
		display: none;
	}
}

/* Selection styling */
::selection {
	background-color: rgba(6, 182, 212, 0.3);
	color: inherit;
}

::-moz-selection {
	background-color: rgba(6, 182, 212, 0.3);
	color: inherit;
}
</style>