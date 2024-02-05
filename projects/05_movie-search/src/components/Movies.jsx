import { Movie } from "./Movie";

export function Movies({ movies }) {
  if (!movies?.length) {
    return <p className="text-lg">No movies were found for this search</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-10">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}
