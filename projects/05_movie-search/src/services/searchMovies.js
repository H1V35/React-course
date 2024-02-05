const API_KEY = "be1d61b7";
const MOVIES_ENDOPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function searchMovies({ search }) {
  if (!search?.trim()) return null;

  try {
    const res = await fetch(`${MOVIES_ENDOPOINT}&s=${search}`);
    const json = await res.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
}
