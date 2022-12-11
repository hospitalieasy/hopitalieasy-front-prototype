import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../Auth/AuthContext";
import { useContext } from "react";

const Logged = () => {
    const { currentUser } = useContext(AuthContext);
    const useAuth = () => {
        const user = { loggedIn: currentUser };
        return user && user.loggedIn;
    };
    const isAuth = useAuth();

    return isAuth ? <Navigate to={"/app-screen"} /> : <Outlet />;
};

export default Logged;
