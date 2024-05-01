import React, { useContext } from "react";
import "./Header.css";
import windPng from "./../../assets/icons/wind1.png";
import cloudPng from "./../../assets/icons/cloud.png";
import moisturePng from "./../../assets/icons/moisture.png";
import day_nightPng from "./../../assets/icons/day_night.png";
import {CONTEXT} from "./../../misc/Context";
import DateUtil from "../../misc/DateUtil";

const Header = () => {

  const {weatherData} = useContext(CONTEXT);
  const {city, temperature, wind, rain, humidity} = weatherData;

  return (
    <div className="header">
      <div className="header-left">
        <span className="temperature">{temperature} &deg;c</span>
        <span className="today-date">{DateUtil()}</span>
      </div>
      <div className="header-right">
        <div className="temp-details">
          <div className="weather-icon" >
            <img src={windPng} alt="Wind-Icon" />
            <span>{wind}</span>
          </div>
          <div className="weather-icon">
            <img src={cloudPng} alt="Wind-Icon" />
            <span>{rain}</span>
          </div>
          <div className="weather-icon">
            <img src={moisturePng} alt="Wind-Icon" />
            <span>{humidity}</span>
          </div>
          <div className="weather-icon">
            <img src={day_nightPng} alt="Wind-Icon" />
            <span>{new Date().getHours() > 6 && new Date().getHours()<18 ? "Day" : "Night"}</span>
          </div>
        </div>
        <div className="city">{city}</div>
      </div>
    </div>
  );
};

export default Header;
