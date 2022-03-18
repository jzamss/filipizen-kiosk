<script>
	export let tableData = [];
</script>

<table class="w-full text-2xl text-left text-gray-500 dark:text-gray-400">
	<thead class="text-2xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
		<tr>
			{#each Object.keys(tableData[0]) as columnHeading}
				<th class="px-6 py-3">{columnHeading}</th>
			{/each}
		<tr/>
	</thead>
	<tbody>
		{#each Object.values(tableData) as row}
			<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
				{#each Object.values(row) as cell}
					<td class="w-4 p-4 text-right">{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

