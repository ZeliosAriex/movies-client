import React from 'react'
import { Layout as AntLayout, Tooltip } from 'antd'
import {
  Avatar,
  HeaderBody,
  HeaderContainer,
  Logo,
  LogoLink,
} from './styled'
import { UserOutlined } from '@ant-design/icons'
import { useIsAuthenticated } from '../../../contexts/Global/auth'

const { Header: AntHeader } = AntLayout

export const Header = () => {
  const isAuthenticated = useIsAuthenticated()

  const userAvatar = isAuthenticated ? (
    <Tooltip
      title='You are connected as guest'
      placement={'bottomRight'}
      overlayInnerStyle={{
        backgroundColor: '#FFF',
        color: '#000',
      }}>
      <Avatar
        shape='circle'
        icon={<UserOutlined />}
        size={40}>
        Guest
      </Avatar>
    </Tooltip>
  ) : (
    'Not Authenticated'
  )

  return (
    <AntHeader>
      <HeaderContainer>
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
        <HeaderBody>{userAvatar}</HeaderBody>
      </HeaderContainer>
    </AntHeader>
  )
}
