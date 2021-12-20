import React, { useState } from 'react'
import UI from './components/UI'

export default function App() {
  const [input, setInput] = useState("")
  const [weather, setWeather] = useState({
    temp: "",
    temp_min: "",
    temp_max: "",
    icon: "",
    location: "",
    country: ""
  })

  const onChange = (e) => {
    setInput(e.target.value)
  }

  const getApi = async ()=>{
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=936f2e2c459a474bb654ae0b4ed680c6`
    let apiData = await fetch(apiurl)
    let parsedData = await apiData.json()
    try {
      setWeather({
        temp: parsedData.main.temp,
        temp_min: parsedData.main.temp_min,
        temp_max: parsedData.main.temp_max,
        icon: parsedData.weather[0].icon,
        location: `${parsedData.name},`,
        country: parsedData.sys.country
      })
      console.log(parsedData)
    } catch (error) {
      alert("Please Enter a valid city name")
    }
    
  }
  return (
    <>
    <UI onChange={onChange} input={input} getApi={getApi} weather={weather} />
    </>
  )
}
