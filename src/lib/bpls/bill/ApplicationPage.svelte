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

<form class="m-auto w-full max-w-lg">
    <Onecolumn>
      <Label caption='Application No.'></Label>
      <Input value='B152329842094234-1C'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='Application Type'></Label>
      <Input value='NEW'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='Date Filed'></Label>
        <Input value='2018-08-17'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='BIN'> </Label> 
      <Input value='B152329842094234'></Input>
    </Onecolumn>
    <Onecolumn>
    <Label captio='Trade Name'></Label>
        <Input value='Rameses'></Input>
    </Onecolumn>
    <Onecolumn>
        <Label caption='Owner Name'> </Label> 
        <Input value='Rameses'></Input>
    </Onecolumn>
    <Onecolumn>
        <Label caption='Business Address'> </Label> 
        <Input value='Cebu City'></Input>
    </Onecolumn>
</form>

<div class="inline-flex m-auto">
	<a href="/bpls/pay/bill" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
		<img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
		<p class="pt-5 font-bold text-xl">Confirm Information</p>
	</a>
  </div>
<Nav />



<footer class="mb-96 mt-20">

</footer>

