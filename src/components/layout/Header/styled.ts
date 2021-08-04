import styled from '@emotion/styled'
import { ContentFrame } from '../ContentFrame'
import { Avatar as AntAvatar } from 'antd'
import { ReactComponent as LogoImage } from '../../../assets/images/tmdb-logo.svg'
import { Link } from '@reach/router'

export const HeaderContainer = styled(ContentFrame)`
  color: ${({ theme }) => theme.baseColors.white200};
  display: flex;
  flex-flow: row nowrap;
`

export const LogoLink = styled(Link)`
  display: flex;
`

export const Logo = styled(LogoImage)`
  width: 6.4rem;
`

export const HeaderBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
`

export const Avatar = styled(AntAvatar)`
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
