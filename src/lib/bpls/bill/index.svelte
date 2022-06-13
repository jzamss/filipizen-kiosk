<script>
	import { onMount, tick } from 'svelte';
	import bill from '$lib/stores/bplsbill';
	import ActionBar from '$lib/ui/action-bar.svelte';
	import Title from '$lib/title.svelte';
	import Subtitle from '$lib/ui/subtitle.svelte';
	import Panel from '$lib/ui/panel.svelte';
	import Input from '$lib/ui/input.svelte';
	import Button from '$lib/ui/button.svelte';
	import Label from '$lib/ui/label.svelte';
	import Error from '$lib/ui/error.svelte';
	import ModalPrint from '$lib/ui/modal-print.svelte';
	import { currencyFormat, isEmpty } from '$lib/helper.js';

	let inputRef = null;
	let printBill = false;

	$: mode = $bill.mode;
	$: error = $bill.error;
	$: processing = $bill.processing;
	$: entity = $bill.entity;

	const getBilling = () => {
		bill.getBilling($bill.entity.refno);
		inputRef.focus();
	};

	const moveBack = async () => {
		bill.setMode('init');
		await tick();
		inputRef.focus();
	};

	onMount(() => {
		bill.init();
		if (inputRef) inputRef.focus();
	});
</script>

<div class="mx-16">
	{#if mode === 'init'}
		<Title module="Business Billing" />
		<div class="my-40 mx-20">
			<Input
				bind:this={inputRef}
				disabled={processing}
				bind:value={entity.refno}
				placeholder="Enter BIN"
			/>
			<div class="h-20">
				{#if error}
					<Error {error} />
				{/if}
			</div>
		</div>
		<ActionBar>
			<div class="w-9/12">
				<Button
					on:click={moveBack}
					disabled={processing}
					caption="Cancel"
					class="modern w-48"
					leftIcon="/static/icons/cancel.svg"
				/>
			</div>
			<div>
				<Button
					on:click={getBilling}
					disabled={isEmpty(entity.refno)}
					{processing}
					caption="Next"
					class="modern w-48"
					rightIcon="/static/icons/next.svg"
				/>
			</div>
		</ActionBar>
	{/if}

	{#if mode === 'bill'}
		<Panel>
			<Subtitle title="Business Information" class="my-4" />
			<div class="text-2xl">
				<Label caption="BIN" value={entity.bin} />
				<Label caption="Trade Name" value={entity.tradename} />
				<Label caption="Address" value={entity.address} />
				<Label caption="Business Owner" value={entity.ownername} />
				<Label caption="Application No." value={entity.appno} />
				<Label caption="Amount" value={currencyFormat(entity.amount)} />
			</div>
		</Panel>
		<ActionBar>
			<div class="w-9/12">
				<Button on:click={moveBack} caption="Back" leftIcon="/static/icons/back.svg" />
			</div>
			<div>
				<Button
					on:click={() => (printBill = true)}
					caption="Pay to Cashier"
					rightIcon="/static/icons/print.svg"
					class="float-rights w-48"
				/>
			</div>
		</ActionBar>
	{/if}

	{#if printBill}
		<ModalPrint open={printBill} afterPrint={() => (printBill = false)}>
			<h2 class="text-center text-4xl pt-5 pb-2 text-bold">BUSINESS BILLING</h2>
			<h2 class="text-center text-2xl pt-2">Amount</h2>
			<h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5 mt-10">
				{entity.amount}
			</h1>
			<p class="text-center text-2xl">{entity.barcode}</p>
		</ModalPrint>
	{/if}
</div>
