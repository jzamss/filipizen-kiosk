<script>
	export let href = null;
	export let title;
	export let icon;
</script>

{#if href}
	<a {href} alt={title} class="m-auto">
		<div>	
			<p class="text-2xl font-bold text-center pt-5">{title}</p>
		</div>
	</a>
{:else}
	<button class="m-auto" on:click>
		<div>
			<img src="/static/icons/{title}.svg" alt={title} class="w-40 m-auto" />	
			<p class="text-2xl font-bold text-center pt-5">{title}</p>
		</div>
	</button>
{/if}
