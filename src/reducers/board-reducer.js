import { DRAW, HANDLE_TURN, HANDLE_END, REFRESH } from "../actions";

const reducer = (state, action) => {
  if (action.type === DRAW) {
    const player = state.currentPlayer;
    state.squares[action.payload] = player;
    return { ...state };
  }
  if (action.type === HANDLE_TURN) {
    const player = state.currentPlayer;
    return { ...state, currentPlayer: player === 1 ? 2 : 1 };
  }
  if (action.type === HANDLE_END) {
    return { ...state, isEnd: true, winner: action.payload || null };
  }
  if (action.type === REFRESH) {
    const { width, height } = action.payload;
    return {
      ...state,
      squares: new Array(width * height).fill(0),
      isEnd: false,
      currentPlayer: 1,
      winner: null,
    };
  }
};

export default reducer;
