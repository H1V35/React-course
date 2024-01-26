import { randomInitialTurn } from "../gameBoard";

export function loadGameFromStorage() {
  const gameFromStorage = window.localStorage.getItem("gameState");
  const game = JSON.parse(gameFromStorage);

  const initialBoard = game?.board ? game.board : Array(9).fill(null);
  const initialTurn = game?.turn ?? randomInitialTurn();

  return { board: initialBoard, turn: initialTurn };
}

export function saveGameToStorage({ board, turn }) {
  window.localStorage.setItem("gameState", JSON.stringify({ board, turn }));
}

export function resetGameStorage() {
  window.localStorage.removeItem("gameState");
}
