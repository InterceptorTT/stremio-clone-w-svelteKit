export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/${params.media_type}/${params.actual}?api_key=966a77059127e7b60ef4f370451e46f5`)
    const data = await res.json()

        return {
            searchResults: data
        }
} 