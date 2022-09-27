import React from "react";
import { useAppContext } from "../App";
import { GrClose } from "react-icons/gr";
import { BsCircle } from "react-icons/bs";

const hash = {
  0: "",
  1: <GrClose className="icon" />,
  2: <BsCircle className="icon" />,
};
function Board() {
  const { squares, currentPlayer, draw } = useAppContext();
  return (
    <main>
      <section className="board">
        <h2>Tic Tac Toe</h2>
        <p>
          <span>Player: {currentPlayer}</span>
          <span>
            1: {hash[1]}, 2: {hash[2]}
          </span>
        </p>
        <div className="container">
          {squares.map((square, index) => {
            return (
              <div className="square" key={index} onClick={() => draw(index)}>
                {hash[square]}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Board;
