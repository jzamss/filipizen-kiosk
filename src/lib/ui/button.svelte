<script>
	export let caption;

	function openModal() {
    isOpenModal = true;
  }

  function closeModal() {
    isOpenModal = false;
  }
</script>

<button alt="Queueing System" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64 rounded-lg shadow-xl pt-1 mr-10 border-slate-400 flex border">
	<p class="pt-5 pl-20 font-bold text-xl">{caption}</p>
</button>
