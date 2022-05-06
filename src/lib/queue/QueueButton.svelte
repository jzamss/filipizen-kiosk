<script>
	export let href = null;
	export let title;
	export let icon;

	import Button from '$lib/ui/button.svelte';
</script>

{#if href}
	<Button {href} alt={title} caption="{title}" rightIcon="/static/icons/{title}.svg"/>
{:else}
	<button class="m-auto" on:click>
		<div>
			<img src="/static/icons/{title}.svg" alt={title} class="w-40 m-auto" />	
			<p class="text-2xl font-bold text-center pt-5">{title}</p>
		</div>
	</button>
{/if}
