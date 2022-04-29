<script>
	import Button from '$lib/ui/button.svelte';
</script>

<main>
	<slot />
</main>
<footer class="mb-20  mt-20">
	<Button href="/" leftIcon="/icons/back.png" caption="Home" />
</footer>
