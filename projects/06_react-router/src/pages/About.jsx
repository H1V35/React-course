import { Link } from "../components/Link";
import avatar from "../assets/images/avatar.jpg";

export default function AboutPage() {
  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">About</h1>

      <article className="flex gap-6 items-end">
        <img src={avatar} alt="Hive's Avatar" className="w-64 rounded-3xl" />

        <p className="text-xl">
          Hi, my name is Hive and I&#39;m creating a clone of React Router
        </p>
      </article>

      <Link
        to="/"
        className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Go to Home
      </Link>
    </section>
  );
}
