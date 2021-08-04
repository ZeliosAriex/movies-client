import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', async () => {
  render(<App />)
  const pageTitle = await screen.findByText(/Movie Search/i)
  expect(pageTitle).toBeInTheDocument()
})
