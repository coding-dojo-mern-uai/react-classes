import React from 'react'

const FilteredList = ({ items, filter }) => {
  const filteredItems = items.filter(item => item.indexOf(filter) > -1)
  return filteredItems.map((item, key) => {
    const start = item.indexOf(filter)
    const end = start + filter.length

    return (
      <p key={key}>
        {item.slice(0, start)}
        <b>{item.slice(start, end)}</b>
        {item.slice(end)}
      </p>
    )
  })
}

export default FilteredList
