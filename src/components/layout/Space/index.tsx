import styled from '@emotion/styled'
import { SpaceProps } from './types'

export const Space = styled.div<SpaceProps>`
  width: ${({ amount, orientation }) =>
    orientation === 'horizontal' ? amount : '100%'};
  height: ${({ amount, orientation }) =>
    orientation === 'vertical' ? amount : '100%'};
`
