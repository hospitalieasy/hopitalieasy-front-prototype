import { AppScreenBase, ScreenWrapper } from "../Styles/AppScreen.style";

import Appointment from "../Pages/Appointment"
import Home from "./Home";
import { PatternLayout } from "../../../Components/DefaultLayout/DefaultLayout.style";
import Profile from "./Profile";
import TestResult from "../Pages/TestResult"
import axios from "axios";
import { useState } from "react";

/* import axios from 'axios'; */


const AppScreen = () => {

    const [menuIndex, setMenuIndex] = useState(null);
    const [profileIndex, setProfileIndex] = useState(false);
    const [profileIndexCloser, setProfileIndexCloser] = useState();


    const [id, setId] = useState();
    const [password, setPassword] = useState("");

    const displayInfo = async (e) => {
        e.preventDefault();

        const response = await axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        );

        setId(response.data[0].PatientId);
        setPassword(response.data[0].Password);
    };

    return (
        <AppScreenBase>
            <ScreenWrapper>
                <PatternLayout>
                    {menuIndex === null && (!profileIndex) && (
                        <Home setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setMenuIndex={setMenuIndex} />
                    )}

                    {(profileIndex) && (!profileIndexCloser) && (
                        <Profile setProfileIndexCloser={setProfileIndexCloser} setMenuIndex={setMenuIndex} setProfileIndex={setProfileIndex} />
                    )}

                    {menuIndex === 0 && (profileIndexCloser) && (
                        <Home setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setMenuIndex={setMenuIndex} />
                    )}

                    {menuIndex === 1 && (profileIndexCloser) && (
                        <Appointment setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setMenuIndex={setMenuIndex} />
                    )}

                    {menuIndex === 2 && (profileIndexCloser) && (
                        <TestResult setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setMenuIndex={setMenuIndex} />
                    )}
                </PatternLayout>
            </ScreenWrapper>
        </AppScreenBase>
    );
}

export default AppScreen;