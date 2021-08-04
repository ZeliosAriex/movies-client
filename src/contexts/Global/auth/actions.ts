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

export type AuthActions = {
  guestLoginSuccess: typeof guestLoginSuccess
}

// Export action setters
export const actions: AuthActions = {
  guestLoginSuccess,
}
