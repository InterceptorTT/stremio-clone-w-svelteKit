<script>
	import { movie } from '$lib/store.js';
	import Card from '$lib/components/card.svelte';
	export let data;
	$: searchedMovie = data.movie.results;

</script>

<section>
	<div class="search_movie || w-full mx-5">
		<h2 class="text-white text-xl m-2">Search for: {$movie}</h2>
        <h1 class="bg-purple-800 text-white rounded-lg p-2 w-16 text-center my-3 translate-x-5">Movie</h1>
		<div class="grid grid-cols-6">
			{#each searchedMovie as movie}
				{#if movie.media_type === 'movie'}
					<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/movies/{movie.id}"
						><Card
							image={movie.poster_path || movie.profile_path}
							title={movie.title || movie.name}
						/></a
					>
				{/if}
			{/each}
		</div>
        <h1 class="bg-purple-800 text-white rounded-lg p-2 w-16 text-center my-3 translate-x-5">Tv shows</h1>
		<div class="grid grid-cols-6">
			{#each searchedMovie as movie}
				{#if movie.media_type === 'tv'}
					<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/series/{movie.id}"
						><Card
							image={movie.poster_path || movie.profile_path}
							title={movie.title || movie.name}
						/></a
					>
				{/if}
			{/each}
		</div>
	</div>
</section>
