import React from 'react'
import { Link } from 'react-router-dom'
import '../signin/SignIn.scss'

const SignIn = () => {
  return (
    <div className='signin'>
    <div className='signin-info'>
      <h1>Sign in to account</h1>
      <h6>Username or Email</h6>
      <input type='text' />
      <h6>Password</h6>
      <input type='text' />
    </div>
    <div className='signin-buttons'>
      <button id='black'>Sign in</button>
      <button id='white'><div className='signin-buttons-logo'></div>Sign in with Google</button>
    </div>
    <div className='signin-link'>
      <p>Dont have an account?</p>
      <Link to="/">Sign up</Link>
    </div>
  </div>
  )
}

export default SignIn