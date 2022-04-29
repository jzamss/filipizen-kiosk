<script>
	export let error = null;
</script>

{#if error}
	<p class="text-red-500 text-center">{error}</p>
{/if}
