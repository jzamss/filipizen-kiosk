<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import queue from '$lib/stores/queue.js';
	import Title from '$lib/title.svelte';
	import QueueButton from '$lib/queue/QueueButton.svelte';
	import ModalPrint from '$lib/ui/modal-print.svelte';
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

<Title module="Select Classification" />
<main class="mb-auto DontPrint">
	<div class="m-20 px-40">
		{#if $queue.group}
			{#each $queue.group.sections as section, idx (section.objid)}
				<div in:fly={{ x: -300, duration: 200 + 200 * idx }}>
					<QueueButton title={section.title} on:click={() => generateTicket(section)} />
				</div>
			{/each}
		{/if}
	</div>
	<div class="bottom-48 absolute w-full ">
		<Button
			on:click={backHandler}
			caption="Back"
			class="w-1/5 ml-10 modern"
		/>
	</div>
</main>

{#if $queue.error}
	<h1 class="text-red-600 font-bold text-center DontPrint">{$queue.error}</h1>
{:else if $queue.section.ticket}
	<ModalPrint open={isOpenModal} afterPrint={() => ($queue.section.ticket = null)}>
		<div class="print">
			<h2 class="text-center text-4xl pt-5 pb-2 text-bold">Queue Ticket</h2>
			<h2 class="text-center text-2xl pt-2 ">Ticket Number</h2>
			<h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5">
				{$queue.section.ticket.ticketno}
			</h1>
			<p class="text-center text-1xl pt-4 note">Please wait until your number is called</p>
		</div>
		
	</ModalPrint>
{/if}

