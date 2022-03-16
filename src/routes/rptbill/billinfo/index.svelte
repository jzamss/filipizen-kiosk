<script>
	import Keyboard from '$lib/keyboard/keyboard.svelte';
	import Input from '$lib/ui/input.svelte';
	import Nav from '$lib/nav.svelte';
	import Title from '$lib/title.svelte';
  import Qtr from '$lib/option.svelte';


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
<Nav />

<Qtr isOpenModal={isOpenModal} on:closeModal={closeModal} />


<footer class="mb-96 mt-20">

</footer>
