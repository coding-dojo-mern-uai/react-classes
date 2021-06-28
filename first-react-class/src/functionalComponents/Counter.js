import React, { useState } from 'react'

const Counter = (props) => {
  // const state = useState()[0]
  // const setState = useState()[1]
  // useState(initialValue) => return [param, function()]
  const [counter, setCounter] = useState(0)
  const handleCounter = () => setCounter(counter + 1)

  return <button onClick={handleCounter}> Count {counter}</button>
}

export default Counter
