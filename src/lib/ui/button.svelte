<script>
	export let caption;
	let clazz;
	export { clazz as class };
</script>

<button
	class={`bg-blue-500 text-white px-10 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-500 ${
		clazz || ''
	} `}>{caption}</button
>
