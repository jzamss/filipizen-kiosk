<script>
    import Input from '$lib/ui/input.svelte';
    import Nav from '$lib/nav.svelte';
    import Keyboard from '$lib/keyboard/keyboard.svelte';
    import Title from '$lib/title.svelte';
    import Label from '$lib/ui/label.svelte';
    import Onecolumn from '$lib/ui/one-column.svelte'

    let yes = false;





</script>

<div class="h-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <h1 class="text-5xl font-bold text-white text-center pt-3 pb-3">Payment </h1>
</div>
<Title module="Your Order"/>

<form class="m-auto w-full max-w-lg">
    <Onecolumn>
      <Label caption='Agency'></Label>
      <Input value='General Santos'></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='Paid By Address'> </Label> 
      <Input value='Tampakan'></Input>
    </Onecolumn>
    <Onecolumn>
        <Label caption='Paid By'></Label>
        <Input value='Pedro'></Input>
      </Onecolumn>
      <Onecolumn>
        <Label caption='Amount'> </Label> 
        <Input value='2,0123'></Input>
      </Onecolumn>
    <br />
    <Onecolumn>
        <label>
            <input type=checkbox checked={yes}>
            I acknowledge and agree to the Terms and Condition of this e-payment facility.
        </label>
    </Onecolumn>
</form>

<br />
<div class="inline-flex m-auto">
  <a href="/order" alt="menu" class="mr-10 m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Gcash</p>
  </a>
  <a href="/order" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
    <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
    <p class="pt-5 font-bold text-xl">PayMaya</p>
</a>
</div>

<Nav />

<footer class="mb-96 mt-20">

</footer>
