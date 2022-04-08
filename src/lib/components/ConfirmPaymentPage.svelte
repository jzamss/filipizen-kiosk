<script>
	import Input from '$lib/ui/input.svelte';
	import Nav from '$lib/nav.svelte';
	import Title from '$lib/title.svelte';
	import Label from '$lib/ui/label.svelte';
	import Onecolumn from '$lib/ui/one-column.svelte';

</script>

<Title module="Confirm Transaction" />

<div class="px-32">
	<Onecolumn>
		<Label caption="Paid By Name *" class="text-2xl text-gray-700" />
		<Input	 
			name="name"
			placeholder="Enter Name" 
			class="text-3xl border-2 p-2 bg-white text-black-700 border-black font-bold uppercase"
		/>
	</Onecolumn>
	<Onecolumn>
		<Label caption="Paid By Address*" class="text-2xl text-gray-700" />
		<Input
			name="address"
			placeholder="Enter Address"
			class="text-3xl border-2 p-2 bg-white text-black-700 border-black font-bold uppercase"
		/>
	</Onecolumn>
	<br />
	<Onecolumn>
		<Label caption="Amount" class="text-2xl text-gray-700" />
		<Label caption="2,200.04" class=" text-5xl border-2 p-2 text-right text-black-700" />
	</Onecolumn>
</div>

<br />
<div class="inline-flex m-auto">
	<a
		href="/rpt/pay/order"
		alt="menu"
		class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border"
	>
		<img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180" />
		<p class="pt-5 font-bold text-xl">Continue</p>
	</a>
</div>

<Nav />

<footer class="mb-20 mt-20">

</footer>
