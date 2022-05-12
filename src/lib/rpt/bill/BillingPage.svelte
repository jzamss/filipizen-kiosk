<script>
    import { page } from '$app/stores';
    import { writable } from 'svelte/store';
    import Input from '$lib/ui/input.svelte';
    import Nav from '$lib/nav.svelte';
    import Title from '$lib/title.svelte';
    import Label from '$lib/ui/label.svelte';
    import Dropdown from '$lib/ui/drop-down.svelte';
    import Onecolumn from '$lib/ui/one-column.svelte';

    $: console.log('page', $page);

  let options = [
		{ id: '1', value: '2022' },
		{ id: '2', value: '2021' },
		{ id: '3', value: '2020'}
	];

  let quarters = [
		{ id: '1', qtr: '1st Quarter' },
		{ id: '2', qtr: '2nd Quarter' },
		{ id: '3', qtr: '3rd Quarter'},
    { id: '4', qtr: '4th Quarter'}
	];

  let selected_id = '1';
  let selected_qtr = '1';


</script>


<Title module="Billing Information" title="Real Property Tax Billing" />
<div class="px-32">
    <Dropdown name="YEAR BILL">
        <select  bind:value={selected_id} class="border-black block font-bold appearance-none text-3xl w-full border-2 border-black-700 text-black-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500">
        {#each options as option}
            <option value={option.id}>
            {option.value}
            </option>
        {/each}
        </select>
    </Dropdown>
    <Dropdown name="QUARTER TO BILL">
        <select  bind:value={selected_qtr} class="border-black block font-bold uppercase appearance-none text-3xl w-full border-2 border-black-700 text-black-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500">
        {#each quarters as quarter}
            <option value={quarter.id}>
            {quarter.qtr}
            </option>
        {/each}
        </select>
    </Dropdown>
    <Onecolumn>
      <Label caption='Amount' class="text-2xl text-gray-700"> </Label> 
      <Label caption='2,571.35' class=" text-5xl border-2 p-2 text-right text-black-700"></Label>
    </Onecolumn>
</div>

<br />
<div class="inline-flex m-auto">
  <a href="/rpt/pay/confirm" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Confirm</p>
  </a>
</div>


<Nav />
