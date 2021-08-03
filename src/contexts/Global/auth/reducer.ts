import { Session } from './types'
import { AuthAction } from './actions'
import { sessionMock } from './mocks'

export interface AuthState {
  session: Session | undefined
}

// TODO: Remove mock!
export const authInitialState: AuthState = {
  session: sessionMock,
}

export const authStateReducer = (
  draft: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'GUEST_LOGIN_SUCCESS':
      draft.session = action.payload
      return draft

    default:
      return draft
  }
}
