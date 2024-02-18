<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import Card from '$lib/components/card.svelte';
	import '@splidejs/svelte-splide/css';
	export let data;
	const movies = data.dataMovies.results;
	function chunkArray(array, chunkSize) {
		const chunks = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			chunks.push(array.slice(i, i + chunkSize));
		}
		return chunks;
	}

	const chuckedArray = chunkArray(movies, 7);
</script>

<section>
	<h1 class="text-white">Upcoming movies</h1>
	<Splide options={ { rewind: true , autoplay: true} } aria-label="My Favorite Images">
		{#each chuckedArray as chunk}
			<SplideSlide>
				<div class="flex flex-nowrap items-center gap-2 w-full">
					{#each chunk as movie}
					<div class="">
						<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/movies/{movie.id}"
						><Card image={movie.poster_path} title={movie.title} id={movie.id} /></a
						>
					</div>
					{/each}
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</section>
