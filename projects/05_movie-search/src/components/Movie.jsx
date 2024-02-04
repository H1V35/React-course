export function Movie({ movie: { id, title, year, poster } }) {
  return (
    <li
      key={id}
      className="h-full flex flex-col items-center justify-between text-center gap-4"
    >
      <header>
        <h3 className="text-2xl">{title}</h3>
        <p>{year}</p>
      </header>

      <img src={poster} alt={`${title} poster`} className="w-60 rounded-xl" />
    </li>
  );
}
