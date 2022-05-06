<script>
	import { fly } from 'svelte/transition';
	import Title from '$lib/title.svelte';
	let menus = [
		{ name: 'Queuing', link: '/queue', icon: 'queue' },
		{ name: 'Business Permit', link: '/bpls', icon: 'bpls' },
		{ name: 'Real Property Tax Billing', link: '/rpt', icon: 'rpt' },
		//{ name: 'Cedula', link: '/', icon: 'cedula' },
		//{ name: 'Market Rental', link: '/', icon: 'market' },
		//{ name: 'Water', link: '/', icon: 'water' },
		//{ name: 'Work Permit', link: '/', icon: 'work' }
	];
</script>

<Title module="Main Menu"/>
<div class="flex flex-col h-screen justify-between">
	<main>
		<div class="grid grid-cols-3 grid-rows-3 m-20">
			{#each menus as menu, idx}
				<div in:fly={{ x: -300, duration: 200 + 200 * idx }}>
					<a href={menu.link} alt={menu.name}>
						<div class="mb-5 h-60 text-center w-11/12">
							<img src="/static/icons/{menu.icon}.svg" alt={menu.name} class="h-1/2 m-auto" />
							<p class="pt-5 text-1xl font-bold">{menu.name}</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</main>
</div>
