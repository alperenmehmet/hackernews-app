import { useState } from 'react'
import { useQuery, useInfiniteQuery } from 'react-query'
import Story from '../story'
import { getStoryIds } from '../../lib/fetchStories'

const Stories = () => {
  const [storyIds, setStoryIds] = useState([])
  const [startingIndex, setStartingIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(30)

  const { data } = useQuery('storyIds', getStoryIds, { onSuccess: setStoryIds })

  const loadMoreStories = () => {
    setStartingIndex(startingIndex + 30)
    setLastIndex(lastIndex + 30)
    window.scroll(0, 0)
  }

  return (
    <div>
      {storyIds.slice(startingIndex, lastIndex).map((storyId, index) => {
        return (
          <Story
            key={storyId}
            storyId={storyId}
            index={index + startingIndex}
          />
        )
      })}
      <div>
        <button onClick={loadMoreStories}>more</button>
      </div>
    </div>
  )
}

export default Stories
