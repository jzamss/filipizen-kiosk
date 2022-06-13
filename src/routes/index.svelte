<script>
	import { fly, fade } from 'svelte/transition';
	import Title from '$lib/title.svelte';
	let visible = true;
	let menus = [
		{ name: 'Queuing', link: '/queue', icon: 'queue', color:'sky' },
		{ name: 'Business Permit', link: '/bpls', icon: 'bpls', color:'orange' },
		{ name: 'Real Property Tax', link: '/rpt', icon: 'rpt', },
		{ name: 'Cedula', link: '/', icon: 'cedula' },
		{ name: 'Police Clearance', link: '/', icon: 'police' },
		{ name: 'Water', link: '/', icon: 'water' }
	];
</script>

<div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel" in:fade={{ y: 200, duration: 1000 }}>
	<div class="carousel-inner relative w-full overflow-hidden">
	  <div class="carousel-item active relative float-left w-full">
		<img
		  src="/static/sliders/1.jpg"
		  class="block w-full"
		  alt="Wild Landscape"
		/>
	  </div>
	  <div class="carousel-item relative float-left w-full">
		<img
		  src="/static/sliders/2.jpg"
		  class="block w-full"
		  alt="Camera"
		/>
	  </div>
	  <div class="carousel-item relative float-left w-full">
		<img
		  src="/static/sliders/3.png"
		  class="block w-full"
		  alt="Exotic Fruits"
		/>
	  </div>
	</div>
	<button
	  class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
	  type="button"
	  data-bs-target="#carouselExampleControls"
	  data-bs-slide="prev"
	>
	  <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
	  <span class="visually-hidden">Previous</span>
	</button>
	<button
	  class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
	  type="button"
	  data-bs-target="#carouselExampleControls"
	  data-bs-slide="next"
	>
	  <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
	  <span class="visually-hidden">Next</span>
	</button>
  </div>
<div class="flex flex-col justify-between bottom-60 w-full absolute">
	<Title module="Menu" />
	<main>
		<div class="grid grid-cols-3 grid-rows-3 mx-20" transition:fade>
			{#each menus as menu, idx}
				<div in:fly={{ y:200, duration: 250 * idx }} class="m-0.25 h-60 pt-0 modern">
					<a href={menu.link} alt={menu.name}>
						<div class="text-center" in:fade={{ y: 200, duration: 2000 }}>
							<div class="h-52 m-auto w-full {menu.icon}">
								<p class="pt-44 text-xl">{menu.name}</p>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</main>
</div>
