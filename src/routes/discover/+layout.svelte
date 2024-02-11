<script>
	import { goto } from '$app/navigation';
	$: type = 'movie';
	$: genre = 'popular';
	$: console.log(type, genre);

	function handleSubmit() {
		goto(`/discover/${type}/${genre}`);
	}
</script>

<section>
	<div>
		<form on:submit|preventDefault={handleSubmit} class="flex justify-start gap-10 py-2 mx-2">
			<select
				class="rounded-xl p-2 bg-[#1E1C2E] text-white w-44"
				on:change|preventDefault={(e) => (type = e.target.value)}
			>
				<option value="movie">Movie</option>
				<option value="tv">Tv</option>
			</select>
			<select
				class="rounded-xl p-2 bg-[#1E1C2E] text-white w-44"
				on:change|preventDefault={(e) => (genre = e.target.value)}
			>
				<option value="popular">Popular</option>
				<option value="top_rated">Top rated</option>
				<option value="upcoming">Upcoming</option>
				<option value="on_the_air">Now playing</option>
			</select>
			<button type="submit" class="text-white bg-purple-500 rounded-xl hover:bg-purple-300 py-1 px-2">Search</button>
		</form>
		<div>
			<slot />
		</div>
	</div>
</section>
