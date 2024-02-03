export function Movies({ movies }) {
  if (!movies?.length) {
    return <p>No movies were found for this search</p>;
  }

  return (
    <ul className="flex flex-col items-center gap-4">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="flex flex-col items-center gap-2">
            <h3 className="text-2xl">{movie.title}</h3>
            <p>{movie.year}</p>
            <img
              src={movie.poster}
              alt={`${movie.Title} poster`}
              className="w-60"
            />
          </li>
        );
      })}
    </ul>
  );
}
