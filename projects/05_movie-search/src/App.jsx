import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Movies } from "./components/Movies";

const containerVariants = {
  generic: "sm:px-16 sm:py-6 flex flex-col items-center gap-4 align-middle",
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
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault();

    getMovies();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.startsWith(" ")) return;

    setSearch(value);
  };

  return (
    <div className={containerVariants.generic}>
      <header className="w-full flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Movie Search</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            name="query"
            value={search}
            onChange={handleChange}
            className={error ? inputVariants.error : inputVariants.generic}
            placeholder="Avengers, Star Wars, The Matrix..."
          />

          <button className={buttonVariants.generic}>Search</button>
        </form>

        {error && (
          <p className="text-center text-red-500 text-sm sm:text-base font-bold">
            {error}
          </p>
        )}
      </header>

      <main className="flex items-center">
        {loading ? (
          <p className="text-lg">Loading...</p>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </div>
  );
}
