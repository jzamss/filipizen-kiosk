<script>
	import { fly } from 'svelte/transition';
<<<<<<< HEAD
	import Title from '$lib/title.svelte';
=======
	import Title from '$lib/title.svelte'
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c
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

<<<<<<< HEAD
<Title module="Main Menu"/>
<div class="flex flex-col h-screen justify-between">
=======

<Title module="Menu" />
<div class="flex flex-col justify-between">
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c
	<main>
		<div class="grid grid-cols-3 grid-rows-3 m-20">
			{#each menus as menu, idx}
				<div in:fly={{ x: -300, duration: 200 + 200 * idx }}>
					<a href={menu.link} alt={menu.name}>
<<<<<<< HEAD
						<div class="mb-5 h-60 text-center w-11/12">
							<img src="/static/icons/{menu.icon}.svg" alt={menu.name} class="h-1/2 m-auto" />
							<p class="pt-5 text-1xl font-bold">{menu.name}</p>
=======
						<div class="h-40 text-center w-11/12">
							<img src="/static/icons/{menu.icon}.svg" alt={menu.name} class="m-auto w-1/2" />
							<p class="pt-5 text-2xl font-bold">{menu.name}</p>
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c
						</div>
					</a>
				</div>
			{/each}
		</div>
	</main>
</div>
