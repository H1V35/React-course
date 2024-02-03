import moviesResponse from "../mocks/movies-response.json";
// import noMoviesResponse from "../mocks/no-movies-response.json";

export function useMovies() {
  const movies = moviesResponse.Search;
  const mappedMovies = movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  });

  return { movies: mappedMovies };
}
