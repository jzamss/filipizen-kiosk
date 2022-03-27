<script>
	export let name;


</script>



<label class="block uppercase tracking-wide font-bold mb-2 text-3xl text-gray-700" for="{name}">
  {name}
</label>
<div class="relative">
  <form>
    <slot></slot>
  </form>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-8 w-8" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
<br/>