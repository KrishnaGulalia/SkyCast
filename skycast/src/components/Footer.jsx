import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-inner'>
        <div className='footer-brand'>
          <span className='footer-logo'>⛅ SkyCast</span>
          <p>Real-time weather, beautifully simple.</p>
        </div>
        <div className='footer-links'>
          <p className='footer-links-title'>Pages</p>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className='footer-links'>
          <p className='footer-links-title'>Data</p>
          <a href='https://openweathermap.org' target='_blank' rel='noreferrer'>
            OpenWeatherMap
          </a>
          <a href='https://openweathermap.org/api' target='_blank' rel='noreferrer'>
            Weather API
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© 2026 SkyCast · Built with React & Vite</p>
      </div>
    </div>
  )
}