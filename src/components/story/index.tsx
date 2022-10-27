import { useState } from 'react'
import { useQuery } from 'react-query'
import { getStory } from '../../lib/fetchStories'
import { dateMapper } from '../../utils/timeMapper'
import Loading from '../loading'
import '../../styles/story.scss'

type Story = {
  by: string
  descendants: number
  id: number
  score: number
  text: string
  time: number
  title: string
  type: string
  url: string
}

const Story = ({ storyId, index }: any) => {
  const [story, setStory] = useState<Story>({} as Story)

  const { data, isLoading, status } = useQuery([storyId, 'story'], getStory, {
    onSuccess: setStory
  })

  if (isLoading) {
    return <Loading />
  }

  if (status !== 'success') {
    return <Loading />
  }

  return (
    <div className="story-container">
      <div className="story-header">
        <p className="story-number">{index + 1}</p>
        <a className="story-link" href={story?.url}>
          {story.title}
        </a>
      </div>
      <div className="story-details">
        <span>{story.score} points</span>
        <span> by {story.by}</span>
        <span>{dateMapper(story?.time)} ago</span>
        <span> | </span>
        <span>{story.descendants} comments</span>
      </div>
    </div>
  )
}

export default Story
