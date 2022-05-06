<script>
	export let module = 'Welcome,';
	let tg1 = 'Experience ease of doing';
	let tg2 = 'business with the Goverment';
	let dt = 'March 7, 2022';
	let time = '1:40 PM';
</script>

<<<<<<< HEAD
<div class="px-14 flex flex-row mb-20">
=======
<div class="flex flex-row mb-20 px-14">
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c
	<slot name="header-master">
		<div class="mt-10 w-3/4">
			<div>
				<h2 class="text-7xl font-bold ">{module}</h2>
<<<<<<< HEAD
				<p class="text-4xl">{tg1}</p>
				<p class="text-4xl">{tg2}</p>
=======
				<p class="text-2xl">{tg1}</p>
				<p class="text-2xl">{tg2}</p>
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c
			</div>
		</div>
		<div class="mt-10 w-1/4">
			<a href="/" alt="LGU Logo"
				><img src="/static/lgu-logo.png" alt="LGU Logo" class=" float-right" /></a
			>
		</div>
	</slot>
</div>
