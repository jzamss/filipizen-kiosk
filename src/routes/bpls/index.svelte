<script>
	import { page } from '$app/stores';
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte';
	import Menu from '$lib/bpls/menu.svelte';

	const clickHandler = (selectedGroup) => {
		group = selectedGroup;
		isOpenModal = true;
	};

	let options = [
		{ title: 'Pay', href: '/bpls/bill' },
		{ title: 'Apply New', href: '' },
		{ title: 'Renewal', href: '' },
		{ title: 'Add Line', href: '' }
	];
</script>

<div class="h-20 bg-blue-800">
	<h1 class="text-5xl font-bold text-white text-center pt-5">Business Permit</h1>
</div>
<Title module="Select Business Permit" />

<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20">
		{#each options as option}
			<Menu title={option.title} href={option.href} />
		{/each}
	</div>
</main>
<Nav />
