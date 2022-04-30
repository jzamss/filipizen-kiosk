<script>
	import { fly } from 'svelte/transition';
	let menus = [
		{ name: 'Queuing', link: '/queue', icon: 'queue' },
		{ name: 'Real Property Tax Billing', link: '/rpt', icon: 'rpt' },
		{ name: 'Business Permit', link: '/bpls', icon: 'bpls' }
	];
</script>

<div class="flex flex-col h-screen justify-between">
	<main>
		<div class="grid grid-cols-3 grid-rows-3 m-20">
			{#each menus as menu, idx}
				<div in:fly={{ x: -300, duration: 200 + 200 * idx }}>
					<a href={menu.link} alt={menu.name}>
						<div class="h-60 text-center w-11/12">
							<img src="/static/icons/{menu.icon}.svg" alt={menu.name} class="w-3/4 m-auto" />
							<p class="pt-4 text-base font-bold">{menu.name}</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</main>
</div>
