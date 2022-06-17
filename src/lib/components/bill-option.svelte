<!-- src/Modal.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
	import { range } from '$lib/helper.js';
	import Select from '$lib/ui/select.svelte';

	const dispatch = createEventDispatcher();

	export let open;
	export let fromqtr = undefined;
	export let fromyear = undefined;
	export let toyear = undefined;
	export let billtoyear = undefined || toyear;
	export let billtoqtr = 4;

	let years = [];
	let qtrs = [1, 2, 3, 4];

	$: if (fromyear !== undefined && toyear !== undefined) {
		years = range(fromyear, toyear);
	}

	$: if (billtoyear === fromyear) {
		qtrs = range(fromqtr, 4);
	} else {
		qtrs = range(1, 4);
		billtoqtr = 4;
	}

	function onSubmit() {
		dispatch('submit', { billtoyear, billtoqtr });
	}

	function onCancel() {
		dispatch('cancel');
	}
</script>

<div id="background" style="--display: {open ? 'block' : 'none'};" on:click={onCancel} />
<div id="modal" style="--display: {open ? 'block' : 'none'};">
	<h1 class="text-center text-4xl pt-5 pb-5">Pay Options</h1>
	<h2 />
	<br />
	{#if years.length > 0}
		<div class="w-ful px-20">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
				for="year-bill"
			>
				Year Bill
			</label>
			<Select bind:value={billtoyear} options={years} />
		</div>
		<br />
	{/if}
	<div class="w-ful px-20">
		<label
			class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
			for="year-bill"
		>
			Quarter to Bill
		</label>
		<Select bind:value={billtoqtr} options={qtrs} />
	</div>
	<br />
	<hr />
	<br />
	<div class="m-auto items-center flex">
		<button
			alt="Queueing System"
			class="bg-gray-400 h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border"
			on:click={onCancel}
		>
			<div class="">
				<p class="pt-5 font-bold text-xl">Cancel</p>
			</div>
		</button>
		<button
			alt="Queueing System"
			class="bg-gray-400 h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border"
			on:click={onSubmit}
		>
			<img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180" />
			<p class="pt-5 font-bold text-xl">OK</p>
		</button>
	</div>
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
		width: 700px;
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
