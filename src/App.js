import "./scss/main.scss";
import HomePage from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Root";

import AboutPage from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
