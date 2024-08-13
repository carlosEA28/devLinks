import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login/indes";
import { Newtworks } from "./pages/Networks";
import { ErrorPage } from "./pages/Error";

import { Private } from "./Routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/social",
    element: <Newtworks />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export { router };
