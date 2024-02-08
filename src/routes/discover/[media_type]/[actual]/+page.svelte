<script>
    import {page} from "$app/stores"
    import Card from "$lib/components/card.svelte"
    export let data
    $: searchedResults = data.searchResults.results
    $: media_type = $page.params.media_type

</script>

<section class="w-full">
        <h2 class="text-white text-xl m-2">Search for : {$page.params.media_type} & {$page.params.actual}</h2>
        <div class="grid grid-cols-2 gap-10">
            <div class="grid grid-cols-3">
                {#each searchedResults as movie}
				<a class="m-2 hover:scale-105 hover:transition-all z-10" href="/{media_type == "movie" ? "movies" : "series"}/{movie.id}"><Card image={movie.poster_path} title={movie.title || movie.name}/></a>
                {/each}
            </div>
            <div class="cbd"></div>
        </div>
</section>