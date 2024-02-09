import { Link } from "../components/Link";
import thisIsFine from "../assets/images/this-is-fine-dog.gif";

export default function Page404() {
  document.title = "404";

  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">404</h1>

      <img
        src={thisIsFine}
        alt="This is fine dog gif"
        className="w-full rounded-3xl"
      />

      <Link
        to="/en"
        className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        Go to Home
      </Link>
    </section>
  );
}
