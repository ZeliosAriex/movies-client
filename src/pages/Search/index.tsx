import React, { FC } from 'react'
import { SearchPageProps } from './types'
import {
  ContentFrame,
  SimpleLayout,
  Space,
} from '../../components'
import { Typography } from 'antd'

const { Title } = Typography

const Search: FC<SearchPageProps> = () => {
  return (
    <SimpleLayout>
      <ContentFrame>
        <Space amount='1.6rem' orientation='vertical' />
        <Title>Movie Search</Title>
      </ContentFrame>
    </SimpleLayout>
  )
}

export default Search
