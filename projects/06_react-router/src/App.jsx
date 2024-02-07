import React from "react";
import { EVENTS } from "./constants";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

export function App() {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main className="w-[600px] flex flex-col items-center gap-8">
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}
