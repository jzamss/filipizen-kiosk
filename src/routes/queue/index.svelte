<script>
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte'
	import QueueButton from '$lib/queue/queue-button.svelte';

	const sections = [
		{name: 'treasury', title: 'Treasury'},
		{name: 'landtax', title: 'Land Tax'},
		{name: 'bpls', title: 'Business Licensing'},
	]
</script>



<Title module="Select Transaction"/>
<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20" >
		{#each sections as section(section.name)}
			<QueueButton href="/queue/{section.name}" title={section.title}/>
		{/each}
	</div>
</main>
<Nav />
<footer class="mb-96 mt-20">

</footer>
