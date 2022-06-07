<script>
	export let href = null;
	export let title;
	export let icon;

	import Button from '$lib/ui/button.svelte';
</script>

{#if href}
	<Button {href} alt={title} caption="{title}" class="w-1/2 h-20 m-auto bg-red-900 "/>
	
{:else}
	<Button caption="{title}" on:click class="" />
{/if}
