import React, { FC } from 'react'
import { SearchPageProps } from './types'
import {
  ContentFrame,
  PageTitle,
  SimpleLayout,
  Space,
} from '../../components'

const Search: FC<SearchPageProps> = () => {
  return (
    <SimpleLayout>
      <ContentFrame>
        <Space amount='1.6rem' orientation='vertical' />
        <PageTitle>Búsqueda de películas</PageTitle>
      </ContentFrame>
    </SimpleLayout>
  )
}

export default Search
