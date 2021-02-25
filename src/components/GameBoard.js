import React, { useState } from "react";
import Square from "./Square/Square";
import { Button } from "react-bootstrap";
const GameBoard = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [move, setMove] = useState(1);
  const emptyState = [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null }
  ];
  const [gameState, setGameState] = useState(emptyState);
  //console.log(gameState);
  const handleClick = () => {
    setGameState(emptyState);
    setMove(1);
  };
  const checkWinlose = (gameState) => {
    if (
      gameState[0].value === gameState[1].value &&
      gameState[0].value === gameState[2].value
    ) {
      if (gameState[0].value != null) return true;
    } else if (
      gameState[3].value === gameState[4].value &&
      gameState[4].value === gameState[5].value
    ) {
      if (gameState[3].value != null) return true;
    } else if (
      gameState[6].value === gameState[7].value &&
      gameState[7].value === gameState[8].value
    ) {
      if (gameState[6].value != null) return true;
    } else if (
      gameState[0].value === gameState[3].value &&
      gameState[3].value === gameState[6].value
    ) {
      if (gameState[0].value != null) return true;
    } else if (
      gameState[1].value === gameState[4].value &&
      gameState[4].value === gameState[7].value
    ) {
      if (gameState[1].value != null) return true;
    } else if (
      gameState[2].value === gameState[5].value &&
      gameState[5].value === gameState[8].value
    ) {
      if (gameState[2].value != null) return true;
    } else if (
      gameState[0].value === gameState[4].value &&
      gameState[4].value === gameState[8].value
    ) {
      if (gameState[0].value != null) return true;
    } else if (
      gameState[2].value === gameState[4].value &&
      gameState[4].value === gameState[6].value
    ) {
      if (gameState[2].value != null) return true;
    }

    return false;
  };
  const executeMove = (index) => {
    if (gameState[index].value != null) {
      alert("Can't fill here it is already filled");
    } else {
      let newGameState = gameState;
      newGameState[index].value = currentPlayer;
      let newmove = move + 1;
      setMove(newmove);
      setGameState(newGameState);
      let nextPlayer = currentPlayer === "X" ? "0" : "X";

      setCurrentPlayer(nextPlayer);

      if (move >= 3) {
        if (checkWinlose(gameState)) {
          setTimeout(() => {
            alert(`PLAYER ${currentPlayer} HAS WON !HURRAH`);
          }, 500);
          nextPlayer = null;
          setCurrentPlayer(nextPlayer);
          setMove(1);
        } else {
          if (move === 9) {
            setTimeout(() => {
              alert("GAME IS DRAW YOU CAN RESTART GAME");
            }, 500);
            nextPlayer = null;
            setMove(1);
          }
        }
      }
      // console.table(gameState);
    }
  };
  return (
    <>
      <div className="col-md-12 col-12 text-center">
        <h3>
          CurrentPlayer: {currentPlayer}{" "}
          <Button variant="danger" onClick={handleClick}>
            Restart
          </Button>
        </h3>
      </div>
      <div className="gameBoard bg-white col-md-6 offset-md-3 shadow-sm row p-3">
        {gameState.map((square, key) => (
          <Square
            key={key}
            index={key}
            executeMove={executeMove}
            currentPlayer={currentPlayer}
            gameState={gameState}
            setMove={setMove}
          />
        ))}
      </div>
    </>
  );
};

export default GameBoard;
