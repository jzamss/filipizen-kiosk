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


<Title module="Application Information" title="Real Property Tax Billing" />
<div class="px-32">
  <Onecolumn>
    <Label caption='Bill No.' class="text-3xl text-gray-700"></Label>
    <Label caption='56001:00210165090' class="text-5xl bg-white border-2 border-black p-2 text-black-700"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Bill Date' class="text-3xl text-gray-700"></Label>
    <Label caption='2021-10-15 15:24:02' class="text-5xl bg-white border-2 p-2 border-black text-black-700"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='TD No.' class="text-3xl text-gray-700"></Label>
    <Label caption='F-000023' class="text-5xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='PIN' class="text-3xl text-gray-700"></Label>
    <Label caption='025-04-036B002' class="text-5xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
</div>

<br />
<div class="inline-flex m-auto">
  <a href="/rpt/pay/bill" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Confirm</p>
  </a>
</div>


<Nav />



<footer class="mb-96 mt-20">

</footer>
