import { Router } from "./components/Router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

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
      <Router routes={appRoutes} />
    </main>
  );
}
