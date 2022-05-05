<script>
	import { fly } from 'svelte/transition';
	import Title from '$lib/title.svelte'
	let menus = [
		{ name: 'Queue Ticket', link: '/queue', icon: 'queue' },
		{ name: 'Business Permit', link: '/bpls', icon: 'bpls' },
		{ name: 'Real Property Tax Billing', link: '/rpt', icon: 'rpt' }
	];
</script>


<Title module="Menu" />
<div class="flex flex-col justify-between">
	<main>
		<div class="grid grid-cols-3 grid-rows-3 m-20">
			{#each menus as menu, idx}
				<div in:fly={{ x: -300, duration: 200 + 200 * idx }}>
					<a href={menu.link} alt={menu.name}>
						<div class="h-60 text-center w-11/12">
							<img src="/static/icons/{menu.icon}.svg" alt={menu.name} class="m-auto" />
							<p class="pt-5 text-2xl font-bold">{menu.name}</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</main>
</div>
