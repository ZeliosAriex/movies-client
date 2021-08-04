export const queryPopularMovies = async (page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=8f781d70654b5a6f2fa69770d1d115a3&language=es-ES&page=${page}`
  )
  return res.json()
}
