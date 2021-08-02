import {
  AuthAction,
  AuthActionSetter,
  AuthState,
} from './auth'
import { Dispatch } from 'react'

export interface AuthContextProps {
  state: AuthState | undefined
  dispatch: Dispatch<AuthAction>
  actions: AuthActionSetter
}

export interface GlobalStateContextProps {
  auth: AuthContextProps
}
