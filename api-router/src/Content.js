import React from 'react'
import { useParams } from 'react-router-dom'

const Content = () => {
  const { content, color, backgroundColor } = useParams()

  return (
    <div style={{ color, backgroundColor }}>
      {isNaN(+content) && <p>The word is: {content}</p>}
      {!isNaN(+content) && <p>The number is: {content}</p>}
    </div>
  )
}

export default Content
