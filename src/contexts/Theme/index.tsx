import React, { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
import { appTheme } from './theme'

export const ThemeContextProvider: FC = ({ children }) => (
  <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
)
