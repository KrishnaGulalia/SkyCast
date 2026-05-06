import React from 'react'
import {useState, useEffect} from 'react'
import './Weather.css'
import Search_icon from '../images/search_icon.png'
import Clear_icon from '../Assets/clear.png'
import Cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

export default function Weather() {
  const [city , setCity] = useState("")
  const[cityInput, setCityInput] = useState("")
  const getWeatherIcon = (icon) =>{
    switch(icon){
      case 'Clear' : return Clear_icon
      case 'Clouds' : return Cloud_icon
      case 'Drizzle' : return drizzle_icon
      case 'Rain' : return rain_icon
      case 'Snow' : return snow_icon
      default : return Clear_icon
    }
  } 
  const[weatherData,setWeatherData] = useState(false)
  useEffect(()=>{
    async function search(city) {
      try{
        const key = "5720a3302956205898ed7d17314b5f3f"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
        const res = await fetch(url)
        const data = await res.json()
        setWeatherData({
          temp : Math.floor(data.main.temp),
          humidity : data.main.humidity,
          windSpeed :(data.wind.speed),
          location : data.name,
          icon: data.weather[0].main
        })

      }
      catch(err){

      }
      
    }
    if(city){
      search(city)
    }
    
  },[cityInput])
  function Handle(e){
    const value = e.target.value
    setCity(value)
  }
  return (
    <div className='Weather'>
        <div className='Search'>
            <input type="text" placeholder='Search'  onChange={Handle}/>
            <img src={Search_icon} alt='' onClick={()=>{
              setCityInput(city)
            }} ></img>
        </div>
        <img src={weatherData? getWeatherIcon(weatherData.icon): Clear_icon} alt='' className='Weather-icon'></img>
        <p className='temp'>{weatherData ? weatherData.temp + "°C" : '--'}</p>
        <p className='location'>{weatherData ? weatherData.location : '--'}</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon} alt="" />
            <div>
              <p>{weatherData ? weatherData.humidity : '--'}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind_icon} alt="" />
            <div>
              <p>{weatherData ? weatherData.windSpeed : '--'} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}
