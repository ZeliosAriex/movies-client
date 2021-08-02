import { Session } from './types'
import { AuthAction } from './actions'

export interface AuthState {
  session: Session | undefined
}

export const authInitialState: AuthState = {
  session: undefined,
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
