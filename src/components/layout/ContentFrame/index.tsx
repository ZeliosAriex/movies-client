import styled from '@emotion/styled'
import { mq } from '../../../utils'

export const ContentFrame = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  max-width: ${({ theme }) =>
    theme.responsive.mobileContentWidth};

  ${mq.md} {
    max-width: ${({ theme }) =>
      theme.responsive.tabletContentWidth};
  }

  ${mq.lg} {
    max-width: ${({ theme }) =>
      theme.responsive.desktopContentWidth};
  }

  ${mq.xl} {
    max-width: ${({ theme }) =>
      theme.responsive.lgDesktopContentWidth};
  }
`
