import React from 'react'
import { useState } from 'react';
import Form from './Form'



function Weathermap() {

let Url = "https://api.openweathermap.org/data/2.5/weather?&appid=fd31cecaca6e39cc8080eb72cbda17b6&lang=es";
let cityUrl = "&q=";
const [weather, setWeather]= useState([]);

let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?&appid=fd31cecaca6e39cc8080eb72cbda17b6&lang=es";
const [forecast, setForecast]= useState([]);

const [loading, setLoading]= useState([false])

const [show, setShow]=useState([false]);
const [location, setLocation]=useState("");

const getLocation = async(loc)=>{

  
  setLocation(loc);

  //llamamos al tiempo

  Url = Url + cityUrl + loc;

  await fetch(Url).then((res)=> {

    if(!res.ok)throw{res}

    return res.json().then((weatherData)=>{

    console.log(weatherData);
    setWeather(weatherData);

    }).catch(error =>{
      console.log(error)
      
    })

    

  })
  forecastUrl = forecastUrl + cityUrl + loc;

  await fetch(forecastUrl).then((res)=> {

    if(!res.ok)throw{res}

    return res.json().then((forecastdata)=>{

    console.log(forecastdata);
    setForecast(forecastdata);

    }).catch(error =>{
      console.log(error)
     
    })

    

  })

  return (
   <React.component>
    <Form 
    newLocation={getLocation}
    />
   </React.component>
    
  );
}}

export default Weathermap;