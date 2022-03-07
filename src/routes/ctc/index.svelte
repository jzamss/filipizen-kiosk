<script>
	import Header from '$lib/header.svelte';
	import Button from '$lib/ui/button.svelte';
</script>

<Header module="Community Tax Certificate" />

<div class="m-10 flex flex-col items-center">
	<h2 class="text-xl font-bold mb-4">Select CTC Type</h2>
	<Button caption="Individual" class="mb-2" />
	<Button caption="Corporate" />
</div>
