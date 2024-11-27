import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Registration from "../pages/Authentication/Registration";
import SignIn from "../pages/Authentication/SignIn";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path: '/signIn',
                element:<SignIn/>
            },
            {
                path: '/registration',
                element:<Registration/>
            }
    ]
  },
]);
 
export default router