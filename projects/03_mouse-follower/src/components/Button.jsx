const buttonVariants = {
  on: "px-6 py-3 rounded-3xl border-2 border-green-500 text-base font-semibold text-green-500 bg-green-800 bg-opacity-20 hover:bg-zinc-900 hover:bg-opacity-100 cursor-pointer transition duration-250 hover:border-zinc-400",
  off: "px-6 py-3 rounded-3xl border-2 border-red-500 text-base font-semibold text-red-500 bg-red-900 bg-opacity-20 hover:bg-zinc-900 hover:bg-opacity-100 cursor-pointer transition duration-250 hover:border-zinc-400",
};

export function Button({ children, enabled, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`${enabled ? buttonVariants.on : buttonVariants.off}`}
    >
      {children} {enabled ? "ON" : "OFF"}
    </button>
  );
}
