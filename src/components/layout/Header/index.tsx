import React from 'react'
import { Avatar, Layout as AntLayout } from 'antd'
import {
  HeaderBody,
  HeaderContainer,
  Logo,
  LogoLink,
} from './styled'
import { useIsAuthenticated } from '../../../contexts/Global/auth'
import { useGlobalState } from '../../../contexts'

const { Header: AntHeader } = AntLayout

export const Header = () => {
  const isAuthenticated = useIsAuthenticated()
  const {
    auth: {
      state: { session },
    },
  } = useGlobalState()

  const authAvatar = isAuthenticated ? (
    <Avatar
      shape='circle'
      size={40}
      src={`https://avatars.dicebear.com/api/human/${session?.expiresAt}.svg`}
    />
  ) : (
    'Not Authenticated'
  )

  return (
    <AntHeader>
      <HeaderContainer>
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
        <HeaderBody>{authAvatar}</HeaderBody>
      </HeaderContainer>
    </AntHeader>
  )
}
