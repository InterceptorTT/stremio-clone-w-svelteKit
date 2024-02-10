<script>
	import ciak from '$lib/assets/ciak.png';
	import add from '$lib/assets/add.png';
	import play from '$lib/assets/play.png';
	import imdb from '$lib/assets/imdb.png';
	import { page } from '$app/stores';
	import Card from '$lib/components/card.svelte';
	export let data;
	$: searchedResults = data.searchResults.results;
	$: media_type = $page.params.media_type;
	let dataCard;

	async function handleCardClick(e) {
		const id = e.target.id;
		const res = await fetch(
			`https://api.themoviedb.org/3/${media_type}/${id}?api_key=966a77059127e7b60ef4f370451e46f5`
		);
		dataCard = await res.json();
		console.log(dataCard);
	}
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
							<div class="h-[350px] overflow-y-scroll scrollable_div">
								<h1 class="text-white text-center backdrop-blur-sm text-4xl mt-5 font-black">
									{dataCard.title}
								</h1>
								<h2 class="text-center text-white mb-5">{dataCard.tagline}</h2>
								<div class="flex justify-evenly items-center my-10">
									<h3 class="text-white backdrop-blur-sm font-bold">{dataCard.runtime} min</h3>
									<h3 class="text-white backdrop-blur-sm font-bold">
										{dataCard.release_date.slice(0, 4)}
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
														class=""
														src={'https://image.tmdb.org/t/p/w200' + company.logo_path}
														alt={company.logo_path}
													/>
												</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="flex justify-evenly items-center translate-y-10">
								<button class="rounded-full bg-zinc-400 hover:bg-zinc-300 p-2 cursor-pointer"
									><img class="h-6 w-6" src={add} alt={add} /></button
								>
								<button class="rounded-full bg-zinc-400 hover:bg-zinc-300 p-2 cursor-pointer"
									><img class="h-6 w-6" src={ciak} alt={ciak} /></button
								>
								<button
									class="rounded-full bg-zinc-400 p-2 px-4 flex items-center gap-3 text-white hover:bg-green-400 cursor-pointer"
									><img class="h-6 w-6" src={play} alt={play} /> Play</button
								>
							</div>
						</div>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

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
