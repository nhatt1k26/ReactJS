import React, { useReducer, useState } from "react";
import Board from "./Board";
import { caculateWinner } from "../../helpers";
import "./GameStyle.css";

const initilizeState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      break;
  }
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, dispatch] = useReducer(gameReducer, initilizeState);

  const winner = caculateWinner(state.board);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  // const handleClick = (index) => {
  //   // console.log("da nhan roi");
  //   const boardCopy = [...board];
  //   if (winner || boardCopy[index]) return;
  //   boardCopy[index] = xIsNext ? "X" : "O";
  //   setBoard(boardCopy);
  //   setXIsNext(!xIsNext);
  // };

  // const handleResetGame = () => {
  //   setBoard(Array(9).fill(null));
  // };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button class="game-reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
