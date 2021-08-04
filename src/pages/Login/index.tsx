import React, { FC } from 'react'
import {
  ContentFrame,
  PageTitle,
  SimpleLayout,
  Space,
} from '../../components'
import { LoginProps } from './types'
import { useLogin } from './hooks'

const Login: FC<LoginProps> = () => {
  useLogin()

  return (
    <SimpleLayout>
      <ContentFrame>
        <Space orientation='vertical' amount='6.4rem' />
        <PageTitle>Signing in as guest...</PageTitle>
      </ContentFrame>
    </SimpleLayout>
  )
}

export default Login
