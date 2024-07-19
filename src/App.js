import "./scss/main.scss";
import HomePage from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/:lang", element: <HomePage /> },
      { path: "/:lang/:pageName", element: <HomePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
