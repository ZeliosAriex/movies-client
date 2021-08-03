import React, { ComponentType, FC } from 'react'
import {
  Redirect,
  RouteComponentProps,
} from '@reach/router'
import { useIsAuthenticated } from '../../../contexts/Global/auth'

export const ProtectedRoute: FC<
  RouteComponentProps & {
    component: ComponentType
  }
> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useIsAuthenticated()

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Redirect from='' to='/login' noThrow />
  )
}
