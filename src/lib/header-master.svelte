<script>
	export let module = 'Welcome,';
    let tg1 = 'Experience ease of doing';
	let tg2 = 'business with the Goverment';
	let dt = 'March 7, 2022';
	let time = '1:40 PM';
</script>



<div class="flex flex-row mb-20">
	<slot name="header-master">
		<div class="w-3/4">
			<div class="m-10">
				<h2 class="text-7xl font-bold ">{module}</h2>
				<p class="text-2xl">{tg1}</p>
				<p class="text-2xl">{tg2}</p>
			</div>
			<div class="pl-10 mt-5">
				<div class="text-2xl p-30">
					<p>{dt}</p>
					<p>{time}</p>
				</div>
			</div>
		</div>
		<div class="mt-10 w-1/4" >
			<a href="/" alt="LGU Logo"><img src="/static/lgu-logo.png" alt="LGU Logo" class=" float-right mr-20"/></a>
		</div>
	</slot>
</div>
