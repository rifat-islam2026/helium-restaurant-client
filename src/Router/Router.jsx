import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllFoods from "../pages/Home/Food/AllFoods";
import ViewDetails from "../pages/Home/Food/viewDetails";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/foods`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "all-foods",
        element: <AllFoods />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/foods`),
      },
    ],
  },
]);
 
export default router