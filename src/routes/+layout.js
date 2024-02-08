export const prerender = true

export async function load({fetch}){
    const movieResonse = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=966a77059127e7b60ef4f370451e46f5")
    const movieData = await movieResonse.json()

    const seriesResponse = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=966a77059127e7b60ef4f370451e46f5")
    const seriesData = await seriesResponse.json()

    return {
        movies: movieData,
        series: seriesData
    }
}



  