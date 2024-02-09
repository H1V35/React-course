import React, { Suspense } from "react";
import { Router } from "./components/Router";
import { Route } from "./components/Route";
import SearchPage from "./pages/Search";
import Page404 from "./pages/404";

const LazyHomePage = React.lazy(() => import("./pages/Home"));
const LazyAboutPage = React.lazy(() => import("./pages/About"));

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
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}
