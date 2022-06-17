<script>
	import Button from '$lib/ui/button.svelte';
	export let queueHref = '/queue';
	export let moduleHref;
</script>

<div class="flex flex-col items-center my-20 max-w-lg mx-auto">
	<Button href={queueHref} caption="Generate a Queue Priority Number?" class="w-full mb-6" />
	<Button href={moduleHref} caption="No, Thanks" class="w-full" />
</div>
