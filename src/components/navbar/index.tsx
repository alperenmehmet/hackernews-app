import { useQuery } from 'react-query'
import { getStories } from '../../lib/fetchStories'
import { useState } from 'react'

const Navbar = () => {
  const [content, setContent] = useState('newstories')
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

  console.log(data)
  // console.log(content)

  return (
    <div>
      {btnArr.map((btn: any, index: number) => {
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
