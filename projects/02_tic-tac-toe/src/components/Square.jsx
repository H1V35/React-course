const squareVariants = {
  generic:
    "w-full h-full border-2 border-solid  rounded-3xl grid place-items-center cursor-pointer text-6xl",
  selected: "bg-green-500 border-green-600",
  notSelected: "border-gray-300",
};

export function Square({ children, isSelected, updateBoard, index }) {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className={`${squareVariants.generic} ${
        isSelected ? squareVariants.selected : squareVariants.notSelected
      }`}
    >
      {children}
    </div>
  );
}
