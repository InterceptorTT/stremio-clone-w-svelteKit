<script>
	import { goto } from '$app/navigation';
	import { movie } from '$lib/store.js';
	import logo from '$lib/assets/logo.png';
	import search from '$lib/assets/search.png';
	import fullScreen from '$lib/assets/full-screen.png';
	import user from '$lib/assets/user.png';
	$: searchedMovie = ""

	function handleSubmit(e){
		e.preventDefault()
		movie.set(searchedMovie)
		goto(`/search/${$movie}`)
	}
	function handleFullScreen(){
		const html = document.getElementsByTagName("html")
		
	}
</script>

<header
	class="px-5 z-50 h-32 flex justify-between flex-row items-center fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-black via-black to-blue-900"
>
	<div><img src={logo} alt={logo} /></div>
	<div class="rounded-3xl border-solid border-slate-300 border-2 p-2 bg-white">
		<form class="flex items-center" on:submit={handleSubmit}>
			<input type="text" class="bg-purple" bind:value={searchedMovie} />
			<button type="submit"><img src={search} alt={search} /></button>
		</form>
	</div>
	<div class="flex">
		<button on:click={handleFullScreen}><img src={fullScreen} alt={fullScreen}/></button>
		<button><img src={user} alt={user} /></button>
	</div>
</header>
