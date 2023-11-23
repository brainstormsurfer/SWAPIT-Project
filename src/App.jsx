import { Warning, Welcome, Game, NotFound } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Warning />,
      },
      {
        path: "intro",
        element: <Welcome />,
      },
      {
        path: "quiz",
        element: <Game />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
