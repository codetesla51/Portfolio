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
		'        Experience: 5,',
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
	
	// Enhanced configuration with more realistic timing
	const config = {
		typingSpeed: { min: 15, max: 50 },     // Faster, more realistic typing
		linePause: { min: 200, max: 500 },     // Shorter pauses for better flow
		initialDelay: 500,                      // Slightly longer initial delay
		cursorBlinkSpeed: 530,                  // Slightly faster cursor
		progressIncrement: 2.5,                 // Smoother progress increments
		glitchIntensity: 0.85,                  // Slightly more glitches
		glitchDuration: 120,                    // Shorter glitch duration
		finalPause: 1200                        // Pause before completion
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
	$: {
		if (loadingPercent < 25) systemStatus = 'INITIALIZING';
		else if (loadingPercent < 50) systemStatus = 'COMPILING';
		else if (loadingPercent < 75) systemStatus = 'LINKING';
		else if (loadingPercent < 100) systemStatus = 'OPTIMIZING';
		else systemStatus = 'READY';
	}
	
	function disableScroll() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
		document.body.style.height = '100%';
		
		document.body.dataset.scrollTop = scrollTop.toString();
		document.body.dataset.scrollLeft = scrollLeft.toString();
	}

	function enableScroll() {
		const scrollTop = parseInt(document.body.dataset.scrollTop || '0');
		const scrollLeft = parseInt(document.body.dataset.scrollLeft || '0');
		
		document.body.style.overflow = '';
		document.body.style.position = '';
		document.body.style.width = '';
		document.body.style.height = '';
		
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
			
			// Variable typing speed based on character type
			let typeDelay;
			if (text[i] === ' ') {
				typeDelay = Math.floor(Math.random() * 10) + 5; // Faster for spaces
			} else if (/[{}();,.]/.test(text[i])) {
				typeDelay = Math.floor(Math.random() * 20) + 20; // Slower for punctuation
			} else {
				typeDelay = Math.floor(
					Math.random() * (config.typingSpeed.max - config.typingSpeed.min) + 
					config.typingSpeed.min
				);
			}
			
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
			
			if (originalLine.length === 0) return;
			
			const glitchLine = originalLine
				.split('')
				.map(char => {
					if (Math.random() > 0.92) {
						return randomChar();
					} else if (Math.random() > 0.95) {
						return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
					}
					return char;
				})
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
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/~`';
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
			
			// Dynamic progress increment based on line content
			let increment = config.progressIncrement;
			if (loadingStages[i].includes('func main()')) increment *= 2;
			if (loadingStages[i].includes('fmt.Println')) increment *= 1.5;
			if (loadingStages[i].includes('//')) increment *= 0.8;
			
			progress += increment;
			
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
<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm transition-opacity duration-500">
	<div class="w-full max-w-2xl p-6 bg-transparent">
		<!-- Terminal Window -->
		<div class="bg-gray-900 p-1 rounded-lg border border-cyan-500/30 shadow-2xl relative overflow-hidden terminal-glow">
			<!-- Terminal Header -->
			<div class="bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-700">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-2">
						<div class="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
						<div class="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
						<div class="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
					</div>
					<div class="text-cyan-400 text-sm font-mono font-bold tracking-wider">
						🔧 GO COMPILER v1.21.0
					</div>
					<div class="text-gray-400 text-sm font-mono">
						{loadingPercent}%
					</div>
				</div>
			</div>
			
			<!-- System Metrics Bar -->
			<div class="bg-gray-800 px-4 py-2 border-b border-gray-700">
				<div class="flex justify-between items-center text-xs font-mono">
					<div class="flex space-x-4">
						<span class="text-green-400">CPU: {Math.round(cpuUsage)}%</span>
						<span class="text-blue-400">MEM: {Math.round(memoryUsage)}%</span>
						<span class="text-yellow-400">PID: 1337</span>
					</div>
					<div class="text-cyan-300 font-bold tracking-wide pulse-text">
						{systemStatus}
					</div>
				</div>
			</div>
			
			<!-- Progress Bar -->
			<div class="px-4 py-2 bg-gray-800 border-b border-gray-700">
				<div class="h-2 w-full bg-gray-700 rounded-full overflow-hidden relative">
					<div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 rounded-full glow-effect relative overflow-hidden" 
						 style="width: {loadingPercent}%">
						<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
									transform -skew-x-12 animate-shimmer"></div>
					</div>
				</div>
			</div>
			
			<!-- Terminal Content -->
			<div class="bg-black p-4 rounded-b-lg">
				<div class="relative">
					<pre class="font-mono text-green-400 text-sm whitespace-pre-wrap break-words 
							   min-h-[300px] max-h-[400px] overflow-y-auto terminal-content 
							   leading-relaxed selection:bg-cyan-500/30">{#each displayedLines as line, index}<span class="line-number text-gray-600 mr-4 select-none">{String(index + 1).padStart(2, '0')}</span><span class="code-line">{line}</span>
{/each}{#if typingInProgress}<span class="line-number text-gray-600 mr-4 select-none">{String(displayedLines.length + 1).padStart(2, '0')}</span><span class="code-line">{displayingText}</span>{/if}{#if showCursor}<span class="cursor text-green-400">█</span>{/if}</pre>
				</div>
			</div>
			
			<!-- Status Footer -->
			<div class="bg-gray-800 px-4 py-3 rounded-b-lg flex justify-between items-center text-xs font-mono border-t border-gray-700">
				<div class="flex space-x-6">
					<div class="text-gray-400">
						Line: <span class="text-cyan-400">{currentLineIndex + 1}/{loadingStages.length}</span>
					</div>
					<div class="text-gray-400">
						Char: <span class="text-green-400">{currentCharIndex}</span>
					</div>
				</div>
				<div class="flex items-center space-x-2">
					<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
					<span class="text-green-400 font-bold">
						{loadingPercent < 100 ? 'COMPILING' : 'BUILD SUCCESS'}
					</span>
				</div>
			</div>
		</div>
		
		<!-- Build Info -->
		<div class="mt-4 text-center text-gray-400 text-sm font-mono">
			<div class="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
				<div>🏗️ Building Uthman Dev Portfolio</div>
				<div class="text-xs mt-1 text-gray-500">
					go build -ldflags="-s -w" -o portfolio ./cmd/server
				</div>
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