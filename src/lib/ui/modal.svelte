<script>
	import { createEventDispatcher } from 'svelte';

	export let open = false;

	const dispatch = createEventDispatcher();

	const cancelHandler = () => {
        open = false;
		dispatch('cancel');
	};
</script>

<div id="background" style="--display: {open ? 'block' : 'none'};" on:click={cancelHandler} />
<div id="modal" style="--display: {open ? 'block' : 'none'};">
	<slot />
</div>

<style>
	#background {
		display: var(--display);
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: gray;
		opacity: 0.5;
		text-align: center;
	}

	#modal {
		display: var(--display);
		position: fixed;
		z-index: 2;
		top: 50%;
		left: 50%;
		height: 500px;
		width: 600px;
		transform: translate(-50%, -50%);
		background: #fff;
		filter: drop-shadow(0 0 20px #333);
	}
	#modal h2 {
		border-top: 2px solid black;
	}
	#modal button {
		margin: auto;
	}
	#modal span {
		text-align: center;
	}
</style>
