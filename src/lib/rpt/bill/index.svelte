<script>
	import { onMount, tick } from 'svelte';
	import bill from '$lib/stores/rptbill';
	import ActionBar from '$lib/ui/action-bar.svelte';
	import Title from '$lib/title.svelte';
	import Subtitle from '$lib/ui/subtitle.svelte';
	import Panel from '$lib/ui/panel.svelte';
	import Input from '$lib/ui/input.svelte';
	import Button from '$lib/ui/button.svelte';
	import Label from '$lib/ui/label.svelte';
	import Error from '$lib/ui/error.svelte';
	import ModalPrint from '$lib/ui/modal-print.svelte';
	import { currencyFormat, numberFormat, isEmpty } from '$lib/helper.js';

	let inputRef = null;
	let printBill = false;

	$: mode = $bill.mode;
	$: error = $bill.error;
	$: processing = $bill.processing;
	$: entity = $bill.entity;

	const getBilling = () => {
		bill.getBilling($bill.entity.tdno);
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

<Title module="Real Property Tax Billing" />
<div class="h-screen">
	<div class="mx-16">
		{#if mode === 'init'}
			<div class="py-40 mx-20">
				<Input
					bind:this={inputRef}
					bind:value={entity.tdno}
					disabled={processing}
					placeholder="Enter TD Number"
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
						leftIcon="/static/icons/cancel.svg"
						class="modern w-48"
					/>
				</div>
				<div>
					<Button
						on:click={getBilling}
						disabled={isEmpty(entity.tdno)}
						{processing}
						caption="Next"
						rightIcon="/static/icons/next.svg"
						class="modern w-48"
					/>
				</div>
			</ActionBar>
		{/if}

		{#if mode === 'bill'}
		<div class="DontPrint">
			<Panel>
				<Subtitle title="Property Information" class="my-4" />
				<div class="text-2xl">
					<Label caption="TD No." value={entity.ledger.tdno} />
					<Label caption="Declared Owner" value={entity.ledger.owner.name} />
					<Label caption="PIN" value={entity.ledger.fullpin} />
					<Label caption="Kind" value={entity.ledger.rputype} />
					<Label caption="Location" value="{entity.ledger.barangay}, {entity.ledger.lguname}" />
					<Label caption="Title No" value={entity.ledger.titleno} />
					<Label caption="Lot No." value={entity.ledger.cadastrallotno} />
					{#if entity.ledger.totalareaha > 0}
						{#if entity.ledger.classification === 'AGRICULTURARL'}
							<Label caption="Area (ha)" value={numberFormat(entity.ledger.totalareaha, 4)} />
						{:else}
							<Label caption="Area (sqm)" value={numberFormat(entity.ledger.totalareasqm)} />
						{/if}
					{/if}
					<Label caption="Market Value" value={currencyFormat(entity.ledger.totalmv)} />
					<Label caption="Assessed Value" value={currencyFormat(entity.ledger.totalav)} />
				</div>
				<br />
				<div class="bg-gray-300 p-3 text-2xl">
					<Subtitle title="Billing Information" class="mb-1" />
					<Label caption="BILL PERIOD" value={entity.billperiod} />
					<Label caption="BILL AMOUNT" value={currencyFormat(entity.totals.total)} />
				</div>
				<br />
				<p class="mt-5 font-bold">Bill Breakdown</p>
				<div class="flex w-full text-1xl">
					<div class="w-8/12">
						<Label caption="Basic" value={entity.totals.basic} />
						<Label caption="Basic Interest" value={entity.totals.basicint} />
						<Label caption="Basic Discount" value={entity.totals.basicdisc} />
						<Label caption="Basic Total" value={entity.totals.basicnet} />
					</div>
					<div class="w-8/12">
						<Label caption="SEF" value={entity.totals.sef} />
						<Label caption="SEF Interest" value={entity.totals.sefint} />
						<Label caption="SEF Discount" value={entity.totals.sefdisc} />
						<Label caption="SEF Total" value={entity.totals.sefnet} />
					</div>
				</div>
			</Panel>
		</div>
			<ActionBar>
				<div class="w-9/12">
					<Button on:click={moveBack} caption="Back" leftIcon="/static/icons/back.svg" class="modern w-48"/>
				</div>
				<div>
					<Button on:click={() => (printBill = true)} caption="Pay to Cashier"
						rightIcon="/static/icons/print.svg"
						class="float-rights modern w-56"
					/>
				</div>
			</ActionBar>
		{/if}

		{#if printBill}
			<ModalPrint open={printBill} afterPrint={() => (printBill = false)}>
				<div class="print">
					<h2 class="text-center text-4xl mt-5 text-bold">REAL PROPERTY TAX BILL</h2>
					<h2 class="text-center text-2xl pt-2">Amount</h2>
					<h1 class="text-center text-6xl pt-5 text-bold mb-5">
						{currencyFormat(entity.totals.total)}
					</h1>
					<p class="text-center text-2xl">{entity.barcode}</p>
				</div>
			</ModalPrint>
		{/if}
	</div>
</div>