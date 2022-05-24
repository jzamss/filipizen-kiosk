<script>
	let dt = 'May 13, 2022';
	let time = '2:40 PM';
</script>


<footer class="p-5 flex absolute bottom-0 w-full bg-white">
    <div class="w-2/4">
        <a href="/" alt="home icon link"><img src="/static/icons/home.svg" alt="home icon" class="w-20 ml-20" /></a>
    </div>
    <div class="w-2/5">
        <a href="/" alt="LGU Logo">
            <img src="/static/icons/rameses.svg" alt="Rameses Systems Inc Logo" class="ml-8 w-40 bottom-0 absolute "/>
        </a>
    </div>
    
    <div class="w-2/6 time pt-3">
        <p class="text-3xl pl-20 text-gray-600">{time}</p>
        <p class="text-1xl pl-20 text-gray-600">{dt}</p>
    </div>
</footer>
