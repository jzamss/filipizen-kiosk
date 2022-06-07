<script>
	import '../app.css';
	import 'svelte';
	import 'tw-elements';
	import Header from '$lib/header-master.svelte';
	import Footer from '$lib/footer-master.svelte';
</script>

<div class="mx-auto bg-white h-screen">
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</div>
