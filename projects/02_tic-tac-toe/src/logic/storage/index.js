export function loadGameFromStorage() {
  const gameFromStorage = window.localStorage.getItem("gameState");

  return gameFromStorage ? JSON.parse(gameFromStorage) : null;
}

export function saveGameToStorage({ board, turn }) {
  window.localStorage.setItem("gameState", JSON.stringify({ board, turn }));
}

export function resetGameStorage() {
  window.localStorage.removeItem("gameState");
}
