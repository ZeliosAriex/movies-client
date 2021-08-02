import { Session } from './types'

// Action Types
export type AuthAction = {
  type: 'GUEST_LOGIN_SUCCESS'
  payload: Session
}

// Action setters
const guestLoginSuccess = (
  payload: Session
): AuthAction => ({
  type: 'GUEST_LOGIN_SUCCESS',
  payload,
})

export type AuthActionSetter = {
  guestLoginSuccess: (payload: Session) => AuthAction
}

// Export action setters
export const actions: AuthActionSetter = {
  guestLoginSuccess,
}
