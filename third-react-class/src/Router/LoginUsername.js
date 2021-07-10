import React from 'react'

const LoginUsername = ({
  match: {
    params: { username }
  }
}) => {
  return <div>Login as {username}</div>
}

export default LoginUsername
