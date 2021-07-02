import React, { useState } from 'react'
import validateForm from './validateForm'
// Los input fields estan cambiando valores del state
// Respuesta cuando la información correcta
// Cambiar un mensaje después del submit
// Validaciones

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-JavaScript

const Form = () => {
  const [user, setUser] = useState({})
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
  const [formError, setFormError] = useState({})

  const onChangeHandler = ({ target: { name, value } }) => {
    // Asignación dinamica de atributos
    const input = { [name]: value }
    const currentUserData = Object.assign(user, input)
    setUser(currentUserData)
  }

  const createUser = e => {
    e.preventDefault()
    const validation = validateForm(user)
    if (typeof validation === 'object') {
      setFormError(validation)
      return
    }
    setFormError({})
    alert(`Welcome ${user.username}`)
    setHasBeenSubmitted(true)
  }

  return (
    <form onSubmit={createUser}>
      <h3>{hasBeenSubmitted ? 'Thank you for submitting the form!' : 'Welcome, please submit the form'}</h3>
      <div>
        <label htmlFor="username">Username</label>
        <input onChange={onChangeHandler} name="username" type="text" />
        {formError.username && <p style={{ color: 'red' }}>{formError.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input onChange={onChangeHandler} name="email" type="email" />
        {formError.email && <p style={{ color: 'red' }}>{formError.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange={onChangeHandler} name="password" type="password" />
      </div>
      <input type="submit" />
    </form>
  )

  /*
    {
      username: inputValue,
      email: inputValue,
      password: inputValue
    }
  */
}

export default Form
