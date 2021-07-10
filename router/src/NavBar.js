import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/login/codingDojo">Logging as</Link>
    </div>
  )
}

export default NavBar
