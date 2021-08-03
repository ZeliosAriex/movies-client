import React from 'react'
import { Routes } from './routes'
import {
  GlobalContextProvider,
  ThemeContextProvider,
} from './contexts'

const App = (): JSX.Element => (
  <GlobalContextProvider>
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  </GlobalContextProvider>
)

export default App
