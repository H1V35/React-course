import React from "react";
import { navigate } from "../lib/navigate";

export function SearchForm({ routeParams }) {
  const [query, setQuery] = React.useState(routeParams.query || "");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search query..."
        className="w-full px-6 py-2 bg-transparent rounded-full border-2 border-[#dedede] font-bold transition duration-300 hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-purple-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Search
      </button>
    </form>
  );
}
