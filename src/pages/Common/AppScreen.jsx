import AppBar from "../../Components/AppBar/AppBar";
import { AuthContext } from "../../Context/AuthContext"
import { Outlet } from "react-router-dom";
import { PatternLayout } from "../../Components/DefaultLayout/DefaultLayout.style";
import styled from "styled-components";
import { useContext } from "react";

const AppScreen = () => {
    const {
        setUser,
        userIndex,
        setUserIndex,
        role,
        setRole,
    } = useContext(AuthContext)

    const AppScreenBase = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        background: linear-gradient(to right, #27296d, #35376e, #31254e);
        align-items: center;
        justify-content: center;
        overflow-y: auto;
    `;

    const ScreenWrapper = styled.div`
        height: 100%;
        width: 95%;
    `;

    return (
        <AppScreenBase>
            <ScreenWrapper>
                <PatternLayout>
                    <AppBar
                        role={role}
                        setRole={setRole}
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