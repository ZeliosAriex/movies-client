import { Movie } from '../../../api/tmdb'
import { SearchPageAction } from './actions'
import { PaginatedData } from '../../../types'

export interface SearchPageState {
  searchQuery: string
  currentPage: number
  movies: PaginatedData<Movie[]> | undefined
  loading: boolean
}

export const searchPageInitalState: SearchPageState = {
  searchQuery: '',
  currentPage: 1,
  movies: undefined,
  loading: false,
}

export const searchPageReducer = (
  draft: SearchPageState,
  action: SearchPageAction
): SearchPageState => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      console.log(action)
      draft.searchQuery = action.payload
      return draft

    case 'SET_MOVIES':
      console.log(action)
      draft.movies = action.payload
      return draft

    case 'SET_LOADING':
      console.log(action)
      draft.loading = action.payload
      return draft

    case 'SET_CURRENT_PAGE':
      console.log(action)
      draft.currentPage = action.payload
      return draft

    default:
      return draft
  }
}
