<script>
	import _ from 'lodash';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Card from '$lib/components/card.svelte';
	export let data;
	const movies = data.dataMovies.results.slice(0, 18);
	const chuckedArray = _.chunk(movies, 6);
</script>

<section>
	<div class="">
		<h1 class="text-white">Upcoming movies</h1>
		<Splide options={{ rewind: true, autoplay: true, speed: 4000 }} aria-label="My Favorite Images">
			{#each chuckedArray as chunk}
				<SplideSlide>
					<div class="grid grid-cols-6">
						{#each chunk as movie}
							<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/movies/{movie.id}"
								><Card image={movie.poster_path} title={movie.title} id={movie.id} /></a
							>
						{/each}
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>
