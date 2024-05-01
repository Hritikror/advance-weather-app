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
      //data.then(d =>{ setWeatherData(d);console.log(d) })
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
