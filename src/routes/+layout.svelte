<!-- src/routes/+layout.svelte -->
<script>
	import { onMount } from 'svelte';
	import Loader from '$lib/components/loader.svelte';
	import Cusor from "$lib/components/cusor.svelte";
import Nav from "$lib/components/nav.svelte";
import Footer from "$lib/components/footer.svelte";

	import "../app.css";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
	let { children } = $props();
	let isLoading = $state(true);

	onMount(() => {
		const loadingTimer = setTimeout(() => {
			isLoading = false;
		}, 4000);

		return () => {
			clearTimeout(loadingTimer);
		};
		AOS.init({
      duration: 800, 
      easing: 'ease-out-cubic', 
      once: false, 
      offset: 50
    });
	});
</script>

{#if isLoading}
	<Loader />
{/if}

{#if !isLoading}
<Nav/>

<Cusor/>
	{@render children()}
	<Footer/>

{/if}