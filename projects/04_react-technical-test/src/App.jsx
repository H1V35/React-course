import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

const containerVariants = {
  generic:
    "w-[850px] h-[850px] bg-zinc-900 rounded-3xl flex flex-col items-center justify-between gap-4 align-middle",
};

const buttonVariants = {
  generic:
    "px-6 py-2 rounded-full border border-[#ffffffde] font-bold text-base transition duration-300 hover:bg-[#ffffffde] hover:text-zinc-900",
};

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  return (
    <main className={`${containerVariants.generic}`}>
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

        <button onClick={refreshFact} className={`${buttonVariants.generic}`}>
          Get new fact
        </button>
      </section>
    </main>
  );
}
