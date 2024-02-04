import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Movies } from "./components/Movies";

const containerVariants = {
  generic:
    "min-h-[850px] px-16 py-6 m-6 bg-zinc-900 rounded-3xl flex flex-col items-center justify-between gap-4 align-middle",
};

const buttonVariants = {
  generic:
    "px-6 py-2 rounded-lg border border-[#ffffffde] font-bold text-base transition duration-300 hover:bg-[#ffffffde] hover:text-zinc-900",
};

const inputVariants = {
  generic:
    "px-6 py-2 bg-zinc-900 rounded-lg border border-[#ffffffde] font-bold text-base transition duration-300 hover:bg-zinc-800 focus:outline-purple-400",
  error:
    "px-6 py-2 bg-red-600 bg-opacity-20 rounded-lg border border-red-500 font-bold text-base text-red-500 transition duration-300 hover:bg-zinc-800 focus:outline-red-500",
};

export function App() {
  const { movies } = useMovies();
  const { search, setSearch, error } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ search });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.startsWith(" ")) return;

    setSearch(value);
  };

  return (
    <div className={containerVariants.generic}>
      <header className="h-[170px] flex flex-col gap-4">
        <h1 className="text-center text-5xl font-extrabold mt-6">
          Movie Search
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            name="query"
            value={search}
            onChange={handleChange}
            className={error ? inputVariants.error : inputVariants.generic}
            placeholder="Avengers, Star Wars, The Matrix..."
          />

          <button className={buttonVariants.generic}>Search</button>
        </form>

        {error && <p className="text-center text-red-500 font-bold">{error}</p>}
      </header>

      <main className="w-full">
        <Movies movies={movies} />
      </main>
    </div>
  );
}
