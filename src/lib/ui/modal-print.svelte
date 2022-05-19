<script>
	import { afterUpdate, onDestroy } from 'svelte';

	export let open = false;
	export let afterPrint;

	let timeoutId = null;

	afterUpdate(() => {
		if (open) {
			timeoutId = setTimeout(() => {
				window.print();
				afterPrint();
			}, 500);
		}
	});

	onDestroy(() => {
		clearTimeout(timeoutId);
	});
</script>

<div id="background" style="--display: {open ? 'block' : 'none'};" on:click={afterPrint} />
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
		height: 420px;
		width: 600px;
		transform: translate(-50%, -50%);
		background: #fff;
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
