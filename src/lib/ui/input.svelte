<script>
	export let name;
	export let value = null;
	export let placeholder = '';
	export let registerKeyListener;

	let active = false;

	const activate = () => {
		active = true;
		registerKeyListener({ name, active }, this);
	};

	const deactivate = () => {
		active = false;
		registerKeyListener({ name, active }, this);
	};
</script>

<input
	type="text"
	bind:value
	on:focus={activate}
	on:blur={deactivate}
	{placeholder}
	class="text-lg px-2 py-1 border rounded shadow mt-2 focus:bg-yellow-100 caret-transparent"
/>
