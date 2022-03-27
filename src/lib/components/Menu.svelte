<script>
    export let href;
	export let title;
</script>


<a href="{href}" alt="{title}" class="m-auto">
    <div class="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-40 mb-5">
        <p class="w-96 text-4xl font-bold uppercase">{title}</p>
    </div> 
</a>