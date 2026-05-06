import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Api_Doc'>API Documentation</Link>
    </div>
  )
}
