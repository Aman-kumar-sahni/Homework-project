import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (currentUser) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;