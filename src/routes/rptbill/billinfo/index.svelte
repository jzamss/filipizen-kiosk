<script>
	import Input from '$lib/ui/input.svelte';
	import Nav from '$lib/nav.svelte';
	import Title from '$lib/title.svelte';
  import Modal from '$lib/ui/modal.svelte';
  import Label from '$lib/ui/label.svelte';
  import Dropdown from '$lib/ui/drop-down.svelte'
  import Onecolumn from '$lib/ui/one-column.svelte'
  import Twocolumn from '$lib/ui/two-column.svelte'

  let options = [
		{ id: '1', value: '2022' },
		{ id: '2', value: '2021' },
		{ id: '3', value: '2020'}
	];

  let quarters = [
		{ id: '1', qtr: '1' },
		{ id: '2', qtr: '2' },
		{ id: '3', qtr: '3'},
    { id: '4', qtr: '4'}
	];

  let selected_id = '1';
  let selected_qtr = '1';

  let isOpenModal = false;

  function openModal() {
    isOpenModal = true;
  }

  function closeModal() {
    isOpenModal = false;
  }

</script>

<div class="h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
  <h1 class="text-5xl font-bold text-white text-center pt-3 pb-3">Real Property Tax Billing </h1>
</div>
<Title module="Billing Information"/>

<form class="m-auto w-full max-w-lg">
  <Twocolumn>
    <div slot='slot1'>
      <Label caption='Bill No.'></Label>
      <Input value='56001:00210165090'></Input>
    </div>
    <div slot='slot2'>
      <Label caption='Bill Date'></Label>
      <Input value='2021-10-15 15:24:02'></Input>
    </div>
  </Twocolumn>
    <Onecolumn>
      <Label caption='TD No.'></Label>
      <Input value='F-000023'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='PIN'></Label>
      <Input value='025-04-036B002'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='Bill Period'> </Label>
        <Input value='24Q, 2021'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='Bill Period'> </Label> 
      <Input value='2,571.35'></Input>
    </Onecolumn>
</form>

<br />
<div class="inline-flex m-auto">
  <button alt="Queueing System" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64 rounded-lg shadow-xl pt-1 mr-10 border-slate-400 flex border" on:click={openModal}>
        <p class="pt-5 pl-20 font-bold text-xl">Pay Option</p>
  </button>

  <a href="/rptbill/transaction" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Confirm Payment</p>
  </a>
</div>


<Modal open={isOpenModal} on:cancel={() => isOpenModal=false}>
  
<h1 class="text-center text-4xl pt-5 pb-10 ">Pay Options</h1>
<Dropdown name="YEAR BILL">
  <select  bind:value={selected_id} class="block appearance-none text-3xl w-full bg-gray-200 border-2 border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
    {#each options as option}
      <option value={option.id}>
        {option.value}
      </option>
    {/each}
  </select>
</Dropdown>
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
