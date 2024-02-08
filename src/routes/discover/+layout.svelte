<script>
    import {goto} from "$app/navigation"
    $: type = "movie"
    $: genre = "popular"
    $: console.log(type, genre)

    function handleSubmit(){
        goto(`/discover/${type}/${genre}`)
    }
</script>

<section>
    <div>
            <form on:submit|preventDefault={handleSubmit}>
                <select on:change|preventDefault={(e) => type = e.target.value}>
                    <option value="movie">Movie</option>
                    <option value="tv">Tv</option>
                </select>
                <select on:change|preventDefault={(e) => genre = e.target.value}>
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top rated</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="on_the_air">Now playing</option>
                </select>
                <button type="submit" class="text-white bg-purple-500 ">Search</button>
            </form>
        <div>
            <slot/>
        </div>
    </div>
</section>