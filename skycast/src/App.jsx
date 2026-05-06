import React, { use } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Weather from './components/Weather'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Api_Docs from './components/Api_Doc'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Weather />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Api_Doc' element={<Api_Docs />}/>
          </Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
