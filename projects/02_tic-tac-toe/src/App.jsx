import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS, WINNER_COMBOS } from "../src/constants/constants.js";
import { Square } from "./components/square.jsx";

function checkEndGame(boardToCheck) {
  return boardToCheck.every((square) => square !== null);
}

function checkWinner(boardToCheck) {
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

function randomInitialTurn() {
  return Math.round(Math.random()) === 0 ? TURNS.X : TURNS.O;
}

export function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(randomInitialTurn());
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    newBoard[index] = turn;

    const newWinner = checkWinner(newBoard);

    newWinner
      ? confetti() && setWinner(newWinner)
      : checkEndGame(newBoard) && setWinner(false);

    setBoard(newBoard);
    setTurn(newTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(randomInitialTurn());
    setWinner(null);
  };

  return (
    <main className="bg-zinc-900 rounded-3xl min-w-[480px] text-center">
      <h1 className="text-6xl font-extrabold px-6 py-12">tic tac toe</h1>

      <section className="grid grid-cols-3 grid-rows-3 place-items-center min-h-[480px] gap-2 pb-12 px-6">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} isCell updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="flex justify-center m-15 mx-auto w-fit-content h-40 gap-4 pb-12 px-6 relative rounded-3xl">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <section className="absolute w-screen h-screen top-0 left-0 grid place-items-center bg-black bg-opacity-80">
          <div className="bg-zinc-900 w-[480px] h-[796px] border-4 border-solid border-gray-300 rounded-3xl flex flex-col justify-center items-center gap-8">
            {winner && (
              <header className="w-32 h-32">
                <Square isWinner>{winner}</Square>
              </header>
            )}

            <h2 className="text-6xl font-extrabold">
              {winner === false ? "TIE" : "WINS!"}
            </h2>

            <footer className="mt-12">
              <button
                onClick={resetGame}
                className="px-8 py-4 rounded-3xl font-bold text-3xl border-4 border-solid border-gray-300 hover:bg-gray-200 hover:text-zinc-900 transition duration-300"
              >
                start again
              </button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}
