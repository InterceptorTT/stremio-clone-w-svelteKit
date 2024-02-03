<script>
	import { onMount } from 'svelte';

    /* const movie = data.movie
    console.log(movie) */
    let movies = []
    onMount(() => {
       const storedMovies =  localStorage.getItem("movies")
       movies = JSON.parse(storedMovies)
    })
    console.log(movies)
</script>

<!-- <img src={movie.poster_path} alt={movie.title}> -->
{#each movies as movie }
    <h1>{movie.title}</h1>    
{/each}