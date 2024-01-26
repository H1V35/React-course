import { useEffect, useState } from "react";
import { Button } from "./Button";

export function CursorTrack() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY });
    };

    enabled && window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("cursor-none", enabled);

    // cleanup (useEffect return):
    //      --> When the component unmounts
    //      --> When the dependencies change, before executing
    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, [enabled]);

  // useEffect dependencies:
  //    []         --> Only runs once when the component mounts
  //    [enabled]  --> Runs when enabled changes and when the component mounts
  //    undefined  --> Runs every time the component renders

  return (
    <>
      <div
        className="absolute w-20 h-20 left-[-40px] top-[-40px] bg-black bg-opacity-50 border-2 border-[#9f64ff] rounded-full opacity-80 pointer-events-none"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />

      <Button enabled={enabled} handleClick={() => setEnabled(!enabled)}>
        Cursor tracker
      </Button>
    </>
  );
}
