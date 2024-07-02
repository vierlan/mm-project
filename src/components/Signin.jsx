import React from 'react'
import '../assets/stylesheets/signin.css'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <>
      <div className='signin-container'>
        <img src="/src/assets/images/logo.png" alt="Logo" />
        <p>Sign in to Commonspace</p>
        <button className="button-google" >Sign in with Google</button>
        <Link to="/signup">
          <button className='button-signin'>Sign in with e-mail</button>
        </Link>
      </div>
    </>
  )
}

export default Signin
