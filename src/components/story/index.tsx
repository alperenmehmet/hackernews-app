import { useState } from 'react'
import { useQuery } from 'react-query'
import { getStory } from '../../lib/fetchStories'
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

  console.log(story)

  if (isLoading) {
    return <Loading />
  }

  return <div data-testid="story"></div>
}

export default Story
