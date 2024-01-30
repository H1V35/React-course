const CAT_ENDOPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export async function getRandomFact() {
  const res = await fetch(CAT_ENDOPOINT_RANDOM_FACT);
  const { fact } = await res.json();

  return fact;
}

export async function getRandomImage(threeFirstWords, catEndpointImageUrl) {
  const res = await fetch(catEndpointImageUrl);
  const { _id } = await res.json();
  const imageUrl = `https://cataas.com/cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`;

  return imageUrl;
}
