const squareVariants = {
  generic:
    "w-full h-full border-2 border-solid border-gray-300 rounded-3xl grid place-items-center cursor-pointer text-6xl",
  selected:
    "w-full h-full bg-green-500 border-2 border-solid border-green-600 rounded-3xl grid place-items-center cursor-default text-6xl",
  notSelected:
    "w-full h-full border-2 border-solid border-gray-300 rounded-3xl grid place-items-center cursor-default text-6xl",
  winner:
    "w-full h-full bg-gray-700 bg-opacity-40 border-4 border-solid border-amber-500 rounded-3xl grid place-items-center cursor-default text-6xl",
};

function determineSquareVariant(isCell, isSelected, isWinner) {
  if (isCell) {
    return squareVariants.generic;
  }
  if (isWinner) {
    return squareVariants.winner;
  }
  return isSelected ? squareVariants.selected : squareVariants.notSelected;
}

export function Square({
  children,
  isCell,
  isSelected,
  isWinner,
  updateBoard,
  index,
}) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`${determineSquareVariant(isCell, isSelected, isWinner)}`}
    >
      {children}
    </div>
  );
}
