import React, { FC } from 'react'
import { Layout as AntLayout } from 'antd'
import { StyledAntLayout } from './styled'
import { Header } from '../Header'

const { Content } = AntLayout

export const SimpleLayout: FC = ({ children }) => (
  <StyledAntLayout>
    <Header />
    <Content>{children}</Content>
  </StyledAntLayout>
)
