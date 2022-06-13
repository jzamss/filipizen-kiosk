<script>
	export let module = 'Republica de Filipinas';
	let tg1 = 'CIUDAD DE ZAMBOANGA';
	let tg2 = 'www.zamboangacity.gov.ph';

	import { onMount, onDestroy } from 'svelte';
	import { dateFormat, timeFormat } from './helper.js';

	let currentDate = new Date();
	$: dt = dateFormat(currentDate);
	$: time = timeFormat(currentDate);
 
	let intervalId = null;
 
	onMount(() => {
		intervalId = setInterval(() => {
			currentDate = new Date();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="px-14 flex flex-row pb-5 border-b-4 border-b-sky-700 DontPrint">
	<slot name="header-master">
		<div class="mt-10 w-20">
			<div>
				<a href="/" alt="LGU Logo"
				><img src="/static/lgu-logo.png" alt="LGU Logo" class=" float-right" /></a>	
			</div>
		</div>
		<div class="mt-8 ml-3 w-8/12">
			<h2 class="text-1xl font-bold drop-shadow-2xl ">{module}</h2>
				<p class="text-2xl subHeader font-bold drop-shadow-lg">{tg1}</p>
				<p class="text-1xl subHeader font-bold drop-shadow-lg">{tg2}</p>
		</div>
		<div class="time pt-13">
			<p class="text-3xl float-right mt-10 font-semibold">{time}</p>
			<p class="text-2xl pl-12">{dt}</p>
		</div>
	</slot>
</div>
