<script>
	import { Carousel, Thumbnails } from 'flowbite-svelte';
	export let data;
	const movies = data.dataMovies.results;
	const images = movies.map((element) => {
		return {
			alt: element.title || element.name,
			src: `https://image.tmdb.org/t/p/w200${element.poster_path}`
		};
	});
  let index = 0
  let forward = true
  let image;
</script>

<section>
	<div class="w-full h-96">
		<Carousel {images} bind:index  imgClass="object-contain h-full w-fit rounded-sm" duration=3000 let:Controls on:change={({ detail }) => (image = detail)}>
      <Controls/>  
    </Carousel>
    <div>
      <h1 class="text-center text-white">{image?.alt}</h1>
    </div>
    <Thumbnails {images} {forward} bind:index />

	</div>
</section>
