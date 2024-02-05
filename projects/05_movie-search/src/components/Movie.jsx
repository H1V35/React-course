export function Movie({ movie: { id, title, year, poster } }) {
  return (
    <li
      key={id}
      className="w-full h-full flex flex-col items-center justify-between text-center gap-4"
    >
      <header className="w-full">
        <h3 className="truncate text-2xl" title={title}>
          {title}
        </h3>
        <p>{year}</p>
      </header>

      <img
        src={poster}
        alt={`${title} poster`}
        className="w-full h-full object-cover rounded-xl"
      />
    </li>
  );
}
