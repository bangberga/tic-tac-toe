import React from "react";
import { useAppContext } from "../App";

function Popup() {
  const { isEnd, again, winner } = useAppContext();
  return (
    isEnd && (
      <div className="modal">
        <section className="content">
          <h2>{winner ? `The player ${winner} win` : "Draw"}</h2>
          <button onClick={again}>play again</button>
        </section>
      </div>
    )
  );
}

export default Popup;
