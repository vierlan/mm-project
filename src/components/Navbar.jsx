import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/src/assets/images/commonspace-03 1.png" alt="" />
      <div className="navItems">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
