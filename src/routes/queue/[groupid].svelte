<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import queue from '$lib/stores/queue.js';
	import Title from '$lib/title.svelte';
	import QueueButton from '$lib/queue/QueueButton.svelte';
	import Modal from '$lib/ui/modal.svelte';
	import ActionBar from '$lib/ui/action-bar.svelte';
	import Button from '$lib/ui/button.svelte';

	const generateTicket = (section) => {
		queue.generateNextTicket(section);
	};

	$: isOpenModal = $queue.section.ticket ? true : false;

	const backHandler = () => {
		$queue.section.ticket = null;
		goto('/queue');
	};

	onMount(() => {
		const groupid = $page.params.groupid;
		queue.setGroup(groupid);
	});
</script>

<Title module="Select Classification" title="Queuing" />
<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20">
		{#if $queue.group}
			{#each $queue.group.sections as section, idx (section.objid)}
				<div in:fly={{ x: -300, duration: 200 + 200 * idx }}>
					<QueueButton title={section.title} on:click={() => generateTicket(section)} />
				</div>
			{/each}
		{/if}
	</div>
	<ActionBar>
		<Button on:click={backHandler} caption="Back" leftIcon="/icons/back.png" />
	</ActionBar>
</main>

{#if $queue.error}
	<h1 class="text-red-600 font-bold text-center">{$queue.error}</h1>
{:else if $queue.section.ticket}
	<Modal open={isOpenModal} on:cancel={() => (isOpenModal = false)}>
		<h1 class="text-center text-4xl pt-5 pb-5">Queue Ticket</h1>
		<h2 class="text-center text-2xl pt-5">Your Queue Number</h2>
		<h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5">
			{$queue.section.ticket.ticketno}
		</h1>

		<div class="flex text-center m-auto">
			<button
				alt="Queueing System"
				class="ml-8 bg-gray-400 h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border"
				on:click={() => (isOpenModal = false)}
			>
				<div class="">
					<p class="pt-5 font-bold text-xl">Cancel</p>
				</div>
			</button>
			<button
				alt="Queueing System"
				class="ml-5 bg-white h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border"
				on:click={() => window.print()}
			>
				<div class="">
					<p class="pt-5 font-bold text-xl">Print</p>
				</div>
			</button>
		</div>
		<p class="text-center text-1xl pt-5">Please wait until your number is called</p>
	</Modal>
{/if}

<style>
	@media print {
		button {
			display: none;
		}
		#model {
			top: 28% !important;
			left: 20% !important;
		}
	}
</style>
