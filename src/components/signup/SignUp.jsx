import React from 'react'
import { Link } from 'react-router-dom'
import '../signup/SignUp.scss'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='signup-info'>
        <h1>Create an account</h1>
        <p>Let’s get started with your 30 days free trial</p>
        <h6>Name</h6>
        <input type='text' />
        <h6>Email</h6>
        <input type='text' />
        <h6>Password</h6>
        <input type='text' />
      </div>
      <div className='signup-buttons'>
        <button id='black'>Create Account</button>
        <button id='white'><div className='signup-buttons-logo'></div>Sign up with Google</button>
      </div>
      <div className='signup-link'>
        <p>Already have an account?</p>
        <Link to="/signin">Sign in</Link>
      </div>
    </div>
  )
}

export default SignUp