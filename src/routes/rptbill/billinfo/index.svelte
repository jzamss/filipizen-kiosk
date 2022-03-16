<script>
	import Keyboard from '$lib/keyboard/keyboard.svelte';
	import Input from '$lib/ui/input.svelte';
	import Nav from '$lib/nav.svelte';
	import Title from '$lib/title.svelte';
  import Modal from '$lib/ui/modal.svelte';


	let registerKeyListener = null;
	let handleKey = null;
	let entity = { name: '', address: '' };
  let isOpenModal = false;

  function openModal() {
    isOpenModal = true;
  }

  function closeModal() {
    isOpenModal = false;
  }

</script>
<Title module="Billing Information"/>


<form class="m-auto w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bill-no">
          Bill No.
        </label>
        <Input value='56001:00210165090'></Input>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Bill Date
        </label>
        <Input value='2021-10-15 15:24:02'></Input>
     </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          TD No.
        </label>
        <Input value='F-000023'></Input>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          PIN
        </label>
        <Input value='025-04-036B002'></Input>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Bill Period
        </label>
        <Input value='24Q, 2021'></Input>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Amount Due
        </label>
        <Input value='2,571.35'></Input>
      </div>
    </div>
</form>

<br />
<div class="inline-flex m-auto">
  <button alt="Queueing System" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64 rounded-lg shadow-xl pt-1 mr-10 border-slate-400 flex border" on:click={openModal}>
        <p class="pt-5 pl-20 font-bold text-xl">Pay Option</p>
  </button>

  <a href="rptbill/billinfo" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Next</p>
  </a>
</div>
<Modal open={isOpenModal} on:cancel={() => isOpenModal=false}>
  <h1 class="text-center text-4xl pt-5 pb-5">Pay Options</h1>
  <h2> </h2>
  <br />
  <div class="w-ful px-20">
      <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="year-bill">
        Year Bill
      </label>
      <div class="relative">
        <select class="block appearance-none text-3xl w-full bg-gray-200 border-2 border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="year-bill">
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-8 w-8" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
  </div>
  <br/>
  <div class="w-ful px-20">
      <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" for="year-bill">
        Quarter to Bill
      </label>
      <div class="relative">
        <select class="block appearance-none w-full text-3xl bg-gray-200 border-2 border-gray-700 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="year-bill">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-8 w-8" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
  </div>
  <br />
  <hr />
  <br />
  <div class="m-auto items-center flex">
      <button alt="Queueing System" class="bg-gray-400 h-20 pl-20 text-center w-64 rounded-lg shadow-xl pt-1 border-slate-400 flex border" on:click={closeModal} >
          <div class="">
              <p class="pt-5 font-bold text-xl">Cancel</p>
          </div> 
      </button>
      <a href="rptbill/billinfo" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
          <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
          <p class="pt-5 font-bold text-xl">OK</p>
      </a>
  </div>
</Modal>
<Nav />



<footer class="mb-96 mt-20">

</footer>
