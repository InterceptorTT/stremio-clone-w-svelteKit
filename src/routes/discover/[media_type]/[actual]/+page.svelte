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

<section class="w-full">
	<h2 class="text-white text-xl m-2">
		Search for : {$page.params.media_type} & {$page.params.actual}
	</h2>
	<div class="grid grid-cols-2 gap-10">
		<div class="grid grid-cols-3">
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
		<div class="rounded-lg">
			{#if loading}
				<h1>Loading...</h1>
			{/if}
			{#if dataCard}
				<div
					class="h-full bg-contain bg-no-repeat blur-md bg-scroll"
					style="background-image: url('https://image.tmdb.org/t/p/w500{dataCard.poster_path}')"
				>
                <a href={media_type == "movie" ? "/movies" : "/series" /dataCard.id}>
                    <h1 class="">{dataCard.title || dataCard.name}</h1>
                    <div>
                        <h2>{dataCard.runtime}</h2>
                        <h2>{dataCard.release_date.slice(-4)}</h2>
                        <h2>{dataCard.vote_average}</h2>
                    </div>
                </a>
                </div>
			{/if}
		</div>
	</div>
</section>

