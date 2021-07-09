import React, { useState } from 'react'
import validateForm from './validateForm'

const Form = () => {
  const [user, setUser] = useState({})
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
  const [formError, setFormError] = useState({})

  const onChangeHandler = ({ target: { name, value } }) => {
    // Asignación dinamica de atributos
    setUser({ ...user, ...{ [name]: value } })
  }

  const createUser = e => {
    e.preventDefault()
    const [hasError, errors] = validateForm(user)
    setFormError(errors)

    if (!hasError) {
      alert(`Welcome ${user.name}`)
      setHasBeenSubmitted(true)
    }
  }

  console.log(user, formError)

  return (
    <div>
      <form onSubmit={createUser}>
        <h3>{hasBeenSubmitted ? 'Thank you for submitting the form!' : 'Welcome, please submit the form'}</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={onChangeHandler} name="name" type="text" />
          {formError.name && <p style={{ color: 'red' }}>{formError.name}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input onChange={onChangeHandler} name="lastName" type="text" />
          {formError.lastName && <p style={{ color: 'red' }}>{formError.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={onChangeHandler} name="email" type="email" />
          {formError.email && <p style={{ color: 'red' }}>{formError.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={onChangeHandler} name="password" type="password" />
          {formError.password && <p style={{ color: 'red' }}>{formError.password}</p>}
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input onChange={onChangeHandler} name="passwordConfirmation" type="password" />
          {formError.passwordConfirmation && <p style={{ color: 'red' }}>{formError.passwordConfirmation}</p>}
        </div>
        <input type="submit" />
      </form>
      <h3>Your Form Data</h3>
      <code>{JSON.stringify(user)}</code>
    </div>
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
