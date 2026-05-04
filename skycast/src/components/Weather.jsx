import React from 'react'
import './Weather.css'
import Search_icon from '../images/search.png'
import Clear_icon from '../Assets/clear.png'
import Cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

export default function Weather() {
  return (
    <div className='Weather'>
        <div className='Search'>
            <input type="text" placeholder='Search' />
            {/* <p>🔍</p> */}
            <img src={Search_icon} alt='' ></img>
        </div>
    </div>
  )
}
