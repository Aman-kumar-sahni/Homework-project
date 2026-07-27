import { Navigate, Outlet ,useLocation} from "react-router";

const PublicRoutes = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const location = useLocation();

  return currentUser ? <Navigate       to={location.state?.from?.pathname || "/home"}
 replace /> : <Outlet />;
};

export default PublicRoutes;