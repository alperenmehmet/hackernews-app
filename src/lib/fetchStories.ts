import axios from 'axios'

export const getStories = async ({ queryKey }: any) => {
  const { data } = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${queryKey[0]}`
  )
  return data
}

export const getStory = async ({ queryId }: any) => {
  const { data } = await axios(
    `https://hacker-news.firebaseio.com/v0/item/${queryId}.json`
  )
  return data
}
