import { Router } from "./components/Router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Page404 from "./pages/404";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
];

export function App() {
  return (
    <main className="w-[600px] flex flex-col items-center gap-8">
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  );
}
