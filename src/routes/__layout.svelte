<script>
	import '../app.css';
	import 'svelte';
	import Header from '$lib/header-master.svelte';
	import Footer from '$lib/footer-master.svelte';
</script>

<div class="mx-auto bg-kiosk-bg">
<<<<<<< HEAD
	<div class="flex flex-col justify-between">
=======
	<div>
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c
		<Header />
		<slot />
		<Footer />
	</div>
</div>
