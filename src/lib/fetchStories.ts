import axios from 'axios'

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'
export const NEW_STORIES_URL = `${BASE_URL}newstories.json`
export const STORY_URL = `${BASE_URL}item/`

export const getStory = async ({ queryKey }: any) => {
  const [storyId] = queryKey
  const result = await axios
    .get(`${STORY_URL}${storyId}.json`)
    .then(({ data }) => data)
  return result
}

export const getStoryIds = async () => {
  const result = await axios.get(NEW_STORIES_URL).then(({ data }) => data)

  return result
}
