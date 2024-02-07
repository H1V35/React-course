import { useState, useEffect } from "react";
import avatar from "./assets/images/avatar.jpg";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">Home</h1>

      <p className="text-xl">
        This is an example page to create React Router from scratch
      </p>

      {/* <a href="/about" className="font-bold text-fuchsia-500">
        Go to About Us
      </a> */}
      <button
        onClick={() => navigate("/about")}
        className="w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 font-bold transition duration-300 hover:bg-purple-500 hover:border-[#ffffffdd]"
      >
        Go to About Us
      </button>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">About</h1>

      <article className="flex gap-6 items-end">
        <img src={avatar} alt="Hive's Avatar" className="w-64 rounded-3xl" />

        <p className="text-xl">
          Hi, my name is Hive and I&#39;m creating a clone of React Router
        </p>
      </article>

      {/* <a href="/" className="font-bold text-fuchsia-500">
        Go to Home
      </a> */}
      <button
        onClick={() => navigate("/")}
        className="w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 font-bold transition duration-300 hover:bg-purple-500 hover:border-[#ffffffdd]"
      >
        Go to Home
      </button>
    </section>
  );
}

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main className="w-[600px] flex flex-col items-center gap-8">
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}
