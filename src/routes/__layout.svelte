<script>
	import '../app.css';
	import 'svelte';
	import Header from '$lib/header-master.svelte';
	import Footer from '$lib/footer-master.svelte';
</script>

<div class="mx-auto bg-kiosk-bg">
	<div class="flex flex-col justify-between">
		<Header />
		<slot />
		<Footer />
	</div>
</div>
