import React from "react";
import { SearchForm } from "../components/SearchForm";
import { Link } from "../components/Link";

export default function SearchPage({ routeParams }) {
  React.useEffect(() => {
    routeParams.query
      ? (document.title = `Search: ${routeParams.query}`)
      : (document.title = "Search");
  });

  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">
        Search:{" "}
        <span className="font-normal break-all">{routeParams.query}</span>
      </h1>

      <SearchForm routeParams={routeParams} />

      <Link
        to="/"
        className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Go to Home
      </Link>
    </section>
  );
}
