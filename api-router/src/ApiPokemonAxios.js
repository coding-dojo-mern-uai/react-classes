import React, { useState } from 'react'
import axios from 'axios'
const ApiPokemon = () => {
  const [pokemonsWithAxios, setPokemonsWithAxios] = useState([])

  const fetchPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=1118'
    axios.get(url).then(({ data: { results } }) => setPokemonsWithAxios(results))
  }

  return (
    <div>
      <h1>ApiPokemon</h1>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      {pokemonsWithAxios.map(({ name }, key) => (
        <p key={key}>{name}</p>
      ))}
    </div>
  )
}

export default ApiPokemon
