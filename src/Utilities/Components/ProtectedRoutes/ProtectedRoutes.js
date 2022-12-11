import { AuthContext } from "../Auth/AuthContext";
import Home from "../../../Pages/Common/Pages/Home";
import { Outlet } from "react-router-dom";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  const useAuth = () => {
    const user = { loggedIn: currentUser };
    return user && user.loggedIn;
  };
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Home />;
};

export default ProtectedRoutes;
