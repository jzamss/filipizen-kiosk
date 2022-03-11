<script>
	import Header from '$lib/header.svelte';
	import Keyboard from '$lib/keyboard/keyboard.svelte';
	import Input from '$lib/ui/input.svelte';

	let registerKeyListener = null;
	let handleKey = null;
	let entity = { name: '', address: '' };
</script>

<Header module="Real Property Tax Billing" />

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
