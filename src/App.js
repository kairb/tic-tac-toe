import React, { useState, useEffect } from "react";
import "./App.css";
import { move, initBoard, getWinningIndexes, isValidMove } from "./utils";
import { Switch } from "./Switch";

//todo
// minimax

const App = () => {
  const [isComputerFirst, setIsComputerFirst] = useState(true);
  const [board, setBoard] = useState(initBoard(isComputerFirst));
  const [winningIndexes, setWinningIndexes] = useState([]);
  const [isMinimaxMode, setIsMinimaxMode] = useState(false);

  const resetGame = () => {
    setBoard([...initBoard(isComputerFirst)]);
    setWinningIndexes([]);
    console.log('reseting')
  };

  useEffect(() => {
    setWinningIndexes(getWinningIndexes(board));
  }, [board]);

  useEffect(() => {
    resetGame();
    //eslint-disable-next-line
  }, [isComputerFirst, isMinimaxMode]);

  return (
    <div className="App">
      <div className="grid">
        {board.map((value, index) => (
          <div
            key={index}
            className={`box ${
              winningIndexes && winningIndexes.includes(index) ? "green" : ""
            }`}
            onClick={() => {
              if (winningIndexes !== [] && isValidMove(board, index)) {
                setBoard(move(board, index, isMinimaxMode));
              }
            }}
          >
            <p className={`${value === "X" ? "greenText" : "redText"}`}>
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="controls">
        <Switch
          state={isMinimaxMode}
          onClick={() => {
            setIsMinimaxMode(!isMinimaxMode);
          }}
          title="Algorithm"
          option1="Random"
          option2="Minimax"
        />
        <Switch
          state={isComputerFirst}
          onClick={() => {
            setIsComputerFirst(!isComputerFirst);
          }}
          title="First move"
          option1="Player"
          option2="Computer"
        />
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default App;
