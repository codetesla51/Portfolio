<!-- src/lib/components/Loader.svelte -->
<script>
	import { onMount } from 'svelte';

	const loadingStages = [
		'// Loading Uthman Dev 🚀',
		'const developer = {',
		'  name: "Uthman Dev",',
		'  role: "Full Stack Developer"',
		'};',
		'',
		'// Initializing Projects',
		'await projects.load();',
		'',
		'// Preparing Digital Workspace',
		'console.log("Ready to innovate!");'
	];

	let displayedLines = $state([]);
	let currentLineIndex = $state(0);
	let showCursor = $state(true);

	onMount(() => {
		const cursorTimer = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

		const lineTypingTimer = setInterval(() => {
			if (currentLineIndex < loadingStages.length) {
				displayedLines = [
					...displayedLines, 
					loadingStages[currentLineIndex]
				];
				currentLineIndex++;
			} else {
				clearInterval(lineTypingTimer);
			}
		}, 500);

		return () => {
			clearInterval(cursorTimer);
			clearInterval(lineTypingTimer);
		};
	});
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]">
	<div class="w-full max-w-md p-4 bg-transparent">
		<div class="bg-[#1a1a1a] p-4 rounded-lg border border-[#2ecc71]/20 shadow-lg">
			<div class="flex items-center mb-2 space-x-2">
				<div class="w-3 h-3 bg-red-500 rounded-full"></div>
				<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
				<div class="w-3 h-3 bg-green-500 rounded-full"></div>
			</div>
			<pre class="font-mono text-[#2ecc71] text-sm whitespace-pre-wrap break-words min-h-[200px]">{#each displayedLines as line}{line}
{/each}{#if showCursor && displayedLines.length < loadingStages.length}<span class="animate-pulse text-[#2ecc71]">▋</span>{/if}</pre>
		</div>
	</div>
</div>

<style>
@keyframes pulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0; }
}

.animate-pulse {
	animation: pulse 0.7s infinite;
}
</style>