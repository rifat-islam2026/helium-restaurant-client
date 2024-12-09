import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p className="pt-10">Loading....</p>;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace={true} />;
}

export default PrivateRoute;
