import { createContext, FC, useContext } from 'react'
import { GlobalStateContextProps } from './types'
import { useImmerReducer } from 'use-immer'
import {
  authInitialState,
  authStateReducer,
  actions as authActions,
} from './auth'

// Create the context
const GlobalStateContext =
  createContext<GlobalStateContextProps>(
    {} as GlobalStateContextProps
  )

// This sets the context's name, useful for debugging
GlobalStateContext.displayName = 'Global'

// Hook that returns the current context value (state)
export const useGlobalState = (): GlobalStateContextProps =>
  useContext(GlobalStateContext)

// Provider that will pass the context to their childs
export const GlobalContextProvider: FC = ({ children }) => {
  const [authState, authDispatch] = useImmerReducer(
    authStateReducer,
    authInitialState
  )

  return (
    <GlobalStateContext.Provider
      value={{
        auth: {
          state: authState,
          dispatch: authDispatch,
          actions: authActions,
        },
      }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
