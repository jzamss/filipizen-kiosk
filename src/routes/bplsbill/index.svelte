<script>
	import Header from '$lib/header-master.svelte';
	import Title from '$lib/title.svelte';
	import Nav from '$lib/nav.svelte'
</script>


<div class="h-20 bg-blue-800">
    <h1 class="text-5xl font-bold text-white text-center pt-5">Business Permit</h1>
</div>
<Title module="Select Business Permit"/>


<main class="mb-auto">
	<div class="grid grid-cols-2 grid-rows-2 m-20" >
		<a href="/" alt="Queueing System" class="m-auto ">
			<div class="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-40 mb-5">
				<p class="w-96 text-4xl font-bold uppercase">Apply New</p>
			</div> 
		</a>
		<a href="/" alt="Real Property Tax Billing" class="m-auto">
			<div class="flex items-center  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-40 mb-5">
				<p class="w-96 text-4xl font-bold uppercase">Renewal</p>
			</div> 
		</a>
		<a href="bplsbill/pay" alt="Community Tax Certification" class="m-auto">
			<div class="flex items-center  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-40 mb-5">
				<p class="w-96 text-4xl font-bold uppercase">Pay</p>
			</div> 
		</a>
		<a href="/" alt="Community Tax Certification" class="m-auto">
			<div class="flex items-center  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-40 mb-5">
				<p class="w-96 text-4xl font-bold uppercase">Add Line</p>
			</div> 
		</a>
		<a href="/" alt="Community Tax Certification" class="m-auto">
			<div class="flex items-center  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-40 mb-5">
				<p class="w-96 text-4xl font-bold uppercase">Retire</p>
			</div> 
		</a>
	</div>
</main>
<Nav />