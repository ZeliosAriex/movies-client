import styled from '@emotion/styled'
import { Input } from 'antd'

const { Search: AntSearch } = Input

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Search = styled(AntSearch)`
  max-width: 612px;
`
