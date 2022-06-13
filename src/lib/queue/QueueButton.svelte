<script>
	export let href = null;
	export let title;
	export let icon;

	import Button from '$lib/ui/button.svelte';
</script>

<div class="mb-5 mx-10">
{#if href}
	<Button {href} alt={title} caption="{title}" class="py-10 modern m-auto w-full"/>
{:else}
	<Button caption="{title}" on:click class="modern w-full py-10" />
{/if}
</div>