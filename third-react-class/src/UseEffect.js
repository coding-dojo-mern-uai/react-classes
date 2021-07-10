import React, { useState, useEffect } from 'react'

const ApiList = () => {
  // Use State primero
  const [clickEvent, setClickEvent] = useState(true)
  const [inputEvent, setInputEvent] = useState()

  // Use State segundo
  // useEffect(callback, array)

  useEffect(() => console.log('use effect'), [])

  useEffect(() => console.log('use effect clickEvent'), [clickEvent])

  useEffect(() => console.log('use effect inputEvent'), [inputEvent])

  useEffect(() => console.log('use effect both States'), [inputEvent, clickEvent])

  /*
    Se puede codear libremente
  */

  // Return siempre va al final
  return (
    <div>
      <h1>Use Effect {JSON.stringify(clickEvent)}</h1>
      <h2>Input text {inputEvent}</h2>
      <input type="text" onChange={({ target: { value } }) => setInputEvent(value)} />
      <button onClick={() => setClickEvent(!clickEvent)}>Change State</button>
    </div>
  )
}

export default ApiList
