<script>
	import '../app.css';
	import 'svelte';
	import Header from '$lib/header-master.svelte';
	import Footer from '$lib/footer-master.svelte';
</script>

<div class="bg-white">
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</div>
