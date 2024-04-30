import { useEffect, useState } from "react";
import "./App.css";
import Combine from "./components/Combine/Combine";
import fetchWeather from "./misc/fetchWeather";
import WaetherDataContext from "./misc/Context";
import Notification from "./components/NotificationError/Notification";


function App() {
  const [notification, setNotification] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState({
    city: "Deoband, IN",
    temperature: "10",
    wind: "22 N",
    rain: "8%",
    humidity: "17%",
  });

  async function settingUpWeatherData(cityName) {
    const data = await fetchWeather(cityName);
    //console.log(data)
    if(data !== null) {
      //data.then(d =>{ setWeatherData(d);console.log(d) })
      setWeatherData(data)
    } else {
      //push notification
      setNotification(true);
      let timeout;
      if(timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  }

  useEffect(()=>{
    settingUpWeatherData("berlin")
  },[])

  
  
  return (
    <>
      <WaetherDataContext.Provider
        value={{weatherData:weatherData, settingUpWeatherData:settingUpWeatherData, setNotification:setNotification, searchValue:searchValue, setSearchValue:setSearchValue}}
      >
        <Combine />
        {notification && <Notification city={searchValue?.value}/>}
      </WaetherDataContext.Provider>
      
    </>
  );
}

export default App;
