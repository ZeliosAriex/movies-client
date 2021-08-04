import React from 'react'
import { Routes } from './routes'
import {
  GlobalContextProvider,
  ThemeContextProvider,
} from './contexts'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './api/tmdb'
import { SearchPageContextProvider } from './contexts/pageContexts/Search'

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <GlobalContextProvider>
      <ThemeContextProvider>
        <SearchPageContextProvider>
          <Routes />
        </SearchPageContextProvider>
      </ThemeContextProvider>
    </GlobalContextProvider>
  </QueryClientProvider>
)

export default App
