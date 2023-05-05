import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
import { caculateWinner } from "../../helpers";
const Board = (props) => {
//   const cells = ["Y", "Y", "Y", "X", "X", "X", null, null, null];
//   console.log(caculateWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className ={item == null? "" : item =="X" ? "is-x": "is-o" }
        ></Cell>
      ))}   
       </div>
  );
};

export default Board;
