import React from 'react'
import { Link } from 'react-router-dom'

const Router = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/login/robertzibert">Login with username</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Router
