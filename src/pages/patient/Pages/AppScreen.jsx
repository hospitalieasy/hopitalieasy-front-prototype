import { AppScreenBase, ScreenWrapper } from "../Styles/AppScreen.style";

import AppBar from "../../../Components/AppBar/AppBar";
import { AuthContext } from "../../../Utilities/Context/Auth/AuthContext";
import { Outlet } from "react-router-dom";
import { PatternLayout } from "../../../Components/DefaultLayout/DefaultLayout.style";
import { useContext } from "react";

const AppScreen = () => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        userIndex,
        setUserIndex,
    } = useContext(AuthContext)

    return (
        <AppScreenBase>
            <ScreenWrapper>
                <PatternLayout>
                    <AppBar
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        user={user}
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