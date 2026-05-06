import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about-page'>

      <div className='about-hero'>
        <div className='about-badge'>Weather App</div>
        <h1>About <span className='gradient-text'>SkyCast</span></h1>
        <p className='about-desc'>
          SkyCast is a clean, fast weather app built with React. Just type any city
          and get the current weather conditions in seconds — no clutter, no distractions.
        </p>
      </div>

      <div className='features-grid'>
        <div className='feature-card'>
          <span className='feature-icon'>🔍</span>
          <h3>City Search</h3>
          <p>Search any city worldwide and get instant, accurate weather results.</p>
        </div>
        <div className='feature-card'>
          <span className='feature-icon'>🌡️</span>
          <h3>Live Temperature</h3>
          <p>Real-time temperature in Celsius, updated every search.</p>
        </div>
        <div className='feature-card'>
          <span className='feature-icon'>💧</span>
          <h3>Humidity & Wind</h3>
          <p>Get humidity percentage and wind speed alongside temperature.</p>
        </div>
        <div className='feature-card'>
          <span className='feature-icon'>🌦️</span>
          <h3>Weather Conditions</h3>
          <p>Visual icons for clear skies, clouds, rain, snow, drizzle and more.</p>
        </div>
      </div>

      <div className='tech-section'>
        <h2>Tech Stack</h2>
        <div className='tech-pills'>
          <span>React</span>
          <span>Vite</span>
          <span>React Router Dom</span>
          <span>OpenWeatherMap API</span>
          <span>CSS</span>
        </div>
      </div>

    </div>
  )
}