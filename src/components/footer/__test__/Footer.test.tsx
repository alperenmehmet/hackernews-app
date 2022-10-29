import { render, screen } from '@testing-library/react'
import Footer from '..'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Footer />
    </QueryClientProvider>
  )
})

test('test for component', () => {
  const el = screen.getByTestId('footer')
  expect(el).toBeInTheDocument()
})

test('test for all the links render', () => {
  const links = screen.getAllByRole('link')
  expect(links).toHaveLength(9)
})

test('testing if it has an main link button', () => {
  const homeButton = screen.getByTestId('applications-are-open')
  expect(homeButton.innerHTML).toMatch(
    'Applications are open for YC Winter 2023'
  )
})

test('testing if it has an guidelines link button', () => {
  const homeButton = screen.getByTestId('guidelines')
  expect(homeButton.innerHTML).toMatch('Guidelines')
})
