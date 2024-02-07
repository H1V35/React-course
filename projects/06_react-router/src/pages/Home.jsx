import { Link } from "../components/Link";

export default function HomePage() {
  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">Home</h1>

      <p className="text-xl">
        This is an example page to create React Router from scratch
      </p>

      <Link
        to="/about"
        className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Go to About
      </Link>
    </section>
  );
}
