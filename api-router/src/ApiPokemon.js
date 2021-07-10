import React, { useState } from 'react'

const ApiPokemon = () => {
  const [pokemonsWithFetch, setPokemonsWithFetch] = useState([])

  const fetchPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=1118'
    fetch(url)
      .then(res => res.json())
      .then(({ results }) => setPokemonsWithFetch(results))
  }

  return (
    <div>
      <h1>ApiPokemon</h1>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      {pokemonsWithFetch.map(({ name }, key) => (
        <p key={key}>{name}</p>
      ))}
      {/* <code>{JSON.stringify(pokemonsWithFetch)}</code> */}
    </div>
  )
}

export default ApiPokemon
