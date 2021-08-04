import { Dispatch } from 'react'
import { SearchPageState } from './reducer'
import {
  SearchPageAction,
  SearchPageActions,
} from './actions'

export interface SearchPageContextProps {
  state: SearchPageState
  dispatch: Dispatch<SearchPageAction>
  actions: SearchPageActions
}
