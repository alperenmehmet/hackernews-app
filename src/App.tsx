import AppWrapper from './components/app-wrapper'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { getStories } from './lib/fetchStories'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getStories
    }
  }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
    </QueryClientProvider>
  )
}

export default App
