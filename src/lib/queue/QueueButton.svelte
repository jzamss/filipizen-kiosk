<script>
	export let href = null;
	export let title;
	export let icon;

	import Button from '$lib/ui/button.svelte';
</script>

{#if href}
	<Button {href} alt={title} caption="{title}" class="w-1/2 h-20 m-auto inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-1xl leading-tight uppercase rounded"/>
{:else}
	<Button caption="{title}" on:click class="w-1/2 h-20 m-auto inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-1xl leading-tight uppercase rounded" />
{/if}
