import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

const containerVariants = {
  generic:
    "w-[850px] min-h-[850px] py-6 my-6 bg-zinc-900 rounded-3xl flex flex-col items-center justify-between gap-4 align-middle",
};

const buttonVariants = {
  generic:
    "px-6 py-2 rounded-lg border border-[#ffffffde] font-bold text-base transition duration-300 hover:bg-[#ffffffde] hover:text-zinc-900",
};

const inputVariants = {
  generic:
    "px-6 py-2 bg-zinc-900 rounded-lg border border-[#ffffffde] font-bold text-base transition duration-300 hover:bg-zinc-800 hover:text-zinc-900 focus:outline-purple-400",
};

export function App() {
  const { movies } = useMovies();

  return (
    <div className={containerVariants.generic}>
      <header className="flex flex-col gap-4">
        <h1 className="text-center text-5xl font-extrabold mt-6">
          Movie Search
        </h1>
        <form className="flex gap-4">
          <input
            className={inputVariants.generic}
            placeholder="Avengers, Star Wars, The Matrix..."
          />

          <button className={buttonVariants.generic}>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
