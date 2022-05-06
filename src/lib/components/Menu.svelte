<script>
    export let href;
	export let title;

    import Button from '$lib/ui/button.svelte';
</script>


<Button href="{href}" alt="{title}" caption={title} />