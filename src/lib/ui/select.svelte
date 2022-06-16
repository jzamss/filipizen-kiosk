<script>
	export let caption = '';
	export let expr = '';
	export let value = undefined;
	export let options = [];
	let clazz = '';
	export { clazz as class };
</script>

<div class="flex {clazz} ">
	<div class="w-4/12">{caption}</div>
	:
	<select bind:value>
		{#each options as option}
			<option value={option}>
				{typeof expr === 'function'
					? expr(option)
					: typeof option === 'object'
					? option(expr)
					: option}
			</option>
		{/each}
	</select>
</div>
