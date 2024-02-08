<script>
	import Card from '$lib/components/card.svelte';
	export let data;
	const movies = data.movies.results;
	const series = data.series.results;
	let slicedMovie = movies.slice(0, 6);
	let slicedSeries = series.slice(0, 6);
	
</script>

<section class="">
	<div class="popular_movie || w-full mx-5">
		<h2 class="text-white text-xl m-2">Popular movies</h2>
		<div class="grid grid-cols-6">
			{#each slicedMovie as movie}
				<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/movies/{movie.id}"><Card image={movie.poster_path} title={movie.title}/></a>
			{/each}
		</div>
	</div>

    <div class="popular_series || w-full mx-5">
		<h2 class="text-white text-xl m-2">Popular TV series</h2>
		<div class="grid grid-cols-6">
			{#each slicedSeries as series}
				<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/series/{series.id}"><Card image={series.poster_path} title={series.title}/></a>
			{/each}
		</div>
	</div>
</section>
