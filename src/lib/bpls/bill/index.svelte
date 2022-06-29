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
	import GenerateQueueOption from '$lib/components/queue-option.svelte';
	import BillOption from '$lib/components/bill-option.svelte';
	import ModalPrint from '$lib/ui/modal-print.svelte';
	import { currencyFormat, isEmpty } from '$lib/helper.js';
	import Barcode from 'svelte-barcode';

	let inputRef = null;
	let printBill = false;
	let openBillOption = false;

	$: mode = $bill.mode;
	$: error = $bill.error;
	$: processing = $bill.processing;
	$: entity = $bill.entity;
	$: po = $bill.po;

	const getBilling = () => {
		bill.getBilling({ bin: $bill.entity.refno });
	};

	const recalcBilling = async (billOption) => {
		await bill.getBilling({
			bin: $bill.entity.refno,
			qtr: billOption.detail.billtoqtr
		});
		if (!error) {
			openBillOption = false;
		}
	};

	const moveBack = async () => {
		bill.setMode('init');
		await tick();
		inputRef.focus();
	};

	const payToCashier = async () => {
		await bill.createPaymentOrder($bill.entity);
		if (!error) {
			printBill = true;
		}
	};

	onMount(() => {
		bill.init();
		if (inputRef) inputRef.focus();
	});
</script>

<div class="mx-16">
	{#if mode === 'init'}
		<Title module="Business Billing" />
		<div class="my-28 mx-20">
			<Input
				bind:this={inputRef}
				bind:value={entity.refno}
				placeholder="Enter BIN"
				disabled={processing}
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
					href="/bpls"
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
				<Button
					on:click={moveBack}
					caption="Back"
					leftIcon="/static/icons/back.svg"
					disabled={processing}
				/>
			</div>
			<div class="w-9/12">
				<Button
					on:click={() => (openBillOption = true)}
					caption="Pay Option"
					disabled={processing}
				/>
			</div>
			<div>
				<Button
					on:click={payToCashier}
					caption="Pay to Cashier"
					rightIcon="/static/icons/print.svg"
					class="float-rights w-48"
					disabled={$bill.entity.amount === 0}
					{processing}
				/>
			</div>
		</ActionBar>
		{#if error}
			<Error {error} />
		{/if}
	{/if}

	{#if mode === 'queue'}
		<GenerateQueueOption queueHref="/queue/bpls" moduleHref="/bpls" />
	{/if}

	{#if openBillOption}
		<BillOption
			open={openBillOption}
			billtoyear={$bill.entity.billtoyear}
			billtoqtr={$bill.entity.billtoqtr}
			on:cancel={() => (openBillOption = false)}
			on:submit={recalcBilling}
		/>
		<h1>{$bill.entity.billtoqtr}</h1>
	{/if}

	{#if printBill}
		<ModalPrint open={printBill} afterPrint={() => (printBill = false)}>
			<h2 class="text-center text-3xl pt-5 pb-2 text-bold pl-10">BUSINESS BILLING</h2>
			<h2 class="text-center text-2xl pt-2">Amount</h2>
			<h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5 mt-10">
				{po.amount}
			</h1>
			<div class="pl-40 pb-5 barcode bg-white">
				<Barcode 
					value='{po.barcode}'
					elementTag='canvas'
					options='{{
						format: "CODE128"
					}}'
					/>
			</div>
		</ModalPrint>
	{/if}
</div>
