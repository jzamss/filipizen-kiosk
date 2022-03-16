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

<div class="customInput">
	<slot>
		<input
		type="text"
		bind:value
		on:focus={activate}
		on:blur={deactivate}
		{placeholder}
		class="text-4xl h-20 w-10/12 ml-20 pb-2  px-2 border-2 border-black rounded shadow focus:bg-yellow-100 caret-transparent"
	/>
	</slot>
</div>
