<script>
	import { page } from '$app/stores';
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte';
	import Menu from '$lib/Components/Menu.svelte';

	const clickHandler = (selectedGroup) => {
		group = selectedGroup;
		isOpenModal = true;
	};

	let options = [
		{ title: 'Pay', href: '/rpt/pay' }
	];
</script>


<Title module="Select Transaction" title="Real Property Tax Billing" />

<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20">
		{#each options as option}
			<Menu title={option.title} href={option.href} />
		{/each}
	</div>
</main>
<Nav />
