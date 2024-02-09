import { useI18n } from "../hooks/useI18n";
import { Link } from "../components/Link";
import { LANGUAGES } from "../constants";

export default function HomePage({ routeParams }) {
  document.title = "React router | Home";
  const i18n = useI18n(routeParams.lang ?? "en");

  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">{i18n.home.title}</h1>

      <p className="text-xl">{i18n.home.description}</p>

      <div className="flex gap-4">
        <Link
          to={
            LANGUAGES.includes(routeParams.lang)
              ? `/${routeParams.lang}/about`
              : "/en/about"
          }
          className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
        >
          {i18n.home.aboutButton}
        </Link>

        <Link
          to="/search"
          className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
        >
          {i18n.home.searchButton}
        </Link>
      </div>
    </section>
  );
}
