import { useState } from 'react'
import { useQuery } from 'react-query'
import Story from '../story'
import { getStoryIds } from '../../lib/fetchStories'
import Loading from '../loading'

const Stories = () => {
  const [storyIds, setStoryIds] = useState([])
  const [startingIndex, setStartingIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(30)
  const [storiesType, setStoriesType] = useState('newstories')

  const { data, isLoading } = useQuery([storiesType, 'storyIds'], getStoryIds, {
    onSuccess: setStoryIds
  })

  const loadMoreStories = () => {
    setStartingIndex(startingIndex + 30)
    setLastIndex(lastIndex + 30)
    window.scroll(0, 0)
  }

  const contentHandler = (e: any) => {
    const newStr = e.target.innerText
    const newContent = newStr.replace(/ +/g, '').toLowerCase()
    setStoriesType(newContent)
    setStartingIndex(0)
  }

  return (
    <div>
      <div>
        <button onClick={contentHandler}>New Stories</button>
        <button onClick={contentHandler}>Best Stories</button>
        <button onClick={contentHandler}>Top Stories</button>
      </div>
      {storyIds?.slice(startingIndex, lastIndex).map((storyId, index) => {
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
