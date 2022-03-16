<!-- src/Modal.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let isOpenModal;

  function closeModal() {
      isOpenModal = false;
      dispatch('closeModal', { isOpenModal });
  }
</script>

<div id="background" style="--display: {isOpenModal ? 'block' : 'none'};" on:click={closeModal}></div>
<div id="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
  <h1 class="text-center text-4xl pt-5 pb-5">Queue Ticket</h1>
  <h2 class="text-center text-2xl pt-5">Your Queue Number</h2>
  <h1 class="text-center text-9xl pt-5 pb-5 text-bold mb-5">R-101</h1>
  <button type="button" on:click={closeModal} class="flex items-center text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Print</button>
  <p class="text-center text-1xl pt-5">Please wait until your number is called</p>
</div>

<style>
  #background {
      display: var(--display);
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: gray;
      opacity: .5;
      text-align: center;
  }

  #modal {
      display: var(--display);
       position: fixed;
      z-index: 2;
      top: 50%;
      left: 50%;
      height: 450px;
      width: 400px;
      transform: translate(-50%, -50%);
      background: #fff;
      filter: drop-shadow(0 0 20px #333);
  }
  #modal h2{
    border-top: 2px solid black;
  }
  #modal button{
    margin: auto;
  }
  #modal span{
    text-align: center;
  }

</style>