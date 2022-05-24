<script>
	import '../app.css';
	import 'svelte';
	import Header from '$lib/header-master.svelte';
	import Footer from '$lib/footer-master.svelte';
</script>

<div class="mx-auto bg-cyan-500">
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</div>
