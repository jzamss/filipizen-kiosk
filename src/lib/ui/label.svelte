<script>
	export let caption = '';
	export let value = '';
	let clazz = '';
	export { clazz as class };
</script>

<div class="flex {clazz} ">
	<div class="w-4/12">{caption} </div>:
	<div class="ml-10">{value}</div>
</div>
