export const queryMovieSearch = async (
  query: string,
  page = 1
) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&language=es-ES&page=${page}&query=${query}`
  )
  return res.json()
}
