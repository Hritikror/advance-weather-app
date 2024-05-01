import React, { useEffect, useState } from "react";
import './Box.css';
import fetchWeather from "../../misc/fetchWeather";
const Box = ({propCity}) => {
  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState(propCity);

  async function settingBoxWeather() {
    const { temperature, city } = await fetchWeather(propCity);
    setTemp(temperature);
    setCity(city)
  }

  useEffect(()=>{
    settingBoxWeather()
    
  },[])
  
  return (
    <div className="box">
      <div className="temp-box">{temp} &deg;C</div>
      <div className="city-box">{city}</div>
    </div>
  );
};

export default Box;
