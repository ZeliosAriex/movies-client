import React, { FC } from 'react'
import { SearchPageProps } from './types'
import {
  ContentFrame,
  Hero,
  PageTitle,
  SimpleLayout,
  Space,
} from '../../components'
import { MovieSearchInput } from '../../components/pageSections/Search'
import { useSearchedMovies } from './hooks'
import { MovieCardList } from '../../components/dataDisplay'

const Search: FC<SearchPageProps> = () => {
  useSearchedMovies()

  return (
    <SimpleLayout>
      <Hero>
        <ContentFrame>
          <PageTitle color='#FFF'>Movie Search</PageTitle>
          <Space amount='2.4rem' orientation='vertical' />

          <MovieSearchInput />
        </ContentFrame>
      </Hero>
      <ContentFrame>
        <Space amount='1.6rem' orientation='vertical' />

        <MovieCardList />
        <Space amount='1.6rem' orientation='vertical' />
      </ContentFrame>
    </SimpleLayout>
  )
}

export default Search
