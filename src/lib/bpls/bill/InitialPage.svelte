<script>
	import { page } from '$app/stores';
	import Header from '$lib/header.svelte';
	import Input from '$lib/ui/input.svelte';
	import Nav from '$lib/nav.svelte';
	import Title from '$lib/title.svelte';


	$: console.log('page', $page);
</script>



<Title module="Initial Information" title='Business Billing'/>


<div class='px-32'>
	<Input 
		name="name"
		placeholder="Enter BIN or App No" 
		class="text-5xl bg-white-200 font-bold uppercase" />
</div>


<br />
<a href="/bpls/pay/app" alt="Application Information">
	<div class="m-auto h-20 text-center bg-white bg-opacity-25 w-1/4 rounded-lg shadow-xl pt-1 border-slate-400 flex border">
		<img src="/static/icons/back.png" alt="menu" class="h-12 pr-20  mt-3 rotate-180"/>
		<p class="pt-5 font-bold text-xl">Next</p>
	</div> 
</a>
<Nav />


<footer class="mb-20 mt-20">

</footer>

