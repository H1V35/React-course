import { useEffect, useState } from "react";
import { getRandomImage } from "../services";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white&json=true`;

    getRandomImage(threeFirstWords, CAT_ENDPOINT_IMAGE_URL).then(
      (newImageUrl) => setImageUrl(newImageUrl)
    );
  }, [fact]);

  return { imageUrl };
}
