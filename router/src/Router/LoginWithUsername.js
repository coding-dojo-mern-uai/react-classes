import React from 'react'

const LoginWithUsername = props => {
  const {
    match: {
      params: { username }
    }
  } = props
  return <h2>Logging as {username}</h2>
}

export default LoginWithUsername
