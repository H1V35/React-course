import { useEffect, useState } from "react";
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
import {
  loadGameFromStorage,
  saveGameToStorage,
  resetGameStorage,
} from "./logic/storage/index.js";

export function App() {
  const [game, setGame] = useState(loadGameFromStorage);
  const [winner, setWinner] = useState(null);

  const { board, turn } = game;

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    newBoard[index] = turn;

    setGame({ board: newBoard, turn: newTurn });
    saveGameToStorage({ board: newBoard, turn: newTurn });
  };

  const resetGame = () => {
    setGame({ board: Array(9).fill(null), turn: randomInitialTurn() });
    setWinner(null);
    resetGameStorage();
  };

  useEffect(() => {
    const newWinner = checkWinner(board);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(board)) {
      setWinner(false);
    }
  }, [board]);

  return (
    <main className="bg-zinc-900 rounded-3xl min-w-[480px] text-center">
      <h1 className="text-6xl font-extrabold px-6 py-12">tic tac toe</h1>

      <GameBoard board={board} updateBoard={updateBoard} />

      <Turn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
