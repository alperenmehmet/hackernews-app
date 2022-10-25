import { useState } from 'react'
import { useQuery } from 'react-query'
import Story from '../story'
import { getStoryIds } from '../../lib/fetchStories'

const Stories = () => {
  const [storyIds, setStoryIds] = useState([])

  const { data } = useQuery('storyIds', getStoryIds, { onSuccess: setStoryIds })

  return (
    <div>
      {storyIds.slice(0, 30).map((storyId) => {
        return <Story key={storyId} storyId={storyId} />
      })}
    </div>
  )
}

export default Stories
