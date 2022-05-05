<script>
	import Title from '$lib/title.svelte';
	import Menu from '$lib/Components/Menu.svelte';

	let options = [{ title: 'Billing', href: '/rpt/bill' }];
</script>

<Title module="Real Property Tax" />
<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20">
		{#each options as option}
			<Menu title={option.title} href={option.href} />
		{/each}
	</div>
</main>
