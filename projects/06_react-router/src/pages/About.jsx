import { navigate } from "../lib/navigate";
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

      {/* <a href="/" className="font-bold text-fuchsia-500">
        Go to Home
      </a> */}
      <button
        onClick={() => navigate("/")}
        className="w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Go to Home
      </button>
    </section>
  );
}
