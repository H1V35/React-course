import { useState } from "react";
import { TURNS } from "../src/constants/constants.js";
import { Square } from "./components/square.jsx";

export function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    const newBoard = [...board];
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    newBoard[index] = turn;

    setBoard(newBoard);
    setTurn(newTurn);
  };

  return (
    <main className="bg-zinc-900 rounded-3xl min-w-[480px] text-center">
      <h1 className="text-6xl font-extrabold px-6 py-12">tic tac toe</h1>

      <section className="grid grid-cols-3 place-items-center min-h-[480px] gap-2 pb-12 px-6">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="flex justify-center m-15 mx-auto w-fit-content h-40 gap-4 pb-12 px-6 relative rounded-3xl">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}
