import { Warning, Welcome, Game, NotFound } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";
import About from "./pages/About";

const routes = [
  // {
  //   path: "/", element: <About />
  // }
  {
    path: "/",
    element: <Warning />,
  },
  {
    path: "intro",
    element: <Welcome />,
  },
  {
    path: "quiz",
    element: <SharedLayout />,
    children: [
      {
        index: true,
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
  
  // return <About />
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
