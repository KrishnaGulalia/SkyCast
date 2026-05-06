import React, { use } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Weather from './components/Weather'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Api_Docs from './components/Api_Docs'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Weather />
      </div>
    </BrowserRouter>
  )
}
