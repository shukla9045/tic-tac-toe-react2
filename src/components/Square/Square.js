import "./Square.css";
import React, { useState } from "react";
const Square = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <div className="square" onClick={handleClick}></div>;
};

export default Square;
