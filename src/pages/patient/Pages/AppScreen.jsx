import { AppScreenBase, ScreenWrapper } from "../Styles/AppScreen.style";

import AppBar from "../../../Components/AppBar/AppBar";
import { AuthContext } from "../../../Context/Auth/AuthContext";
import { Outlet } from "react-router-dom";
import { PatternLayout } from "../../../Components/DefaultLayout/DefaultLayout.style";
import { useContext } from "react";

const AppScreen = () => {

    const {
        setUser,
        userIndex,
        setUserIndex,
    } = useContext(AuthContext)

    return (
        <AppScreenBase>
            <ScreenWrapper>
                <PatternLayout>
                    <AppBar
                        setUser={setUser}
                        userIndex={userIndex}
                        setUserIndex={setUserIndex}
                    />
                    <Outlet />
                </PatternLayout>
            </ScreenWrapper>
        </AppScreenBase>
    );
}

export default AppScreen;