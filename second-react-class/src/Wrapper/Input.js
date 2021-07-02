import React from 'react'

const Input = ({ filter, setFilter }) => {
  // const onChangeHandler = e => {
  //   //const value = e.target.value
  //   const {
  //     target: { value }
  //   } = e
  //   setFilter(value)
  // }

  //  return <input value={filter} onChange={onChangeHandler} type="text" />
  return <input value={filter} onChange={({ target: { value } }) => setFilter(value)} type="text" />
}

export default Input
