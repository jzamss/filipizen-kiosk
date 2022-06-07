<script>
	import Title from '$lib/title.svelte';
	import Menu from '$lib/Components/Menu.svelte';

	let options = [{ title: 'Billing', href: '/rpt/bill' }];
</script>

<Title module="Real Property Tax" />
<div class="h-screen bg-gray-300">
	<main class="mb-auto">
		<div class="grid grid-cols-2 grid-rows-2">
			{#each options as option}
				<Menu title={option.title} href={option.href} />
			{/each}
		</div>
	</main>
</div>

