<script>
	import Header from '$lib/header.svelte';
	import Keyboard from '$lib/keyboard/keyboard.svelte';
	import Input from '$lib/ui/input.svelte';
	import Nav from '$lib/nav.svelte';
	import Title from '$lib/title.svelte';

	let registerKeyListener = null;
	let handleKey = null;
	let entity = { name: '' };
</script>

<div class="h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <h1 class="text-5xl font-bold text-white text-center pt-3 pb-3">Real Property Tax Billing </h1>
</div>
<Title />

<div class='m-auto w-10/12'>
	<Input bind:value={entity.name} name="name" {registerKeyListener} placeholder="Enter TD Number" >
	</Input>
</div>


<br />
<a href="/rpt/pay/app" alt="menu">
	<div class="m-auto h-20 text-center bg-white bg-opacity-25 w-1/4 rounded-lg shadow-xl pt-1 border-slate-400 flex border">
		<img src="/static/icons/back.png" alt="menu" class="h-12 pr-20  mt-3 rotate-180"/>
		<p class="pt-5 font-bold text-xl">Next</p>
	</div> 
</a>
<Nav />


<footer class="mb-96 mt-20">
	<slot name="keyboard">
		<Keyboard
			bind:registerKeyListener
			bind:handleKey
			on:keydown={(event) => (entity = handleKey(entity, event))}
			on:return={() => console.log('return pressed')}
		/>
	</slot>
</footer>
