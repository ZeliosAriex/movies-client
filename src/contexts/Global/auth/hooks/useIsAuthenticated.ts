import { useGlobalState } from '../../index'

export const useIsAuthenticated = () => {
  const {
    auth: { state },
  } = useGlobalState()

  // User is authenticated if first it exists a session id, and is not expired
  return !!state.session?.sessionId
}
