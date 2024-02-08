<script>
	export let image;
	export let title;
	export let id	
</script>

	<card class="hover:scale-105 hover:transition-all">
		<img id={id} class="rounded-2xl" src={'https://image.tmdb.org/t/p/w300' + image} alt={title} />
		<h2 class="text-white text-center">{title}</h2>
	</card>
