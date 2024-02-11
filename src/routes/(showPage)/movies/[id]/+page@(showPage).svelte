<script>
	import back from '$lib/assets/back.png';
	import full_screen from '$lib/assets/full-screen.png';
	import user from '$lib/assets/user.png';
	export let data;
	const movie = data.movie;
	console.log(movie.genres);
</script>

<main
	class="h-screen bg-no-repeat bg-cover"
	style="background-image: url('https://image.tmdb.org/t/p/w500{movie.backdrop_path}'"
>
	<div class="py-10 px-20 backdrop-brightness-75 h-full">
		<header class="flex items-center justify-between">
			<button class="h8 w-8"><img src={back} alt={back} /></button>
			<div class="flex gap-4">
				<button class="h8 w-8"><img src={full_screen} alt={full_screen} /></button>
				<button class="h8 w-8"><img src={user} alt={user} /></button>
			</div>
		</header>
		<section class="grid grid-cols-2 gap-5 mt-10">
			<div class="text-white px-20 cbd">
				<h1 class="text-center font-black text-4xl capitalize mb-5">{movie.title || movie.name}</h1>
				<h2 class="text-2xl mb-5">{movie.release_date.slice(0, 4)}</h2>
				<div>
					<h2 class="uppercase">genres</h2>
					<div class="flex gap-3">
						{#each movie.genres as genre}
							<p class="px-4 py- bg-opacity-50 rounded-2xl">{genre.name}</p>
						{/each}
					</div>
				</div>
			</div>
			<div class="cbd"></div>
		</section>
	</div>
</main>
