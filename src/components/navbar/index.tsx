import { useQuery } from 'react-query'
import { useState } from 'react'

const Navbar = () => {
  const [content, setContent] = useState('newstories')
  const [stories, setStories] = useState([])

  const { data } = useQuery([`${content}.json`])

  const btnArr = [
    { name: 'Best Stories' },
    { name: 'New Stories' },
    { name: 'Top Stories' }
  ]

  const contentHandler = (e: any) => {
    const newStr = e.target.innerText
    const newContent = newStr.replace(/ +/g, '').toLowerCase()
    setContent(newContent)
  }

  return (
    <div>
      {btnArr.map((btn: any, index: number) => {
        // @ts-ignore
        return (
          <button key={index} onClick={contentHandler}>
            {btn.name}
          </button>
        )
      })}
    </div>
  )
}

export default Navbar
