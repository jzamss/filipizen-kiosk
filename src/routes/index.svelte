<script>
	import Header from '$lib/header-master.svelte';
	import Title from '$lib/title.svelte';
	import { fade } from 'svelte/transition';

	let menus = [
		{ name: 'Queue', link: '/queue', icon:'queue' },
		{ name: 'Real Property Tax Billing', link: '/rpt', icon : 'rpt' },
		{ name: 'Business Permit', link: '/bpls', icon : 'bpls'}
	];

</script>


<Title />
<div class="flex flex-col h-screen justify-between">
	<main>
		<div class="grid grid-cols-3 grid-rows-3 m-20">
			{#each menus as menu}
			<a href="{menu.link}" alt="{menu.name}">
				<div class="h-60 text-center w-11/12">
					<img src="/static/icons/{menu.icon}.svg" alt="{menu.name}" class="w-1/2 m-auto" />
					<p class="pt-4 text-base font-bold">{menu.name}</p>
				</div>
			</a>
			{/each}
		</div>
	</main>
</div>
