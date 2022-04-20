<script>
	import { page } from '$app/stores';
    import { writable } from 'svelte/store';
    import Input from '$lib/ui/input.svelte';
    import Nav from '$lib/nav.svelte';
    import Title from '$lib/title.svelte';
    import Label from '$lib/ui/label.svelte';
    import Onecolumn from '$lib/ui/one-column.svelte'
    import Table from '$lib/ui/table.svelte';
    import Dropdown from '$lib/ui/drop-down.svelte';

	$: console.log('page', $page);
	


   let colors = writable([
	{
		"Particulars" : "HEALTH CARD",
		"Amount" : "1.00",
        "Surcharge" : "0",
        "Interest": "0",
        "Total" : "1.00"
	}

    ])

    let quarters = [
		{ id: '1', qtr: '1st Quarter' },
		{ id: '2', qtr: '2nd Quarter' },
		{ id: '3', qtr: '3rd Quarter'},
    { id: '4', qtr: '4th Quarter'}
	];

    let selected_qtr = '1';

</script>


<Title module="Billing Information" title="Business Billing"/>
<div class="px-32">
    <Dropdown name="QUARTER TO BILL">
        <select  bind:value={selected_qtr} class="border-black block font-bold uppercase appearance-none text-5xl w-full border-2 border-black-700 text-black-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500">
        {#each quarters as quarter}
            <option value={quarter.id}>
            {quarter.qtr}
            </option>
        {/each}
        </select>
    </Dropdown>
    <br />
    <Table tableData={$colors}/>
</div>
<br />
<div class="inline-flex m-auto">
  <a href="/bpls/pay/confirm" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Confirm</p>
  </a>
</div>



<Nav />



<footer class="mb-20 mt-20">

</footer>


