<script>
	import Header from '$lib/header.svelte';
	import Keyboard from '$lib/keyboard/keyboard.svelte';
	import Input from '$lib/ui/input.svelte';

	let registerKeyListener = null;
	let handleKey = null;
	let entity = { name: '', address: '' };
</script>

<Header module="Real Property Tax Billing" />

<h1 class="text-center p-4">Filipizen Kiosk</h1>
<div class="flex flex-col items-center">
	<a href="/queue" alt="Queueing System">Queue</a>
	<a href="/rptbill" alt="Real Property Tax Billing">Real Property Tax Billing</a>
	<a href="/ctc" alt="Community Tax Certification">Community Tax Certificate</a>
</div>

<Input bind:value={entity.name} name="name" {registerKeyListener} placeholder="Enter name" />
<Input
	bind:value={entity.address}
	name="address"
	{registerKeyListener}
	placeholder="Enter Address"
/>

<Keyboard
	bind:registerKeyListener
	bind:handleKey
	on:keydown={(event) => (entity = handleKey(entity, event))}
	on:return={() => console.log('return pressed')}
/>
