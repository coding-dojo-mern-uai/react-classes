import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiList = () => {
  const [characters, setCharacters] = useState([])

  const url = 'https://swapi.dev/api/people/?format=json'

  // Using fetch native function
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(({ results }) => setCharacters(results))
  // }, [])

  // Using Axios
  useEffect(() => {
    axios.get(url).then(({ data: { results } }) => setCharacters(results))
  }, [])

  // console.log({ characters })

  return (
    <div>
      <h1>Star Wars Characters </h1>
      {characters.length < 1 && <p>Loading...</p>}
      {characters.map(({ name }, key) => (
        <p key={key}>{name}</p>
      ))}
    </div>
  )
}

export default ApiList
