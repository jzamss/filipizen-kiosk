<script>
    import Input from '$lib/ui/input.svelte';
    import Nav from '$lib/nav.svelte';
    import Keyboard from '$lib/keyboard/keyboard.svelte';
    import Title from '$lib/title.svelte';
    import Label from '$lib/ui/label.svelte';
    import Onecolumn from '$lib/ui/one-column.svelte'

    let registerKeyListener = null;
    let handleKey = null;
    let entity = { name: '', address: '' };





</script>


<Title module="Confirm Transaction"/>

<form class="m-auto w-full max-w-lg">
    <Onecolumn>
      <Label caption='Paid By Name *'></Label>
      <Input bind:value={entity.name} name="name" {registerKeyListener} placeholder="Enter Name"></Input>
    </Onecolumn>
    <Onecolumn>
      <Label caption='Paid By Address*'> </Label> 
      <Input bind:value={entity.address} name="address" {registerKeyListener} placeholder="Enter Address"></Input>
    </Onecolumn>
    <br />
    <Onecolumn>
      <Label caption='Payment Details'> </Label> 
      <Input value='2,200.04' class='text-5xl'></Input>
    </Onecolumn>
</form>

<br />
<div class="inline-flex m-auto">
  <a href="/order" alt="menu" class="m-auto h-20 text-center bg-white bg-opacity-25 w-64  rounded-lg shadow-xl pt-1 border-slate-400 flex border">
      <img src="/static/icons/back.png" alt="menu" class="h-12 pr-5 mt-3 rotate-180"/>
      <p class="pt-5 font-bold text-xl">Continue</p>
  </a>
</div>

<Nav />

<footer class="mb-96 mt-20">
	<slot name="keyboard">
		<Keyboard
			bind:registerKeyListener
			bind:handleKey
			on:keydown={(event) => (entity = handleKey(entity, event))}
			on:return={() => console.log('return pressed')}
		/>
	</slot>
</footer>
