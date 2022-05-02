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

<Title module="Select Classification"/>
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

	<a on:click={backHandler} > <img src="/static/icons/back.svg" alt="back icon" class="w-60 m-auto"/></a>
	
</main>

{#if $queue.error}
	<h1 class="text-red-600 font-bold text-center">{$queue.error}</h1>
{:else if $queue.section.ticket}
	<Modal open={isOpenModal} on:cancel={() => (isOpenModal = false)}>
		<h2 class="text-center text-6xl pt-5 pb-2 text-bold">Queue Ticket</h2>
		<h2 class="text-center text-2xl pt-2">Your Queue Number</h2>
		<h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5">
			{$queue.section.ticket.ticketno}
		</h1>

		<div class="flex text-center m-auto">
			<a
				alt="Queueing System"
				class="w-64"
				on:click={() => (isOpenModal = false)}
			>
				<img src="/static/icons/cancel.svg" />
			</a>
			<a
				alt="Queueing System"
				class="w-64"
				on:click={() => window.print()}
			>
				<img src="/static/icons/print.svg" />
			</a>
		</div>
		<p class="text-center text-1xl pt-1">Please wait until your number is called</p>
	</Modal>
{/if}

<style>
	@media print {
		a {
			display: none;
		}
		#model {
			top: 0 !important;
			left: 0 !important;
		}
	}

	
</style>
