<script>
	import '../app.css';
	import 'svelte';
	import Header from '$lib/header-master.svelte';
</script>

<div class="px-14 mx-auto bg-kiosk-bg">
	<div class="pt-6 flex flex-col h-screen justify-between">
		<Header />
		<slot />
	</div>
</div>
