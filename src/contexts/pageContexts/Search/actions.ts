// Action Types
import { PaginatedData } from '../../../types'
import { Movie } from '../../../api/tmdb'

export type SearchPageAction =
  | {
      type: 'SET_SEARCH_QUERY'
      payload: string
    }
  | {
      type: 'SET_MOVIES'
      payload: PaginatedData<Movie[]>
    }
  | {
      type: 'SET_LOADING'
      payload: boolean
    }
  | {
      type: 'SET_CURRENT_PAGE'
      payload: number
    }

// Action setters
const setSearchQuery = (
  payload: string
): SearchPageAction => ({
  type: 'SET_SEARCH_QUERY',
  payload,
})
const setMovies = (
  payload: PaginatedData<Movie[]>
): SearchPageAction => ({
  type: 'SET_MOVIES',
  payload,
})
const setLoading = (
  payload: boolean
): SearchPageAction => ({
  type: 'SET_LOADING',
  payload,
})
const setCurrentPage = (
  payload: number
): SearchPageAction => ({
  type: 'SET_CURRENT_PAGE',
  payload,
})

export type SearchPageActions = {
  setSearchQuery: typeof setSearchQuery
  setMovies: typeof setMovies
  setLoading: typeof setLoading
  setCurrentPage: typeof setCurrentPage
}

// Export action setters
export const actions: SearchPageActions = {
  setSearchQuery,
  setMovies,
  setLoading,
  setCurrentPage,
}
