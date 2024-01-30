import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  return (
    <main className="w-[850px] h-[850px] flex flex-col justify-between items-center gap-4 align-middle bg-zinc-900 rounded-3xl">
      <h1 className="text-5xl font-extrabold mt-12">Gatetes App</h1>

      {imageUrl && (
        <picture className="h-[50%] px-12">
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
            className="h-full rounded-3xl"
          />
        </picture>
      )}

      <section className="flex flex-col justify-between items-center gap-6 px-12 pb-12">
        {fact && <p className="text-center text-2xl font-medium">{fact}</p>}

        <button
          onClick={refreshFact}
          className="font-bold text-base px-6 py-2 rounded-full border border-[#ffffffde] transition duration-300 hover:text-zinc-900 hover:bg-[#ffffffde]"
        >
          Get new fact
        </button>
      </section>
    </main>
  );
}
