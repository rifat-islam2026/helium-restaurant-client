import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({children}) {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <p>Loading....</p>
    }
    if (user) {
        return children;
    }
  return <Navigate state={location.pathname} />
}

export default PrivateRoute
