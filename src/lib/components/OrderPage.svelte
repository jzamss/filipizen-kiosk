<script>
  import Input from '$lib/ui/input.svelte';
  import Nav from '$lib/nav.svelte';
  import Keyboard from '$lib/keyboard/keyboard.svelte';
  import Title from '$lib/title.svelte';
  import Label from '$lib/ui/label.svelte';
  import Onecolumn from '$lib/ui/one-column.svelte'

  let yes = false;





</script>

<Title module="Your Order"/>

<div class="px-32">
  <Onecolumn>
    <Label caption='Agency' class="text-2xl text-gray-700"></Label>
    <Label caption='General Santos' class="text-3xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Paid By Address' class="text-2xl text-gray-700"></Label>
    <Label caption='Tampakan' class="text-3xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Paid By' class="text-2xl text-gray-700"></Label>
    <Label caption='Pedro' class="text-3xl bg-white border-2 p-2 text-black-700 border-black"></Label>
  </Onecolumn>
  <Onecolumn>
    <Label caption='Amount' class="text-2xl text-gray-700"> </Label> 
    <Label caption='2,571.35' class=" text-3xl border-2 p-2 text-right text-black-700"></Label>
  </Onecolumn>
  <br />
  <Onecolumn>
      <label>
          <input type=checkbox checked={yes}>
          <span class="text-2xl">I acknowledge and agree to the Terms and Condition of this e-payment facility.</span>
      </label>
  </Onecolumn>
  
</div>

<br />
<div class="inline-flex m-auto">
<a href="/" alt="menu" class="mr-10 m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
    <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
    <p class="pt-5 font-bold text-xl">Gcash</p>
</a>
<a href="/" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
  <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
  <p class="pt-5 font-bold text-xl">PayMaya</p>
</a>
</div>

<Nav />

<footer class="mb-20 mt-20">

</footer>
