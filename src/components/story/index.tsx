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
    <div>
      <h1>{index + 1}</h1>
      <a href={story.url}>{story.title}</a>
      <div>
        <p>{story.score} points</p>
        <p>by {story.by}</p>
        <p>{dateMapper(story?.time)} ago</p>
        <p>|</p>
        <p>{story.descendants} comments</p>
      </div>
    </div>
  )
}

export default Story
