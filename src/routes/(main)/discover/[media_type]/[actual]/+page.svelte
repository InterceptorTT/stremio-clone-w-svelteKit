<script>
	import AddRemove from "$lib/components/add_remove.svelte"
	import ciak from '$lib/assets/ciak.png';
	import add from '$lib/assets/add.png';
	import play from '$lib/assets/play.png';
	import imdb from '$lib/assets/imdb.png';
	import Card from '$lib/components/card.svelte';
	import { page } from '$app/stores';
	import { libraryContent } from '$lib/store.js';
	export let data;
	$: searchedResults = data.searchResults.results;
	$: media_type = $page.params.media_type;
	let dataCard;
	let isAlreadyInLibrary;

	async function handleCardClick(e) {
		const id = e.target.id;
		const res = await fetch(
			`https://api.themoviedb.org/3/${media_type}/${id}?api_key=966a77059127e7b60ef4f370451e46f5`
		);
		dataCard = await res.json();
	}

	/* function addToLibrary() {
		let library = localStorage.getItem('library')
			? JSON.parse(localStorage.getItem('library'))
			: [];
		isAlreadyInLibrary = library.some((movie) => movie.id === dataCard.id);

		if (isAlreadyInLibrary) {
			return alert('Already in the library!');
		} else {
			library.push(dataCard) && alert('Saved on library!');
			localStorage.setItem('library', JSON.stringify(library));
			libraryContent.update(() => library);
		}
	} */
</script>

<section class="w-full relative">
	<div class="grid grid-cols-5 gap-5">
		<div class="col-span-3 grid grid-cols-4 gap-5 h-screen overflow-y-scroll scrollable_div">
			{#each searchedResults as movie}
				<button on:click={handleCardClick} class="m-2 hover:scale-105 hover:transition-all z-10"
					><Card
						image={movie.poster_path}
						title={movie.title || movie.name}
						id={movie.id}
					/></button
				>
			{/each}
		</div>
		<div class="col-span-2 w-full">
			{#if !dataCard}
				<button on:click={handleCardClick} class="m-2 hover:scale-105 hover:transition-all z-10"
					><Card
						image={searchedResults[0].poster_path}
						title={searchedResults[0].title || searchedResults[0].name}
						id={searchedResults[0].id}
					/></button
				>
			{/if}
			{#if dataCard}
				<div
					class="rounded-3xl h-full bg-contain bg-no-repeat relative"
					style="background-image: url('https://image.tmdb.org/t/p/w500{dataCard.poster_path}')"
				>
					<a
						href={media_type == 'movie' ? `/movies/${dataCard.id}` : `/series/${dataCard.id}`}
						class="absolute inset-0 backdrop-blur-md rounded-xl backdrop-brightness-50"
					>
						<div class="relative">
							<div class="h-[500px] overflow-y-scroll scrollable_div">
								<h1 class="text-white text-center backdrop-blur-sm text-4xl mt-5 font-black">
									{dataCard.title || dataCard.name}
								</h1>
								<h2 class="text-center text-white mb-5">{dataCard.tagline}</h2>
								<div class="flex justify-evenly items-center my-10">
									<h3 class="text-white backdrop-blur-sm font-bold">{dataCard.runtime} min</h3>
									<h3 class="text-white backdrop-blur-sm font-bold">
										{dataCard.first_air_date || dataCard.release_date}
									</h3>
									<h3 class="text-white backdrop-blur-sm font-bold flex items-center gap-3">
										{dataCard.vote_average} <img src={imdb} alt={imdb} />
									</h3>
								</div>
								<p class="text-md font-regular text-white my-4 leading-6 px-5">
									{dataCard.overview}
								</p>
								<div class="px-5 my-5">
									<h4 class="uppercase text-zinc-500">genres</h4>
									<div class="flex flex-nowrap gap-5">
										{#each dataCard.genres as genre}
											<p class="text-white p-2 px-4 bg-slate-400 rounded-2xl">{genre.name}</p>
										{/each}
									</div>
								</div>
								<div class="px-5 my-5">
									<h4 class="uppercase text-zinc-500">Production companies</h4>
									<div class="flex flex-wrap gap-5">
										{#each dataCard.production_companies as company}
											<div>
												<img
													src={'https://image.tmdb.org/t/p/w200' + company.logo_path}
													alt={company.logo_path}
												/>
											</div>
										{/each}
									</div>
								</div>
							</div>
							<!-- <div class="flex justify-evenly items-center translate-y-10 z-10">
								{#if isAlreadyInLibrary }
									<button class="text-white">-</button>
								{/if}
									<button
										on:click={addToLibrary}
										class="rounded-full bg-zinc-400 hover:bg-zinc-300 p-2 cursor-pointer z-50"
										><img class="h-6 w-6" src={add} alt={add} /></button
									>								
								<button class="rounded-full bg-zinc-400 hover:bg-zinc-300 p-2 cursor-pointer z-50"
									><img class="h-6 w-6" src={ciak} alt={ciak} /></button
								>
								<button
									class="rounded-full bg-zinc-400 p-2 px-4 flex items-center gap-3 text-white hover:bg-green-400 cursor-pointer z-50"
									><img class="h-6 w-6" src={play} alt={play} /> Play</button
								>
							</div> -->
						
						</div>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
/* */

<style>
	.scrollable_div::-webkit-scrollbar {
		width: 10px;
		padding-inline: 10px;
	}
	.scrollable_div::-webkit-scrollbar-thumb {
		background-color: #211f39;
		border-radius: 5px;
	}
</style>
