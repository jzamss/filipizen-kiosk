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

	let inputRef = null;

	$: mode = $bill.mode;
	$: error = $bill.error;
	$: entity = $bill.entity;

	const getBilling = () => {
		bill.getBilling($bill.entity.tdno);
		inputRef.focus();
	};

	const printBill = () => {
		alert('Printing bill');
	};

	const moveBack = async () => {
		bill.setMode('init');
		await tick();
		inputRef.focus();
	};

	onMount(() => {
		bill.init();
		inputRef.focus();
	});
</script>

<div class="mx-16">
	{#if mode === 'init'}
		<Title module="Real Property Tax Billing" />
		<div class="my-40 mx-20">
			<Input bind:this={inputRef} bind:value={entity.tdno} placeholder="Enter TD Number"/>
			<div class="h-20">
				{#if error}
					<Error {error} />
				{/if}
			</div>
		</div>
		<ActionBar>
			<div class="w-9/12">
				<Button on:click={moveBack} caption="Cancel" leftIcon="/static/icons/cancel.svg"/>
			</div>
			<div>
				<Button  on:click={getBilling} caption="Next" rightIcon="/static/icons/next.svg"/>
			</div> 
		</ActionBar>
	{/if}

	{#if mode === 'bill'}
		<Panel>
			<Subtitle title="Property Information" class="my-4" />
			<div class="text-2xl">
				<Label caption="TD No." value={entity.ledger.tdno} />
				<Label caption="Declared Owner" value={entity.ledger.owner.name} />
				<Label caption="PIN" value={entity.ledger.fullpin} />
				<Label caption="Kind" value={entity.ledger.rputype} />
				<Label caption="LGU" value={entity.ledger.lguname} />
				<Label caption="Barangay" value={entity.ledger.barangay} />
				<Label caption="Title No" value={entity.ledger.titleno} />
				<Label caption="Lot No." value={entity.ledger.cadastrallotno} />
				<Label caption="Area (ha)" value={entity.ledger.totalareaha} />
				<Label caption="Area (sqm)" value={entity.ledger.totalareasqm} />
				<Label caption="Market Value" value={entity.ledger.totalmv} />
				<Label caption="Assessed Value" value={entity.ledger.totalav} />
			</div>
			<br />
			<div class="bg-gray-300 px-5 text-2xl">
				<Subtitle title="Billing Information" class="mb-4" />
				<Label caption="BILL PERIOD" value={entity.billperiod} />
				<Label caption="BILL AMOUNT" value={entity.totals.total} />
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
		<ActionBar>
			<div class="w-9/12">
				<Button on:click={moveBack} caption="Back"  leftIcon="/static/icons/back.svg"/>
			</div>
			<div>
				<Button on:click={printBill} caption="Print" rightIcon="/static/icons/print.svg" class="float-rights" />
			</div>
		</ActionBar>
	{/if}
</div>
