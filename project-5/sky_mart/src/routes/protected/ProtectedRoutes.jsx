import { Navigate, Outlet,useLocation } from "react-router";

const ProtectedRoutes = () => {
    const location = useLocation();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return currentUser ? <Outlet /> : <Navigate to="/login"       state={{ from: location }}
 replace />;
};

export default ProtectedRoutes;