import React from 'react'
import '../assets/stylesheets/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/src/assets/images/logo.png" alt="" />
      <div className="navItems">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/spaces">Spaces</Link>
      </div>
    </nav>
  )
}

export default Navbar
