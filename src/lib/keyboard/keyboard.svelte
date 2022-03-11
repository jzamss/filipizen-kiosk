<script>
	import { createEventDispatcher } from 'svelte';

	import standard from '$lib/keyboard/layouts/standard.js';
	import backspaceSVG from '$lib/keyboard/svg/backspace.js';
	import enterSVG from '$lib/keyboard/svg/enter.js';

	export let custom;

	let activeField = '';

	export const registerKeyListener = ({ name, active }) => {
		activeField = active ? name : null;
	};

	let page = 0;
	let shifted = false;
	let active = undefined;

	const dispatch = createEventDispatcher();
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const swaps = {
		Page0: 'abc',
		Page1: '?123',
		Space: ' ',
		Shift: 'abc',
		Enter: 'Return',
		Backspace: 'Back'
		// Enter: enterSVG,
		// Backspace: backspaceSVG
	};

	const unique = (arr) => [...new Set(arr)];

	const onKeyStart = (event, value) => {
		event.preventDefault();
		active = value;
		if (value.includes('Page')) {
			page = +value.substr(-1);
		} else if (value === 'Shift') {
			shifted = !shifted;
		} else {
			let output = value;
			if (shifted && alphabet.includes(value)) output = value.toUpperCase();
			dispatch('keydown', { key: output, activeField });
		}
		event.stopPropagation();
		return false;
	};

	const onKeyEnd = (value) => {
		setTimeout(() => {
			if (value === active) active = undefined;
		}, 50);
	};

	const dispatchOnReturnEvent = () => {
		dispatch('return');
	};

	export const handleKey = (entity, event) => {
		const { key, activeField } = event.detail;
		if (!activeField) return entity;
		switch (key.toLowerCase()) {
			case 'enter':
				dispatchOnReturnEvent();
				break;
			case 'backspace':
				entity[activeField] = entity[activeField].slice(0, entity[activeField].length - 1);
				break;
			default:
				entity[activeField] += key;
		}
		return entity;
	};

	$: rawData = custom || standard;
	$: data = rawData.map((d) => {
		let display = d.display;
		const s = swaps[d.value];
		const shouldSwap = s && !d.noSwap;
		if (shouldSwap) display = s;
		if (!display) display = shifted ? d.value.toUpperCase() : d.value;
		if (d.value === 'Shift') display = shifted ? s : s.toUpperCase();
		return {
			...d,
			display
		};
	});

	$: page0 = data.filter((d) => !d.page);
	$: page1 = data.filter((d) => d.page);

	$: rows0 = unique(page0.map((d) => d.row));
	$: rows0.sort((a, b) => a - b);

	$: rows1 = unique(page1.map((d) => d.row));
	$: rows1.sort((a, b) => a - b);

	$: rowData0 = rows0.map((r) => page0.filter((k) => k.row === r));
	$: rowData1 = rows0.map((r) => page1.filter((k) => k.row === r));
	$: rowData = [rowData0, rowData1];
</script>

<div class="kiosk-keyboard">
	{#each rowData as row, i}
		<div class="hidden" class:visible={i === page}>
			{#each row as keys}
				<div class="flex justify-center touch-manipulation">
					{#each keys as { value, display }}
						<button
							class="key--{value}"
							class:single={value.length === 1}
							class:active={value === active}
							on:touchstart={(e) => onKeyStart(e, value)}
							on:mousedown={(e) => onKeyStart(e, value)}
							on:touchend={() => onKeyEnd(value)}
							on:mouseup={() => onKeyEnd(value)}
						>
							{#if display.includes('<svg')}
								{@html display}
							{:else}{display}{/if}
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	button {
		appearance: none;
		display: inline-block;
		text-align: center;
		vertical-align: baseline;
		cursor: pointer;
		line-height: 1;
		transform-origin: 50% 50%;
		user-select: none;
		background: #eee;
		color: #111;
		border: none;
		border-radius: 2px;
		box-shadow: none;
		flex: 1;
		font-family: sans-serif;
		font-size: 20px;
		font-weight: normal;
		height: 3.5rem;
		margin: 0.125rem;
		opacity: 1;
		text-transform: none;
		-webkit-tap-highlight-color: transparent;
	}

	button.single {
		min-width: 2rem;
	}

	button:active {
		background: #ccc;
		border: none;
		box-shadow: none;
		color: #111;
		opacity: 1;
		transform: none;
	}

	button.key--Space {
		width: 20%;
		flex: 3;
	}

	button.key--Page0,
	button.key--Page1,
	button.key--Shift,
	button.key--Backspace,
	button.key--Enter {
		flex: 1.5;
	}

	.visible {
		display: block;
	}

	:global(.kiosk-keyboard svg) {
		stroke-width: var(--stroke-width, 3px);
	}
</style>
