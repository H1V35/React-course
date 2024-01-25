import { useState } from "react";
import confetti from "canvas-confetti";

import { GameBoard } from "./components/Gameboard.jsx";
import { Turn } from "./components/Turn.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constants/index.js";
import {
  checkEndGame,
  checkWinner,
  randomInitialTurn,
} from "./logic/gameBoard.js";
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js";

export function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? randomInitialTurn();
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    newBoard[index] = turn;

    setBoard(newBoard);
    setTurn(newTurn);

    saveGameToStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinner(newBoard);

    newWinner
      ? confetti() && setWinner(newWinner)
      : checkEndGame(newBoard) && setWinner(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(randomInitialTurn());
    setWinner(null);

    resetGameStorage();
  };

  return (
    <main className="bg-zinc-900 rounded-3xl min-w-[480px] text-center">
      <h1 className="text-6xl font-extrabold px-6 py-12">tic tac toe</h1>

      <GameBoard board={board} updateBoard={updateBoard} />

      <Turn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
