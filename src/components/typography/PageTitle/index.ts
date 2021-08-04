import styled from '@emotion/styled'
import { Typography } from 'antd'

const { Title } = Typography

export const PageTitle = styled(Title)<{ color?: string }>`
  text-align: center;

  // AntD Overrides
  color: ${({ color }) => color ?? '#000'} !important;
  margin-bottom: 0 !important; // Dont use margins, use spacer components
`
