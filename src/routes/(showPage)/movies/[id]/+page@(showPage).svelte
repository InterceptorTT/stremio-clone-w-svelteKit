<script>
	import add from '$lib/assets/add.png';
	import ciak from '$lib/assets/ciak.png';
	import back from '$lib/assets/back.png';
	import full_screen from '$lib/assets/full-screen.png';
	import user from '$lib/assets/user.png';
	import { goto } from '$app/navigation';
    import {navigating} from "$app/stores"
	export let data;
	const movie = data.movie;

	console.log({obj: $navigating});
    function handleBackButton(){
        console.log($navigating)
    }
</script>

<main
	class="h-screen bg-no-repeat bg-cover"
	style="background-image: url('https://image.tmdb.org/t/p/w500{movie.backdrop_path}'"
>
	<div class="py-10 px-20 backdrop-brightness-75 h-full">
		<header class="flex items-center justify-between">
			<button class="h8 w-8 cursor-pointer" on:click={handleBackButton}
				><img src={back} alt={back} /></button
			>
			<div class="flex gap-4">
				<button class="h8 w-8"><img src={full_screen} alt={full_screen} /></button>
				<button class="h8 w-8"><img src={user} alt={user} /></button>
			</div>
		</header>
		<section class="grid grid-cols-3 gap-5 mt-10">
			<div class="col-span-2">
				<div class=" text-white px-20 div_scrollable overflow-y-scroll h-[350px]">
					<h1 class="text-center font-black text-6xl capitalize mb-5">
						{movie.title || movie.name}
					</h1>
					<h2 class="text-2xl mb-5">{movie.release_date.slice(0, 4)}</h2>
					<div>
						<div class="mb-5">
							<h2 class="uppercase m-2">genres</h2>
							<div class="flex gap-3">
								{#each movie.genres as genre}
									<p
										class="px-4 py-2 bg-slate-300 bg-opacity-25 hover:bg-opacity-50 rounded-2xl backdrop-blur-xl"
									>
										{genre.name}
									</p>
								{/each}
							</div>
						</div>
						<div>
							<h2 class="uppercase m-2">Summary</h2>
							<p class="bg-black bg-opacity-50 rounded-xl p-2">{movie.overview}</p>
						</div>
					</div>
				</div>
				<div class="flex justify-start ml-20 gap-5 items-center mt-5">
					<button
						class="text-white flex items-center gap-4 bg-slate-300 bg-opacity-50 rounded-xl p-2 hover:bg-opacity-75"
						><img class="h-5 w-5" src={add} alt={add} /> Add to Library</button
					>
					<button
						class="text-white flex items-center gap-4 bg-slate-300 bg-opacity-50 rounded-xl p-2 hover:bg-opacity-75"
						><img class="h-5 w-5" src={ciak} alt={ciak} />Trailer</button
					>
				</div>
			</div>
			<div class="cbd col-span-1"></div>
		</section>
	</div>
</main>

<style>
	.div_scrollable::-webkit-scrollbar {
		width: 10px;
	}
	.div_scrollable::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: grey;
	}
</style>
