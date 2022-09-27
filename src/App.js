import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducers/board-reducer";
import { DRAW, HANDLE_TURN, HANDLE_END, REFRESH } from "./actions";
import { isWin, isEnd } from "./utils/game";

const AppContext = React.createContext();

const width = 7;
const height = 7;

const initialStates = {
  squares: new Array(width * height).fill(0),
  currentPlayer: 1,
  isEnd: false,
  winner: null,
};

function App({ children }) {
  const [states, dispatch] = useReducer(reducer, initialStates);

  const draw = (index) => {
    if (states.squares[index] !== 0 || states.isEnd) return;
    dispatch({ type: DRAW, payload: index });
    isWin(states.currentPlayer, index, width, height, states.squares)
      ? dispatch({ type: HANDLE_END, payload: states.currentPlayer })
      : dispatch({ type: HANDLE_TURN });
  };

  const again = () => {
    dispatch({ type: REFRESH, payload: { width, height } });
  };

  useEffect(() => {
    if (isEnd(states.squares)) dispatch({ type: HANDLE_END });
  }, [states.currentPlayer, states.squares]);

  return (
    <AppContext.Provider value={{ ...states, draw, again }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

export default App;
