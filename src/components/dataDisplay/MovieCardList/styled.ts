import styled from '@emotion/styled'
import { mq } from '../../../utils'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 0.8rem;

  ${mq.md} {
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 1.6rem;
  }

  .movie-card {
    width: 100%;

    ${mq.md} {
      width: 48%;
    }

    ${mq.lg} {
      width: 49%;
    }

    ${mq.xl} {
      width: 32%;
    }
  }
`
