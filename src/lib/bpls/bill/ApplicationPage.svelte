<script>
	import { page } from '$app/stores';
    import { writable } from 'svelte/store';
    import Input from '$lib/ui/input.svelte';
    import Nav from '$lib/nav.svelte';
    import Title from '$lib/title.svelte';
    import Label from '$lib/ui/label.svelte';
    import Onecolumn from '$lib/ui/one-column.svelte';

	$: console.log('page', $page);
	

</script>


<Title module="Application Information" title="Business Billing"/>
<div class="px-32">
  <Onecolumn>
    <Label caption='Application No.' class="text-1xl text-gray-700"></Label>
    <Label caption='B152329842094234-1C' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Application Type' class="text-1xl text-gray-700"></Label>
    <Label caption='NEW' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Date Filed' class="text-1xl text-gray-700"></Label>
    <Label caption='2018-08-17' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='BIN' class="text-1xl text-gray-700"></Label>
    <Label caption='B152329842094234' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Trade Name' class="text-1xl text-gray-700"></Label>
    <Label caption='Rameses' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Owner Name' class="text-1xl text-gray-700"></Label>
    <Label caption='Rameses' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Business Address' class="text-1xl text-gray-700"></Label>
    <Label caption='Cebu City' class="text-2xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
</div>
<div class="inline-flex m-auto">
	<a href="/bpls/pay/bill" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
		<img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
		<p class="pt-5 font-bold text-xl">Confirm</p>
	</a>
  </div>
<Nav />



<footer class="mb-20 mt-20">

</footer>

