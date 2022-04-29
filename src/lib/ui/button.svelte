<script>
	export let caption;
	export let href = null;
	export let alt = '';
	export let leftIcon = null;
	export let rightIcon = null;
	let clz = '';
	export { clz as class };

	const defualtClass =
		'font-bold  text-xl  py-4  px-14 bg-white  bg-opacity-25  rounded-lg  shadow-xl  border-slate-400  border flex justify-center items-center';
</script>

{#if href}
	<a
		{href}
		{alt}
		class="
			{defualtClass}
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
		{alt}
		class="
		{defualtClass}
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
	</button>
{/if}
