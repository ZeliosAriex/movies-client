// Create the context
import { createContext, FC, useContext } from 'react'
import { SearchPageContextProps } from './types'
import { useImmerReducer } from 'use-immer'
import {
  searchPageInitalState,
  searchPageReducer,
} from './reducer'
import { actions } from './actions'

const SearchPageStateContext =
  createContext<SearchPageContextProps>(
    {} as SearchPageContextProps
  )

// This sets the context's name, useful for debugging
SearchPageStateContext.displayName = 'SearchPage'

// Hook that returns the current context value (state)
export const useSearchPageState =
  (): SearchPageContextProps =>
    useContext(SearchPageStateContext)

// Provider that will pass the context to their childs
export const SearchPageContextProvider: FC = ({
  children,
}) => {
  const [state, dispatch] = useImmerReducer(
    searchPageReducer,
    searchPageInitalState
  )
  return (
    <SearchPageStateContext.Provider
      value={{
        state,
        dispatch,
        actions,
      }}>
      {children}
    </SearchPageStateContext.Provider>
  )
}
