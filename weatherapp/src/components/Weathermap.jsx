
import Form from './Form'
import React, { useState } from 'react';
import Card from './Card';


 const Weathermap =()=> {
  let Url = "https://api.openweathermap.org/data/2.5/weather?&appid=fd31cecaca6e39cc8080eb72cbda17b6&lang=es";
  let cityUrl = "&q=";
  let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?&appid=fd31cecaca6e39cc8080eb72cbda17b6&lang=es";
  


  const [weather, setWeather]= useState([]);
  const [forecast, setForecast]= useState([]);
  const [location, setLocation]=useState("");
  
  const getLocation = async (loc)=>{

    setLocation(loc)
    //JON PORQUE SE INVENTA EL LOC DE DONDE LO SACA?
   Url = Url + cityUrl + loc;
    
    await fetch(Url).then((res)=>{
      
      if(!res.ok)throw{res}
      return res.json();
    }).then((weatherData)=>{
      console.log(weatherData)
        setWeather(weatherData);
      });

      forecastUrl = forecastUrl + cityUrl + loc;
    
    await fetch(forecastUrl).then((res)=>{
      
      if(!res.ok)throw{res}
      return res.json();
    }).then((forecastData)=>{
      
        setForecast(forecastData);
      });
      
  }
 
 
  return (
    
    <React.Fragment>
      <Form
      newLocation= {getLocation}
      />
      <Card
      weather={weather}
      forecast={forecast}
      />
    </React.Fragment>
    
    
  );
  
  
}
export default Weathermap;

