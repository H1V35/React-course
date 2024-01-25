import { Square } from "./square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  return (
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
  );
}
