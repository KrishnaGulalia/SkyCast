import React, { use } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Weather from './components/Weather'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Weather />
      </div>
    </BrowserRouter>
  )
}
