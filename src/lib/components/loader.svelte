<script>
	import { onMount, tick } from 'svelte';
	import { writable, derived } from 'svelte/store';
	
	const loadingStages = [
		'// Booting Uthman Dev Environment 🚀',
		'const developer = {',
		'  name: "Uthman Dev",',
		'  role: "Full Stack Developer",',
		'  skills: ["JavaScript", "React", "Svelte", "Node.js"],',
		'  status: "Available for projects"',
		'};',
		'',
		'// Initializing Portfolio 📂',
		'await projects.load({ featured: true });',
		'',
		'// Establishing Network Connections 🌐',
		'const connections = await api.connect();',
		'',
		'// Loading Experience Module 💼',
		'import { experience } from "./career.js";',
		'',
		'// Preparing Digital Workspace ⚡',
		'system.optimize();',
		'console.log("Ready to innovate!");'
	];
	
	// Configuration options
	const config = {
		typingSpeed: { min: 20, max: 70 },     // Random speed per character
		linePause: { min: 300, max: 700 },     // Random pause between lines
		initialDelay: 300,                      // Delay before starting
		cursorBlinkSpeed: 500,                  // Cursor blink interval
		progressIncrement: 7                    // Progress bar increment per line
	};
	
	// State variables
	let displayedLines = [];
	let displayingText = '';
	let currentLineIndex = 0;
	let showCursor = true;
	let typingInProgress = false;
	let progress = 0;
	let loading = true;
	
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
		
		for (let i = 0; i < text.length; i++) {
			displayingText += text[i];
			const typeDelay = Math.floor(
				Math.random() * (config.typingSpeed.max - config.typingSpeed.min) + 
				config.typingSpeed.min
			);
			await new Promise(resolve => setTimeout(resolve, typeDelay));
		}
		
		displayedLines = [...displayedLines, displayingText];
		displayingText = '';
		typingInProgress = false;
	}
	
	function applyRandomGlitch() {
		if (Math.random() > 0.8 && displayedLines.length > 0) {
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
			}, 150);
		}
	}
	
	function randomChar() {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/';
		return chars.charAt(Math.floor(Math.random() * chars.length));
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
		}, 800);
		
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
		}, 800);
		
		return () => {
			enableScroll();
			clearInterval(cursorTimer);
			clearInterval(glitchTimer);
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
				<div class="text-acc/70 text-xs font-ice">⚙️ SYSTEM BOOT</div>
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
@keyframes pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0; }
}

@keyframes blink-slow {
	0%, 100% { opacity: 0.8; }
	50% { opacity: 0.4; }
}

@keyframes glow {
	0%, 100% { box-shadow: 0 0 5px rgba(46, 204, 113, 0.7); }
	50% { box-shadow: 0 0 15px rgba(46, 204, 113, 0.9); }
}

@keyframes scanline {
	0% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(100%);
	}
}

.cursor {
	animation: pulse 0.7s infinite;
}

.blink-slow {
	animation: blink-slow 2s infinite;
}

.glow-effect {
	animation: glow 1.5s infinite;
}

/* Terminal styling */
.terminal-content {
	position: relative;
	text-shadow: 0 0 5px rgba(46, 204, 113, 0.5);
}

.terminal-content::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	background: linear-gradient(transparent 50%, rgba(20, 20, 20, 0.25) 50%);
	background-size: 100% 4px;
	pointer-events: none;
	z-index: 10;
}

.terminal-content::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	background: rgba(46, 204, 113, 0.05);
	pointer-events: none;
	animation: scanline 8s linear infinite;
	z-index: 11;
}
</style>