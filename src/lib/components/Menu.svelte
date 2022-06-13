<script>
    export let href;
	export let title;

    import Button from '$lib/ui/button.svelte';
</script>

<div class="mb-5 mx-10">
    <Button href="{href}" alt="{title}" caption={title} class="py-10 modern m-auto w-full"/>
</div>