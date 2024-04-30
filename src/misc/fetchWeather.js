import React from "react";
import axios from "axios";
//https://api.openweathermap.org/data/2.5/forecast?q=kolkata&appid=1478557323f64adaf95c906d8cedb13f
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast?";
const key = "1478557323f64adaf95c906d8cedb13f";

export default async function fetchWeather (city= "deoband") {
  try {
    const data = await axios(`${WEATHER_URL}q=${city}&appid=${key}`);
    if (data.status === 200) {
      const city = data.data.city.name + ", " + data.data.city.country;
      const temperature = (data.data.list[1].main.feels_like - 273.15).toFixed(1);
      const humidity = data.data.list[1].main.humidity + "%";
      const wind = data.data.list[1].wind.speed.toFixed(1) + " N";
      const rain = data.data.list[1].clouds.all + "%";
      //console.log("hey", {city, temperature, humidity, wind, rain})
      return {city, temperature, humidity, wind, rain};
      
    } else {
      return null
    }
  } catch (error) {
    return  null
  }
};


// value={{
//   city: "Deoband, IN",
//   temperature: "10",
//   wind: "22 N",
//   rain: "8%",
//   humidity: "17%",
// }}