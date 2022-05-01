<script>
    export let href;
	export let title;
</script>


<a href="{href}" alt="{title}" class="m-auto">
    <img src="/static/icons/{title}.svg" alt="{title}" />
    <p class="w-96 text-center text-4xl font-bold uppercase">{title}</p>
</a>