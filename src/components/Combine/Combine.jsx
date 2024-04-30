import React from "react";
import Search from "../Search/Search";
import "./Combine.css";
import Header from "../Header/Header";
import Box from "../Box/Box";
const Combine = () => {
  return (
    <div className="top-level">
      <Search />
      <Header />
      <div className="cities">
      <button className="nav-btn">&#9664;</button>
        <Box />
        <Box />
        <Box />
        <button className="nav-btn">&#9654;</button>
      </div>
    </div>
  );
};

export default Combine;
