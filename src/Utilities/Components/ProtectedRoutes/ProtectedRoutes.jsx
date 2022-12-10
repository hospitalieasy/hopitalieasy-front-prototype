import Future from "../../Pages/Future";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
    const { log } = useContext(UserContext);

    const useAuth = () => {
        const user = { loggedIn: log };
        return user && user.loggedIn;
    }
    const isAuth = useAuth();

    return (
        isAuth ? <Outlet /> : <Future />
    );
}

export default ProtectedRoutes