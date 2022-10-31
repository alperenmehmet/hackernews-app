import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Stories from '..'

const queryClient = new QueryClient()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Stories />
    </QueryClientProvider>
  )
})

test('stories component buttons', () => {
  const el = screen.getByText(/new stories/i)
  expect(el).toBeInTheDocument()
})

test('stories component buttons', () => {
  const el = screen.getByText(/top stories/i)
  expect(el).toBeInTheDocument()
})

test('stories component buttons', () => {
  const el = screen.getByText(/best stories/i)
  expect(el).toBeInTheDocument()
})
