import React from 'react'
import { useSearchPageState } from '../../../contexts/pageContexts/Search'
import { CardsContainer, Container } from './styled'
import { MovieCard } from '../MovieCard'
import { Pagination, Spin } from 'antd'
import { Space } from '../../layout'
import { PaginationProps } from 'antd/lib/pagination/Pagination'

export const MovieCardList = () => {
  const { state, dispatch, actions } = useSearchPageState()
  const movies = state.movies

  const paginationProps: PaginationProps = {
    total: movies?.totalResults ?? 0,
    pageSize:
      (movies?.totalResults ?? 0) /
      (movies?.totalPages ?? 1),
    showSizeChanger: false,
    current: movies?.page,
    onChange: (page) =>
      dispatch(actions.setCurrentPage(page)),
  }

  const pagination = <Pagination {...paginationProps} />

  if (state.loading) return <Spin size='large' />

  if (!state.movies?.data.length)
    return <h1>Didnt find any results...</h1>

  return (
    <Container>
      {pagination}
      <Space orientation='vertical' amount='1.6rem' />
      <CardsContainer>
        {state.movies?.data.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </CardsContainer>
      <Space orientation='vertical' amount='1.6rem' />
      {pagination}
    </Container>
  )
}
