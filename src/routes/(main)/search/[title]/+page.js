export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${params.title}&include_adult=false&language=en-US&page=1&api_key=966a77059127e7b60ef4f370451e46f5`)
    const data = await res.json()
    return {
        movie: data
    }
}