<script>
	export let module = 'Welcome,';
	let tg1 = 'Experience ease of doing';
	let tg2 = 'business with the Goverment';
	let dt = 'March 7, 2022';
	let time = '1:40 PM';
</script>

<div class="px-14 flex flex-row mb-10 bg-white pb-10">
	<slot name="header-master">
		<div class="mt-10 w-3/4">
			<div>
				<h2 class="text-7xl font-bold ">{module}</h2>
				<p class="text-2xl subHeader">{tg1}</p>
				<p class="text-2xl subHeader">{tg2}</p>
			</div>
		</div>
		<div class="mt-10 w-1/4">
			<a href="/" alt="LGU Logo"
				><img src="/static/lgu-logo.png" alt="LGU Logo" class=" float-right" /></a
			>
		</div>
	</slot>
</div>
