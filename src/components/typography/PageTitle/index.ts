import styled from '@emotion/styled'
import { Typography } from 'antd'
import { mq } from '../../../utils'

const { Title } = Typography

export const PageTitle = styled(Title)`
  text-align: center;

  ${mq.md} {
    text-align: left;
  }
`
