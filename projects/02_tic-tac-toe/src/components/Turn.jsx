import { Square } from "./Square";
import { TURNS } from "../constants";

export function Turn({ turn }) {
  return (
    <section className="flex justify-center m-15 mx-auto w-fit-content h-40 gap-4 pb-12 px-6 relative rounded-3xl">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
}
