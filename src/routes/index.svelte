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



<div class="flex flex-col h-screen justify-between">
	<main>
		<Title title="Home Menu" />
		<div class="grid grid-cols-3 grid-rows-3 m-20">
			{#each menus as menu}
			<a href="{menu.link}" alt="{menu.name}">
				<div class="hover:bg-blue-800 h-60 text-center bg-white bg-opacity-25 w-11/12 rounded-lg shadow-xl pt-10 border-slate-400  border">
					<img src="/static/icons/{menu.icon}.svg" alt="{menu.name}" class="w-1/2 m-auto" />
					<p class="pt-4 text-base font-bold">{menu.name}</p>
				</div>
			</a>
			{/each}
		</div>
	</main>
</div>
