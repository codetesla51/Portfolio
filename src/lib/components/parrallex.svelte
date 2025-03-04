<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let parallaxContainer;
	let parallaxBg;

	onMount(() => {
		if (browser) {
			const handleScroll = () => {
				if (parallaxContainer && parallaxBg) {
					const scrollPosition = window.pageYOffset;
					const speed = 0.5; // Adjust this value to control parallax intensity

					// Calculate the vertical offset based on scroll position
					const yPos = scrollPosition * speed;

					// Apply the transform to create parallax effect
					parallaxBg.style.transform = `translateY(${yPos}px)`;
				}
			};

			// Add scroll event listener
			window.addEventListener('scroll', handleScroll);

			// Cleanup event listener on component destroy
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<div 
	bind:this={parallaxContainer} 
	class="relative w-full h-screen overflow-hidden"
>
	<!-- Parallax Background Layer -->
	<div 
		bind:this={parallaxBg}
		class="absolute inset-0 bg-gradient-to-b from-sec to-card 
				bg-cover bg-center z-0"
		style="background-image: url('/path/to/your/background-image.jpg')"
	></div>

	<!-- Content Layer -->
	<div class="relative z-10 flex items-center justify-center h-full">
		<div class="text-center text-text">
			<h2 class="text-4xl font-bold mb-4">My Projects</h2>
			<slot />
		</div>
	</div>
</div>

<style>
	/* Ensure smooth parallax effect */
	div {
		will-change: transform;
	}
</style>