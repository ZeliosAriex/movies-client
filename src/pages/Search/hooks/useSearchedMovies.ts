import { useSearchPageState } from '../../../contexts/pageContexts/Search'
import {
  Movie,
  MoviesResponse,
  queryMovieSearch,
  queryPopularMovies,
} from '../../../api/tmdb'
import { useQuery } from 'react-query'
import { useEffect } from 'react'

export const useSearchedMovies = () => {
  const { state, dispatch, actions } = useSearchPageState()
  const searchQuery = state?.searchQuery
  const currentPage = state?.currentPage

  const queryKey = searchQuery
    ? 'fetchMovieSearch'
    : 'fetchPopularMovies'
  const queryFn = searchQuery
    ? () => queryMovieSearch(searchQuery, currentPage)
    : () => queryPopularMovies(currentPage)

  const { refetch, isLoading, isFetching } =
    useQuery<MoviesResponse>(queryKey, queryFn, {
      enabled: false,
      onSuccess: ({
        results,
        page,
        total_pages,
        total_results,
      }) => {
        const normalizedData: Movie[] = results.map(
          (m) => ({
            id: m.id,
            title: m.title,
            releaseDate: m.release_date,
            posterPath: m.poster_path
              ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
              : undefined,
            voteAverage: m.vote_average,
          })
        )

        dispatch(
          actions.setMovies({
            data: normalizedData,
            page,
            totalPages: total_pages,
            totalResults: total_results,
          })
        )
      },
    })

  useEffect(() => {
    dispatch(actions.setLoading(isLoading || isFetching))
  }, [isLoading, isFetching, dispatch, actions])

  useEffect(() => {
    refetch()
  }, [refetch, searchQuery, currentPage])
}
