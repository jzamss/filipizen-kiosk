<script>
	import Spinner from '$lib/ui/spinner.svelte';
	export let caption;
	export let href = null;
	export let alt = '';
	export let leftIcon = null;
	export let rightIcon = null;
	export let processing = false;
	export let disabled = false;
	let clz = '';
	export { clz as class };

	const defualtClass =
		'font-bold  text-xl  py-6 text-center bg-white  rounded-lg  shadow-xl  border-slate-400  border flex justify-center items-center';

	$: processingClass = processing ? 'bg-gray-400' : '';
	$: disabledClass = disabled ? 'bg-gray-500' : '';
</script>

{#if href}
	<a
		{href}
		{alt}
		class="
			{defualtClass}
			{disabledClass}
			{processingClass}
			{clz}
		"
	>
		{#if leftIcon}
			<img src={leftIcon} alt="menu" class="h-8 mr-2" />
		{/if}
		{#if caption}
			{caption}
		{/if}
		{#if rightIcon}
			<img src={rightIcon} alt="menu" class="rotate-180 h-8 ml-2" />
		{/if}
	</a>
{:else}
	<button
		on:click
		disabled={processing || disabled}
		{alt}
		class="
		{defualtClass}
		{disabledClass}
		{processingClass}
		{clz}
	"
	>
		{#if leftIcon && !processing}
			<img src={leftIcon} alt="menu" class="h-8 mr-2" />
		{/if}
		{#if caption}
			{caption}
		{/if}
		{#if rightIcon && !processing}
			<img src={rightIcon} alt="menu" class="h-8 ml-2" />
		{/if}
		{#if processing}
			<div class="ml-6">
				<Spinner />
			</div>
		{/if}
	</button>
{/if}
