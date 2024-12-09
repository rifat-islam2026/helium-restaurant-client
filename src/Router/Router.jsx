import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllFoods from "../pages/Home/Food/AllFoods";
import ViewDetails from "../pages/Home/Food/viewDetails";
import Home from "../pages/Home/Home";

import Gallery from "../pages/Gallery/Gallery";
import AddFoodItem from "../pages/MyProfile/AddFoodItem";
import MyAddedFoodItems from "../pages/MyProfile/MyAddedFoodItems";
import MyOrderedFoodItem from "../pages/MyProfile/MyOrderedFoodItems";
import Profile from "../pages/MyProfile/Profile";
import Update from "../pages/MyProfile/Update";
import Purchase from "../pages/Purchase/purchase";
import PrivateRoute from "./PrivateRoute";

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
        path: "/all-foods",
        element: <AllFoods />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/foods`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-added-food",
        element: (
          <PrivateRoute>
            <MyAddedFoodItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food-item",
        element: (
          <PrivateRoute>
            <AddFoodItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-ordered-items",
        element: (
          <PrivateRoute>
            <MyOrderedFoodItem />
          </PrivateRoute>
        ),
         loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/purchase`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
    ],
  },
]);
 
export default router