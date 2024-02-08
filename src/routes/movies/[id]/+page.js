export async function load({params, fetch}){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=966a77059127e7b60ef4f370451e46f5`)
    const data = await res.json()
    return {
        movie : data
    }
}