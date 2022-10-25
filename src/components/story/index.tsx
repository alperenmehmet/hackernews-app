import { useState } from 'react'
import { useQuery } from 'react-query'
import { getStory } from '../../lib/fetchStories'
import { dateMapper } from '../../utils/timeMapper'
import Loading from '../loading'

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

const Story = ({ storyId }: any) => {
  const [story, setStory] = useState<Story>({} as Story)

  const { data, isLoading } = useQuery([storyId, 'story'], getStory, {
    onSuccess: setStory
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <a href={story.url}>{story.title}</a>
      <div>
        <p>{story.score} points</p>
        <p>by {story.by}</p>
        <p>{dateMapper(story.time)} ago</p>
        <p>|</p>
        <p>{story.descendants} comments</p>
      </div>
    </div>
  )
}

export default Story
