<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/card.svelte';
	export let data;
	$: searchedResults = data.searchResults.results;
	$: media_type = $page.params.media_type;
	let dataCard;
	let loading = false;

	async function handleCardClick(e) {
		loading = true;
		const id = e.target.id;
		const res = await fetch(
			`https://api.themoviedb.org/3/${media_type}/${id}?api_key=966a77059127e7b60ef4f370451e46f5`
		);
		dataCard = await res.json();
		console.log(dataCard);
		if (dataCard) {
			loading = false;
		}
	}
</script>

<section class="w-full relative">
	<h2 class="text-white text-xl m-2"></h2>
	<div class="grid grid-cols-5 gap-5">
		<div class="col-span-3 grid grid-cols-4 gap-5">
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
		<div class="col-span-2 w-full h-full">
			{#if dataCard}
				<div
					class="rounded-3xl h-full bg-contain bg-no-repeat relative"
					style="background-image: url('https://image.tmdb.org/t/p/w500{dataCard.poster_path}')">
					<a href={media_type == 'movie' ? `/movies/${dataCard.id}` : `/series/${dataCard.id}`} class="absolute inset-0 backdrop-blur-md rounded-xl backdrop-brightness-25">
						<h1 class="text-white text-center backdrop-blur-sm text-4xl mt-4">{dataCard.title}</h1>
						<div class="flex justify-evenly">
							<h2 class="text-white backdrop-blur-sm">{dataCard.runtime} min</h2>
							<h2 class="text-white backdrop-blur-sm">{dataCard.release_date.slice(0, 4)}</h2>
							<h2 class="text-white backdrop-blur-sm">{dataCard.vote_average} imdb vote</h2>
						</div>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
