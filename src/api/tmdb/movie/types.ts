import { PaginatedResponse } from '../types'

export interface Movie {
  id: number
  title: string
  posterPath: string | undefined
  releaseDate: string
  voteAverage: number
}

export interface MovieResponse {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}

export interface MoviesResponse
  extends PaginatedResponse<MovieResponse[]> {}
