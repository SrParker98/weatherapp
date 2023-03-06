import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Weathermap from './components/Weathermap'


function App() {
  const [count, setCount] = useState(0)
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=fd31cecaca6e39cc8080eb72cbda17b6
  return (
    <div className="">
      <h1 className="text-2xl text-center mb-4 font-bold">
      Weather App by: Sergi Navarro
    </h1>
    <Weathermap/>
    
    
    
    
    </div>
  )
}

export default App
