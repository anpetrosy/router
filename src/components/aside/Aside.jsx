import React from 'react'
import { Link } from 'react-router-dom'
import '../aside/Aside.scss'

const Aside = () => {
  return (
    <div className='aside'>
      <div className='aside-info'>
        <h1>abc.com</h1>
        <p>abc.com is the best place to find remote talent. We've been super  impress by the quality of applications.</p>
        <div className='aside-info-footer'>
          <h4>Madhushan sasanka</h4>
          <h6>CEO, abc.com</h6>
        </div>
      </div>
    </div>
  )
}

export default Aside