<script>
	import Header from '$lib/header.svelte';
	import Keyboard from '$lib/keyboard/keyboard.svelte';
	import Input from '$lib/ui/input.svelte';

	let registerKeyListener = null;
	let handleKey = null;
	let entity = { name: '', address: '' };
</script>

<form>
<Input bind:value={entity.name} name="name" {registerKeyListener} placeholder="Enter name" class="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-200 rounded mb-2" />

    <input aria-label="Enter your email address" 
           type="text" placeholder="Email address" 
           class="text-sm text-gray-base w-full 
                  mr-3 py-5 px-4 h-2 border 
                  border-gray-200 rounded mb-2" />
    <input aria-label="Enter your password" 
           type="password" placeholder="Password"
           class="text-sm text-gray-base w-full mr-3 
                  py-5 px-4 h-2 border border-gray-200 
                  rounded mb-2" />

    <button type="submit"
            class="bg-green-400 w-full mt-4">
        Login
    </button>
</form>
<div>
	<slot name="keyboard">
		<Keyboard
			bind:registerKeyListener
			bind:handleKey
			on:keydown={(event) => (entity = handleKey(entity, event))}
			on:return={() => console.log('return pressed')}
		/>
	</slot>
</div>
