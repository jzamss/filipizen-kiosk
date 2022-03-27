<script>
	import { onMount } from 'svelte';
	import queue from '$lib/stores/queue.js';
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte';
	import QueueButton from '$lib/queue/QueueButton.svelte';

	onMount(() => {
		queue.fetchGroups();
	});
</script>

<Title title="Queuing" />

{#if $queue.error}
	<h1 class="text-red-500">{$queue.error}</h1>
{:else if $queue.groups.length === 0}
	<h1>Loading...</h1>
{:else}
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
