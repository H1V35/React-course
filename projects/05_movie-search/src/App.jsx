import React from "react";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { Movies } from "./components/Movies";
import debounce from "just-debounce-it";

const containerVariants = {
  generic: "sm:px-16 sm:py-6 flex flex-col items-center gap-8 align-middle",
};

const buttonVariants = {
  generic:
    "w-full px-6 py-2 rounded-lg border border-[#ffffffde] text-base font-bold transition duration-300 hover:bg-[#ffffffde] hover:text-zinc-900",
  on: "w-full px-6 py-2 rounded-lg border border-green-500 text-base font-bold text-green-500 transition duration-300 hover:bg-green-800 hover:bg-opacity-30",
};

const inputVariants = {
  generic:
    "w-full px-6 py-2 bg-zinc-900 rounded-lg border border-[#ffffffde] font-bold text-base transition duration-300 hover:bg-zinc-800 focus:outline-purple-400",
  error:
    "w-full px-6 py-2 bg-red-600 bg-opacity-20 rounded-lg border border-red-500 font-bold text-base text-red-500 transition duration-300 hover:bg-zinc-800 focus:outline-red-500",
};

export function App() {
  const [sort, setSort] = React.useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = React.useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    getMovies({ search });
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    if (newSearch.startsWith(" ")) return;

    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className={containerVariants.generic}>
      <header className="w-full flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Movie Search</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col sm:flex-row justify-between gap-4"
        >
          <input
            name="query"
            value={search}
            onChange={handleChange}
            className={error ? inputVariants.error : inputVariants.generic}
            placeholder="Avengers, Star Wars, The Matrix..."
          />

          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={handleSort}
              className={sort ? buttonVariants.on : buttonVariants.generic}
            >
              Sort
            </button>

            <button type="submit" className={buttonVariants.generic}>
              Search
            </button>
          </div>
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
