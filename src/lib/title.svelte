<script>
	export let module = 'Select Transaction';
	export let title ='';
	let dt = 'March 7, 2022';
	let time = '1:40 PM';
	
</script>

<div class="h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <h1 class="text-5xl font-bold text-white text-center pt-3 pb-3">{title}</h1>
</div>
<div class="flex flex-row mt-20 mb-20">
	<div class="w-3/4">
		<h2 class="text-3xl font-bold px-20 py-1">{module}</h2>
	</div>
	<div class="w-1/4 mr-20">
        <div class="float-right text-2xl p-30">
            <p>{dt}</p>
		    <p>{time}</p>
        </div>
	</div>
</div>
