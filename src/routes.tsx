import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Error from "./pages/error";
import Tv from "./pages/tv series";
import Movies from "./pages/movies";
import Bookmarks from "./pages/bookmark/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv-series",
    element: <Tv />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
]);
