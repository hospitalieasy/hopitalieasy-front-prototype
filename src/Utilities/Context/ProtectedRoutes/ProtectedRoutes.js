import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../Auth/AuthContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);
  const useAuth = () => {
    const checkUser = { loggedIn: user };
    return checkUser && checkUser.loggedIn;
  };
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={"/home"} />;
};

export default ProtectedRoutes;
