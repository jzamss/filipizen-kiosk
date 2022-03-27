<script>
	export let placeholder = '';
	let clazz = '';
	export {clazz as class}

</script>

<div class="Input">
	<slot>
		<input
		type="text"
		{placeholder}
		class="text-2xl shadow appearance-none border-2 border-black w-full py-2 px-3 focus:outline-none focus:shadow-outline {clazz}"
		/>
	</slot>
</div>
