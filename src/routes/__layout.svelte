<script>
	import '../app.css';
	import 'svelte'
	import Header from '$lib/header-master.svelte';

</script>
<div class="mx-auto bg-kiosk-bg">
	<div class="flex flex-col h-screen justify-between">
		<Header>
			<div slot="header">
			</div>
		</Header>
		<slot />
	</div>
</div>