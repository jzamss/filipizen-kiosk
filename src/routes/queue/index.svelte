<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import queue from '$lib/stores/queue.js';
	import Title from '$lib/title.svelte';
	import QueueButton from '$lib/queue/QueueButton.svelte';

	onMount(() => {
		queue.fetchGroups();
	});
</script>


<Title module="Select Transaction" />

{#if $queue.error}
	<h1 class="text-red-500">{$queue.error}</h1>
{:else if $queue.groups.length === 0}
	<h1>Loading...</h1>
{:else}
	<main>
		<div class="pt-20 px-40">
			{#each $queue.groups as group, idx (group.objid)}
				<div in:fly={{ x: -400, duration: 200 + 200 * idx }}>
					<QueueButton href="/queue/{group.objid.toLowerCase()}" title={group.title}/>
				</div>
			{/each}
		</div>
	</main>
{/if}