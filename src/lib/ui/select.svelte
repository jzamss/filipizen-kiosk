<script>
	export let caption = '';
	export let expr = '';
	export let value = undefined;
	export let options = [];
	let clazz = '';
	export { clazz as class };
</script>

<div class="relative">
	<select
		bind:value
		class="block appearance-none w-full text-3xl bg-gray-200 border-2 border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
		id="year-bill"
	>
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
	<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		<svg class="fill-current h-8 w-8" viewBox="0 0 20 20"
			><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg
		>
	</div>
</div>
