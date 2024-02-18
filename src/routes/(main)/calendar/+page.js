export async function load({ fetch }) {
	const resMovies = await fetch(
		'https://api.themoviedb.org/3/movie/upcoming?api_key=966a77059127e7b60ef4f370451e46f5'
	);
	const dataMovies = await resMovies.json();

	return {
		dataMovies: dataMovies
	};
}
