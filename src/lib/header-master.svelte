<script>
	export let module = 'Welcome,';
    let tg1 = 'Experience ease of doing';
	let tg2 = 'business with the Goverment';
</script>

<div class="flex flex-row">
	<slot name="header-master">
		<div class="w-3/4">
			<div class="m-20">
				<h2 class="text-7xl font-bold ">{module}</h2>
				<p class="text-2xl">{tg1}</p>
				<p class="text-2xl">{tg2}</p>
			</div>
		</div>
		<div class="mt-10 w-1/4" >
			<a href="/" alt="LGU Logo"><img src="/static/lgu-logo.png" alt="LGU Logo" class=" float-right mr-20"/></a>
		</div>
	</slot>
</div>
