<script>
	export let name;
	export let value = '';
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

<div class="Input">
	<slot>
		<input
		type="text"
		bind:value
		on:focus={activate}
		on:blur={deactivate}
		{placeholder}
		class="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		/>
	</slot>
</div>
