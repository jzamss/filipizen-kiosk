<script>
	export let module = 'CEDULA';
	let dt = 'March 7, 2022';
	let time = '1:40 PM';
</script>

<div class="flex flex-row justify-between">
	<div class="flex flex-col items-center">
		<h2 class="text-2xl font-bold border bg-blue-400 text-white px-20 py-1">{module}</h2>
		<p class="text-sm">{dt}</p>
		<p class="text-sm">{time}</p>
	</div>
	<div class="w-20">
		<img src="/static/lgu-logo.png" alt="LGU Logo" />
	</div>
</div>
