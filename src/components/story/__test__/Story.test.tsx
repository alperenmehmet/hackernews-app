import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Story from '..'

const queryClient = new QueryClient()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
})

test('story component container', () => {
  const el = screen.getByRole('div')
  expect(el).toHaveClass('story-container')
})
