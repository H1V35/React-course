import { TURNS, WINNER_COMBOS } from "../constants/constants";

export function checkEndGame(boardToCheck) {
  return boardToCheck.every((square) => square !== null);
}

export function checkWinner(boardToCheck) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
}

export function randomInitialTurn() {
  return Math.round(Math.random()) === 0 ? TURNS.X : TURNS.O;
}
