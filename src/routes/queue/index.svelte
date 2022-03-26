<script>
	import queue from '$lib/stores/queue.js';
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte';
	import QueueButton from '$lib/queue/QueueButton.svelte';

	queue.fetchGroups();
</script>

<div class="h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
	<h1 class="text-5xl font-bold text-white text-center pt-3 pb-3">Queue</h1>
</div>

{#if $queue.error}
	<h1 class="text-red-500">{$queue.error}</h1>
{:else if $queue.groups.length === 0}
	<h1>Loading...</h1>
{:else}
	<Title module="Select Transaction" />
	<main class="mb-auto">
		<div class="grid grid-cols-2 grid-rows-2 m-20">
			{#each $queue.groups as group (group.objid)}
				<QueueButton href="/queue/{group.objid.toLowerCase()}" title={group.title} />
			{/each}
		</div>
	</main>
	<Nav />
	<footer class="mb-96 mt-20" />
{/if}
