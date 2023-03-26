const Sponge = document.querySelector('#Sponge')
const Pat = document.querySelector('#Pat')
const Krabs = document.querySelector('#Krabs')
const Plank = document.querySelector('#Plank')
const Sand = document.querySelector('#Sand')
const Larry = document.querySelector('#Larry')
const Squid = document.querySelector('#Squid')
const Pearly = document.querySelector('#Pearly')

document.querySelector('#Spongebob').addEventListener('click', Spongebob)
document.querySelector('#Patrick').addEventListener('click', Patrick)
document.querySelector('#MrKrabs').addEventListener('click', MrKrabs)
document.querySelector('#Plankton').addEventListener('click',Plankton)
document.querySelector('#Sandy').addEventListener('click', Sandy)
document.querySelector('#LarryLobster').addEventListener('click', LarryLobster )
document.querySelector('#Squidward').addEventListener('click', Squidward)
document.querySelector('#Pearl').addEventListener('click', Pearl)

function Spongebob(){
	Pat.classList.add("hidden")
	Krabs.classList.add("hidden")
	Plank.classList.add("hidden")
	Sand.classList.add("hidden")
	Larry.classList.add("hidden")
	Squid.classList.add("hidden")
	Pearly.classList.add("hidden")
	Sponge.classList.toggle("hidden")
}

function Patrick(){
Sponge.classList.add('hidden')
	Krabs.classList.add('hidden')
	Plank.classList.add('hidden')
	Sand.classList.add('hidden')
	Larry.classList.add('hidden')
	Squid.classList.add('hidden')
	Pearly.classList.add('hidden')
	Pat.classList.toggle("hidden")
}

function MrKrabs(){
	Sponge.classList.add('hidden')
	Plank.classList.add('hidden')
	Sand.classList.add('hidden')
	Larry.classList.add('hidden')
	Squid.classList.add('hidden')
	Pearly.classList.add('hidden')
	Pat.classList.add('hidden')
	Krabs.classList.toggle("hidden")
}

function Plankton(){
	Sponge.classList.add('hidden')
	Krabs.classList.add('hidden')
	Sand.classList.add('hidden')
	Larry.classList.add('hidden')
	Squid.classList.add('hidden')
	Pearly.classList.add('hidden')
	Pat.classList.add('hidden')
	Plank.classList.toggle("hidden")
}


function Sandy(){
	Sponge.classList.add('hidden')
	Krabs.classList.add('hidden')
	Plank.classList.add('hidden')
	Larry.classList.add('hidden')
	Squid.classList.add('hidden')
	Pearly.classList.add('hidden')
	Pat.classList.add('hidden')
	Sand.classList.toggle("hidden")
}

function LarryLobster (){
	Sponge.classList.add('hidden')
	Krabs.classList.add('hidden')
	Sand.classList.add('hidden')
	Plank.classList.add('hidden')
	Squid.classList.add('hidden')
	Pearly.classList.add('hidden')
	Pat.classList.add('hidden')
	Larry.classList.toggle("hidden")
}


function Squidward (){
	Sponge.classList.add('hidden')
	Krabs.classList.add('hidden')
	Sand.classList.add('hidden')
	Larry.classList.add('hidden')
	Pearly.classList.add('hidden')
	Pat.classList.add('hidden')
	Plank.classList.add("hidden")
	Squid.classList.toggle('hidden')
}

function Pearl (){
	Sponge.classList.add('hidden')
	Krabs.classList.add('hidden')
	Sand.classList.add('hidden')
	Larry.classList.add('hidden')
	Squid.classList.add('hidden')
	Pat.classList.add('hidden')
	Plank.classList.add("hidden")
	Pearly.classList.toggle('hidden')
}