import styled from '@emotion/styled'
import { Card as AntCard, Typography } from 'antd'
import { CSSProperties } from 'react'

const { Title: AntTitle } = Typography

export const Card = styled(AntCard)`
  min-height: 19rem;
`

export const cardBodyStyles: CSSProperties = {
  padding: '0',
  display: 'flex',
}

export const PosterImage = styled.img`
  height: 19rem;
  width: 12rem;
  cursor: pointer;
`

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  padding: 1.6rem;
  width: 100%;
`
export const Header = styled.div``

export const Footer = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const Title = styled(AntTitle)`
  /* Ant overrides */
  margin: 0 !important;
`

export const Subtitle = styled.span`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 !important;
`
