<script>
	export let value;
	export let placeholder = '';
	let clazz = '';
	export { clazz as class };

	let inputRef;

	export const focus = () => {
		if (inputRef) inputRef.focus();
	};
</script>

<input
	bind:this={inputRef}
	bind:value
	type="text"
	{placeholder}
	class="
		text-5xl 
		text-center
		font-bold
		uppercase
		mb-4
		py-2 
		px-3 
		w-full 
		shadow 
		appearance-none 
		border-2 
		rounded 
		border-gray-600 
		focus:outline-none 
		focus:shadow-outline 
		bg-white-200
		{clazz}
	"
/>
