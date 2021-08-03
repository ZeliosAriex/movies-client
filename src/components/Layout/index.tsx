import React, { FC } from 'react'
import { Layout as AntLayout } from 'antd'
import { StyledAntLayout } from './styled'

const { Header, Content } = AntLayout

export const Layout: FC = ({ children }) => (
  <StyledAntLayout>
    <Header />
    <Content>{children}</Content>
  </StyledAntLayout>
)
