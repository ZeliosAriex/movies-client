import React from 'react'
import { Routes } from './routes'
import { GlobalContextProvider } from './contexts'

const App = (): JSX.Element => (
  <GlobalContextProvider>
    <Routes />
  </GlobalContextProvider>
)

export default App
