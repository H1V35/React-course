import { useEffect, useState } from "react";

const CAT_ENDOPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white&json=true`;

    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response;
        const url = `https://cataas.com/cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`;

        setImageUrl(url);
      });
  }, [fact]);

  return (
    <main className="flex flex-col items-center align-middle bg-zinc-900 rounded-3xl w-[800px]">
      <h1 className="text-5xl font-extrabold px-12 pt-12 pb-8">Gatetes App</h1>
      {imageUrl && (
        <picture className="px-12 pb-8">
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
            className="max-h-[600px] rounded-3xl"
          />
        </picture>
      )}
      {fact && (
        <p className="text-center text-2xl font-medium px-12 pb-12">{fact}</p>
      )}
    </main>
  );
}
