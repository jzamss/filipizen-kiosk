<script>
	export let module = '';
</script>

<div class="flex flex-row">
	<slot name="header">
		<div class="w-3/4">
			<div class="m-20">
				<h2 class="text-5xl font-bold px-20 py-1">{module}</h2>
			</div>
		</div>
		<div class="mt-10 w-1/4" >
			<a href="/" alt="LGU Logo"><img src="/static/lgu-logo.png" alt="LGU Logo" class=" float-right mr-20"/></a>
		</div>
	</slot>
</div>
