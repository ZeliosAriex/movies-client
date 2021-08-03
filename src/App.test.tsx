import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', async () => {
  render(<App />)
  const pageTitle = await screen.findByText(
    /Búsqueda de películas/i
  )
  expect(pageTitle).toBeInTheDocument()
})
