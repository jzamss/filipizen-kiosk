<script>
	import Title from '$lib/title.svelte';
	import Menu from '$lib/Components/Menu.svelte';

	let options = [{ title: 'Billing', href: '/rpt/bill' }];
</script>

<Title module="Real Property Tax" />
<main class="h-screen">
	<div class="pt-20 px-40">
		{#each options as option}
			<Menu title={option.title} href={option.href} />
		{/each}
	</div>
</main>

