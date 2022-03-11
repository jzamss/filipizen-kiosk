<script>
  export let onClose;
</script>

<style>
	button {
		position: absolute;
		top: -3rem;
		right: 0;
		color: white;
		background: purple;
		border: 2px solid pink;
	}
</style>

<button on:click={onClose}>Custom Close Button</button>