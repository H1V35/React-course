import { useI18n } from "../hooks/useI18n";
import { Link } from "../components/Link";
import { LANGUAGES } from "../constants";
import avatar from "../assets/images/avatar.jpg";

export default function AboutPage({ routeParams }) {
  document.title = "About";
  const i18n = useI18n(routeParams.lang ?? "en");

  return (
    <section className="w-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold">{i18n.about.title}</h1>

      <article className="flex gap-6 items-end">
        <img src={avatar} alt="Hive's Avatar" className="w-64 rounded-3xl" />

        <p className="text-xl">{i18n.about.description}</p>
      </article>

      <Link
        to={
          LANGUAGES.includes(routeParams.lang) ? `/${routeParams.lang}` : "/en"
        }
        className="block w-52 px-6 py-2 bg-purple-600 rounded-full border-2 border-purple-600 text-center font-bold transition duration-300 hover:bg-purple-500 hover:border-[#dedede]"
      >
        {i18n.about.homeButton}
      </Link>
    </section>
  );
}
