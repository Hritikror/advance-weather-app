import React, { useState } from "react";
import fetchWeather from "./fetchWeather";

export const CONTEXT = React.createContext({
  city: "Deoband, IN",
  temperature: "10",
  wind: "22 N",
  rain: "8%",
  humidity: "17%",
});

export default function ContextState({ children }) {
  const [notification, setNotification] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState({
    city: "Deoband, IN",
    temperature: "10",
    wind: "22 N",
    rain: "8%",
    humidity: "17%",
  });

  //const settingUpWeatherData = async (cityName) => {
   async function settingUpWeatherData(cityName) {
    const data = await fetchWeather(cityName);
    //console.log(data)
    if (data !== null) {
      if(localStorage.getItem("CITIES")) {
        const values = JSON.parse(localStorage.getItem("CITIES"))
        const isCityPresent = values.findIndex((d)=>d.toLowerCase()===cityName.toLowerCase());
        if(isCityPresent === -1) {
            values.push(cityName)
        }
        localStorage.setItem("CITIES", JSON.stringify(values))
      } else {
            //key creation
            localStorage.setItem("CITIES", JSON.stringify([cityName]))
      }
      setWeatherData(data);
    } else {
      //push notification
      setNotification(true);
      let timeout;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  }

  return (
    <CONTEXT.Provider
      value={{
        notification,
        weatherData,
        settingUpWeatherData,
        setNotification,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
}
