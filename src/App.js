import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}
