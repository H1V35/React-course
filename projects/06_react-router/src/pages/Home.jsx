import { navigate } from "../lib/navigate";

export default function HomePage() {
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
        className="w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Go to About Us
      </button>
    </section>
  );
}
