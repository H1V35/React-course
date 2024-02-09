import { Router } from "./components/Router";
import { Route } from "./components/Route";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SearchPage from "./pages/Search";
import Page404 from "./pages/404";

const appRoutes = [
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

export function App() {
  return (
    <main className="w-[600px] flex flex-col items-center gap-8">
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  );
}
