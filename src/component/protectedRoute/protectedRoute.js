import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
