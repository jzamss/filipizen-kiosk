<script>
	import {page} from "$app/stores"
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte';
	import QueueButton from "$lib/queue/queue-button.svelte";
	import Modal from "$lib/ui/modal.svelte"

	const groupList = [
		{ section: 'treasury', name: 'regular', title: 'Regular'},
		{ section: 'treasury', name: 'senior', title: 'Senior Citizen'},
		{ section: 'bpls', name: 'application', title: 'Application'},
		{ section: 'bpls', name: 'assessment', title: 'Assessment'},
	]
	console.log($page)
	$: groups = groupList.filter(group => group.section === $page.params.section)

	let isOpenModal = false;
	let group = {};

	function openModal() {
		isOpenModal = true;
	}

	const clickHandler = (selectedGroup) => {
		group = selectedGroup;
		isOpenModal = true;
	}

</script>

<div class="h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <h1 class="text-5xl font-bold text-white text-center pt-3 pb-3">Queue / Treasury</h1>
</div>
<Title module="Select Classification"/>
<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20" >
		{#each groups as group(group.name)}
			<QueueButton title={group.title} on:click={() => clickHandler(group)}/>
		{/each}
	</div>
</main>



<Modal open={isOpenModal} on:cancel={() => isOpenModal=false}>
	<h1 class="text-center text-4xl pt-5 pb-5">Queue Ticket</h1>
	<h2 class="text-center text-2xl pt-5">Your Queue Number</h2>
	<h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5">R-101</h1>
	<button type="button" on:click={() => isOpenModal=false} class="flex items-center text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Print</button>
	<p class="text-center text-1xl pt-5">Please wait until your number is called</p>
</Modal>


<Nav />
<footer class="mb-96 mt-20">

</footer>
