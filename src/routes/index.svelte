<script>
	import Header from '$lib/header-master.svelte';
	import Title from '$lib/title.svelte';
	import {fade} from 'svelte/transition'
</script>

<Header/>
<Title/>

<div class="grid grid-cols-3 grid-rows-3 m-20" >
	<a href="/queue" alt="Queueing System" transition:fade={{duration:500}}>
		<div class="h-60 text-center bg-white bg-opacity-25 w-11/12 rounded-lg shadow-xl pt-10 border-slate-400  border">
			<img src="/static/icons/queue.svg" alt="queue icon" class="w-1/2 m-auto"/>
			<p class="pt-4 text-base font-bold">Queue</p>
		</div> 
	</a>
	<a href="/rptbill" alt="Real Property Tax Billing">
		<div class="h-60 text-center bg-white bg-opacity-25 w-11/12 rounded-lg shadow-xl pt-10 border-slate-400  border">
			<img src="/static/icons/rpt.svg" alt="rptbill icon" class="w-1/2 m-auto"/>
			<p class="pt-4 text-base font-bold">Real Property Tax Billing</p>
		</div> 
	</a>
	<a href="/ctc" alt="Community Tax Certification">
		<div class="h-60 text-center bg-white bg-opacity-25 w-11/12 rounded-lg shadow-xl pt-10 border-slate-400  border">
			<img src="/static/icons/cedula.svg" alt="ctc icon" class="w-1/2 m-auto"/>
			<p class="pt-4 text-base font-bold">Community Tax Certificate</p>
		</div> 
	</a>
</div>
