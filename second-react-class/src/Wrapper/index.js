import React, { useState } from 'react'
import FilteredList from './FilteredList'
import Input from './Input'

// Tomar el valor del input {CHECK}
// con ese valor hacemos el filtering {CHECK}
// Pasar una condicion al filter para mostrar {CHECK}
const Wrapper = ({ items }) => {
  const [filter, setFilter] = useState()

  return (
    <div>
      <h3>Filter</h3>
      <Input filter={filter} setFilter={setFilter} />
      <FilteredList items={items} filter={filter} />
    </div>
  )
}

export default Wrapper
