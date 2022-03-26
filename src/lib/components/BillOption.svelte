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
        height: 500px;
        width: 700px;
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