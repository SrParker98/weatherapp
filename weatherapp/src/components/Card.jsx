import react,{ useState } from "react"
import Weathermap from "./Weathermap"




const Card = ({weather, forecast})=> {
    
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var iconUrl = "";
    var foundIcon = "";
    
    var iconurl16="";
    //var iconUrl6 = "";
    //var iconUrl9 = "";



   if(weather.name){
    iconUrl= "https://openweathermap.org/img/w/"
    foundIcon = iconUrl + weather.weather[0].icon + ".png"
    
        
        //const forecasticon8 = iconUrl+ forecast.list[8].weather[0].icon + ".png";
        // iconUrl6 = iconUrl + forecast.list[2].weather[0].icon + ".png";
        //iconUrl9 = iconUrl + forecast.list[3].weather[0].icon + ".png";
   if(forecast.list){
    var iconurl8= iconUrl + forecast.list[8].weather[0].icon + ".png";
    var iconurl16= iconUrl + forecast.list[16].weather[0].icon + ".png";
    var iconurl24= iconUrl + forecast.list[24].weather[0].icon + ".png";

    var temp8=(forecast.list[8].main.temp -273.15).toFixed(1)
    var temp16=(forecast.list[16].main.temp -273.15).toFixed(1)
    var temp24=(forecast.list[24].main.temp -273.15).toFixed(1)
    console.log("aqui" ,forecast)
   




   }
        
   
    return (
        
       
    <div className="main-card">
        
        <h1 className="text-2xl font-extrabold">{weather.name}</h1>
        <h2 className="text-xl">{date}</h2>
        <h2>Temperetura{(weather.main.temp - 273.15).toFixed(1)}ºC</h2>
        <h2 className="h2-maxima"> Máxima{(weather.main.temp_max - 273.15).toFixed(1)}ºC - Mínima{(weather.main.temp_min - 273.15).toFixed(1)}ºC</h2>
        <h2> Viento 🌬️ {weather.wind.speed} km/h</h2>
        <div className="div-emoti flex justify-center">
        <h2 className="emoti-first">{weather.weather[0].description}<img className="" src={foundIcon} /> </h2>
        
        </div>
        <div>
            <h1 className="text-2xl p-4">Tiempo de las próximas 24h</h1>

            <div className="proximas-temperaturas flex justify-between ">
            <p>{temp8}ºC<img className="" src={iconurl8} /></p>
            <p>{temp16}ºC<img className="" src={iconurl16} /></p>
            <p>{temp24}ºC<img className="" src={iconurl24} /></p>

            </div>
            
        </div>
   
    </div>
  )} else{
    return(<h1>Introduce una Ciudad</h1>)
  
  
}}

export default Card;