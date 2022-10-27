import { useState, useEffect, useLayoutEffect } from 'react'
import { useQuery } from 'react-query'
import Story from '../story'
import { getStoryIds } from '../../lib/fetchStories'
import '../../styles/stories.scss'
import { getLocalStorage } from '../../hooks/getLocalStorage'
import { FaMoon, FaSun } from 'react-icons/fa'

interface Toggle {
  toggle: boolean
}

const Stories = () => {
  const [storyIds, setStoryIds] = useState([])
  const [startingIndex, setStartingIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(30)
  const [storiesType, setStoriesType] = useState('newstories')
  const [theme, setTheme] = useState(getLocalStorage())
  const [toggle, setToggle] = useState<Toggle | boolean>()

  const { data, isLoading } = useQuery([storiesType, 'storyIds'], getStoryIds, {
    onSuccess: setStoryIds
  })

  const handleTheme = () => {
    setToggle(!toggle)
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  useEffect(() => {
    // @ts-ignore
    document.documentElement.className = theme
    // @ts-ignore
    localStorage.setItem('theme', theme)
  }, [theme])

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
    <div className="stories-container">
      <div className="stories-navbar">
        <div className="stories-navbar-buttons">
          <button onClick={contentHandler}>New Stories</button>
          <button onClick={contentHandler}>Best Stories</button>
          <button onClick={contentHandler}>Top Stories</button>
        </div>
        <button className="dark-mode-button" onClick={handleTheme}>
          {toggle ? (
            <FaMoon className="moon-icon" />
          ) : (
            <FaSun className="sun-icon" />
          )}
        </button>
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
        <button className="more-button" onClick={loadMoreStories}>
          More
        </button>
      </div>
    </div>
  )
}

export default Stories
