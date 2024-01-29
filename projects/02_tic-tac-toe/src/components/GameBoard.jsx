import { Square } from "./Square";

export function GameBoard({ board, updateBoard }) {
  return (
    <section className="grid grid-cols-3 grid-rows-3 place-items-center min-h-[480px] gap-2 pb-12 px-6">
      {board.map((square, index) => {
        return (
          <Square key={index} index={index} isCell updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}
    </section>
  );
}
