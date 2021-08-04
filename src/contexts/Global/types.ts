import { AuthAction, AuthActions, AuthState } from './auth'
import { Dispatch } from 'react'

export interface AuthContextProps {
  state: AuthState
  dispatch: Dispatch<AuthAction>
  actions: AuthActions
}

export interface GlobalStateContextProps {
  auth: AuthContextProps
}
