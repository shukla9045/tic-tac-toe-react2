import "./Square.css";
import React, { useState } from "react";

const Square = ({ index, executeMove, currentPlayer, gameState, setMove }) => {
  // console.log(index);
  const handleClick = () => {
    console.log("clicked");
  };
  const drawGrid = (index) => {
    let borderString = "";
    if (index === 3 || index === 4 || index === 5) {
      borderString += " bb bt";
    }
    if (index === 1 || index === 4 || index === 7) {
      borderString += " bsb";
    }

    return borderString;
  };
  return (
    <div
      className={`square ${drawGrid(index)} `}
      onClick={(e) => executeMove(index)}
    >
      <h1>{gameState[index].value}</h1>
    </div>
  );
};

export default Square;
