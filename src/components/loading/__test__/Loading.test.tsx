import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Loading from '..'

const queryClient = new QueryClient()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Loading />
    </QueryClientProvider>
  )
})

test('loading component', () => {
  const el = screen.getByTestId('loading')
  expect(el).toBeInTheDocument()
})
