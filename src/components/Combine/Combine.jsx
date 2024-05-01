import React, { useState } from "react";
import Search from "../Search/Search";
import "./Combine.css";
import Header from "../Header/Header";
import Box from "../Box/Box";


const Combine = () => {
  const [startIndex, setStartIndex] = useState(0);

  const cities = JSON.parse(localStorage.getItem("CITIES")) || [];

  function handleNext() {
    if(startIndex +3 < cities.length) {
      setStartIndex(startIndex +1)
    }
  }

  function handlePrevious() {
    if(startIndex>0) {
      setStartIndex(startIndex -1)
    }
  }

  return (
    <div className="top-level">
      <Search />
      <Header />
      <div className="cities"  >
        <button className="nav-btn" onClick={handlePrevious} disabled={!startIndex}>&#9664;</button>
        {cities.slice(startIndex, startIndex+3).map((city) => (
          <Box key={city} propCity={city} />
        ))} 
        <button className="nav-btn" onClick={handleNext} disabled={startIndex+3 === cities.length}>&#9654;</button>
      </div>
    </div>
  );
};

export default Combine;
