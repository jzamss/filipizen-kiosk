<script>
	export let caption = '';
	export let value = '';
	let clazz = '';
	export { clazz as class };
</script>

<div class="grid grid-cols-2 {clazz}">
	<p>{caption}</p>
	<p>{value}</p>
</div>
