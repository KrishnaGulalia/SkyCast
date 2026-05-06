import React from 'react'
import './Api_Doc.css'

export default function Api_Doc() {
  return (
    <div className='api-page'>

      <div className='api-hero'>
        <div className='api-badge'>API Reference</div>
        <h1>API <span className='gradient-text'>Documentation</span></h1>
        <p className='api-desc'>
          SkyCast uses the OpenWeatherMap API to fetch real-time weather data.
          Below is a breakdown of the endpoint and response used in this app.
        </p>
      </div>

      <div className='api-section'>
        <h2>Base URL</h2>
        <div className='code-block'>
          https://api.openweathermap.org/data/2.5/weather
        </div>
      </div>

      <div className='api-section'>
        <h2>Endpoint Used</h2>
        <div className='code-block'>
          GET /weather?q={'{city}'}&units=metric&appid={'{your_api_key}'}
        </div>
      </div>

      <div className='api-section'>
        <h2>Query Parameters</h2>
        <div className='table-wrapper'>
          <table className='api-table'>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>q</td>
                <td>string</td>
                <td>City name (e.g. Delhi, London)</td>
              </tr>
              <tr>
                <td>units</td>
                <td>string</td>
                <td>metric = Celsius, imperial = Fahrenheit</td>
              </tr>
              <tr>
                <td>appid</td>
                <td>string</td>
                <td>Your unique API key from OpenWeatherMap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='api-section'>
        <h2>Response Fields Used</h2>
        <div className='table-wrapper'>
          <table className='api-table'>
            <thead>
              <tr>
                <th>Field</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>main.temp</td>
                <td>Current temperature in Celsius</td>
              </tr>
              <tr>
                <td>main.humidity</td>
                <td>Humidity percentage</td>
              </tr>
              <tr>
                <td>wind.speed</td>
                <td>Wind speed in km/h</td>
              </tr>
              <tr>
                <td>name</td>
                <td>City name returned by the API</td>
              </tr>
              <tr>
                <td>weather[0].main</td>
                <td>Weather condition (Clear, Rain, Snow etc.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='api-section'>
        <h2>Example Response</h2>
        <div className='code-block response-block'>
          <pre>{`{
  "name": "Delhi",
  "main": {
    "temp": 31,
    "humidity": 37
  },
  "wind": {
    "speed": 2.06
  },
  "weather": [
    { "main": "Clear" }
  ]
}`}</pre>
        </div>
      </div>

      <div className='api-note'>
        <span>📌</span>
        <p>Get your free API key at <a href='https://openweathermap.org/api' target='_blank' rel='noreferrer'>openweathermap.org/api</a></p>
      </div>

    </div>
  )
}