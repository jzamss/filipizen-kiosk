<script>
	import Header from '$lib/header-master.svelte';
	import Button from '$lib/ui/button.svelte';
	import Title from '$lib/title.svelte';
</script>

<Header/>
<div class="h-20 bg-blue-800">
    <h1 class="text-5xl font-bold text-white text-center pt-5">Community Tax Certificate</h1>
</div>
<Title module="Select type of Cedula"/>


<div class="grid grid-cols-3 grid-rows-3 m-20">
	<a href="/queue" alt="Queueing System">
		<div class="h-60 text-center bg-white bg-opacity-25 w-11/12 rounded-lg shadow-xl pt-10 border-slate-400  border">
			<img src="/static/icons/queue.svg" alt="queue icon" class="w-1/2 m-auto"/>
			<p class="pt-4 text-base font-bold">Individual</p>
		</div> 
	</a>
	<a href="/rptbill" alt="Real Property Tax Billing">
		<div class="h-60 text-center bg-white bg-opacity-25 w-11/12 rounded-lg shadow-xl pt-10 border-slate-400  border">
			<img src="/static/icons/rpt.svg" alt="rptbill icon" class="w-1/2 m-auto"/>
			<p class="pt-4 text-base font-bold">Corporate</p>
		</div> 
	</a>
</div>
