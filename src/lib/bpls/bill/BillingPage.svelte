<script>
	import { page } from '$app/stores';
    import { writable } from 'svelte/store';
    import Input from '$lib/ui/input.svelte';
    import Nav from '$lib/nav.svelte';
    import Title from '$lib/title.svelte';
    import Label from '$lib/ui/label.svelte';
    import Onecolumn from '$lib/ui/one-column.svelte'
    import Modal from '$lib/ui/modal.svelte';
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
		{ id: '1', qtr: '1' },
		{ id: '2', qtr: '2' },
		{ id: '3', qtr: '3'},
    { id: '4', qtr: '4'}
	];

    let selected_qtr = '1';

    let isOpenModal = false;

    function openModal() {
    isOpenModal = true;
    }

    function closeModal() {
    isOpenModal = false;
    }

</script>


<Title module="Billing Information" title="Business Billing"/>

 
<div class="inline-flex m-auto">
    <button alt="Queueing System" class="h-20 text-center bg-white bg-opacity-25 w-64 rounded-lg shadow-xl border-slate-400 flex border" on:click={openModal}>
        <p class="pt-5 pl-20 font-bold text-xl">Pay Option</p>
    </button>
</div>
<div class="w-10/12 m-auto my-20">
    <Table tableData={$colors}/>
</div>

<div class="inline-flex m-auto">
  <a href="/bplsbill/pay/transaction" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Confirm Payment</p>
  </a>
</div>

<Modal open={isOpenModal} on:cancel={() => isOpenModal=false}>
    <h1 class="text-center text-4xl pt-5 pb-10 ">Pay Options</h1>
    <Dropdown name="QUARTER TO BILL">
      <select  bind:value={selected_qtr} class="block appearance-none text-3xl w-full bg-gray-200 border-2 border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {#each quarters as quarter}
          <option value={quarter.id}>
            {quarter.qtr}
          </option>
        {/each}
      </select>
    </Dropdown>

    <div class="absolute inset-x-0 bottom-10 flex text-center m-auto">
        <button alt="Queueing System" class="ml-8 bg-gray-400 h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border" on:click={closeModal} >
            <div class="">
                <p class="pt-5 font-bold text-xl">Cancel</p>
            </div> 
        </button>
        <button alt="Queueing System" class="ml-5 bg-white h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border" on:click={closeModal} >
            <div class="">
                <p class="pt-5 font-bold text-xl">OK</p>
            </div> 
        </button>
    </div>
</Modal>


<Nav />



<footer class="mb-96 mt-20">

</footer>


