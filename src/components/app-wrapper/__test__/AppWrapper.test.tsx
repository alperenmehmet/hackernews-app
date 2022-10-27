import { render, screen } from '@testing-library/react'
import AppWrapper from '../index'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
    </QueryClientProvider>
  )
})

test('test for AppWrapper component render correctly', () => {
  const el = screen.getByTestId('appwrapper')
  expect(el).toBeInTheDocument()
})
