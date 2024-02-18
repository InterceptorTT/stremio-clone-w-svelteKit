<script>
	import _ from 'lodash';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { libraryContent } from '$lib/store.js';
	import { onMount } from 'svelte';
	import Card from '$lib/components/card.svelte';
	export let data;
	const movies = data.movies.results.slice(0, 18);
	const series = data.series.results.slice(0, 18);

	onMount(() => {
		let elements = JSON.parse(localStorage.getItem('library'));
		libraryContent.set(elements);
	});
	const moviesBlocks = _.chunk(movies, 6);
	const seriesBlocks = _.chunk(series, 6);
</script>

<section class="">
	<div class="popular_movie || mx-5">
		<h2 class="text-white text-xl m-2">Popular movies</h2>
		<Splide
			options={{ rewind: true, autoplay: true, speed: 5000, autoHeight: true, duration: 4000 }}
			aria-label="My Favorite Images"
			
		>
			{#each moviesBlocks as block}
				<SplideSlide>
					<div class="grid grid-cols-6">
						{#each block as movie}
							<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/movies/{movie.id}"
								><Card image={movie.poster_path} title={movie.title} id={movie.id} /></a
							>
						{/each}
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<div class="popular_series || w-full mx-5">
		<h2 class="text-white text-xl m-2">Popular TV series</h2>
		<Splide
			options={{ rewind: true, autoplay: true, speed: 5000, autoHeight: true, duration: 3000 }}
			aria-label="My Favorite Images"
			
		>
			{#each seriesBlocks as block}
				<SplideSlide>
					<div class="grid grid-cols-6">
						{#each block as series}
							<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/series/{series.id}"
								><Card image={series.poster_path} title={series.name} id={series.id} /></a
							>
						{/each}
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>
