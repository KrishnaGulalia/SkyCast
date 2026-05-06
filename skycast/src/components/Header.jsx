import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
      <Link to='/' className='logo'>⛅ SkyCast</Link>
       <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Api_Doc'>API Documentation</Link>
      </div>
    </div>
  )
}
