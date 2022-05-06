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

<<<<<<< HEAD
<Title module="Queuing" />
=======
<Title title="Queuing" />
>>>>>>> 0bbd362a19a9b9c5596184426c22ead903d29a7c

{#if $queue.error}
	<h1 class="text-red-500">{$queue.error}</h1>
{:else if $queue.groups.length === 0}
	<h1>Loading...</h1>
{:else}
	<main>
		<div class="grid grid-cols-2 grid-rows-2 m-20">
			{#each $queue.groups as group, idx (group.objid)}
				<div in:fly={{ x: -400, duration: 200 + 200 * idx }}>
					<QueueButton href="/queue/{group.objid.toLowerCase()}" title={group.title}/>
				</div>
			{/each}
		</div>
	</main>
{/if}
