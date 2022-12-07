import { PatientScreenBase, ScreenWrapper } from "../general/styles/PatientScreen.style";

import Future from "..//..//pages/general/Future";
import Home from "../patient/Home";
import { PatternLayout } from "../../Components/DefaultLayout/DefaultLayout.style";
import UserInfo from "..//..//pages/patient/UserInfo";
import { useState } from "react";

/* import axios from 'axios'; */


const PatientScreen = () => {

    const [menuIndex, setMenuIndex] = useState(null);
    const [profileIndex, setProfileIndex] = useState(false);
    const [profileIndexCloser, setProfileIndexCloser] = useState();


    /* const [username, setUserName] = useState("");
    const [password, setPassword] = useState(""); */

    /*  const displayInfo = async (e) => {
         e.preventDefault();
 
         const response = await axios.get(
             `https://hospitaleasytest20221124115956.azurewebsites.net/WeatherForecast
               `
         );
 
         setUserName(response.data[0].date);
         setPassword(response.data[1].summary);
         console.log(response.data[0].date);
     }  */

    return (
        <PatientScreenBase>
            <ScreenWrapper>
                <PatternLayout>
                    {menuIndex === null && (!profileIndex) && (
                        <Home setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setMenuIndex={setMenuIndex} />
                    )}

                    {(profileIndex) && (!profileIndexCloser) && (
                        <UserInfo setProfileIndexCloser={setProfileIndexCloser} setMenuIndex={setMenuIndex} setProfileIndex={setProfileIndex} />
                    )}

                    {menuIndex === 0 && (profileIndexCloser) && (
                        <Home setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setMenuIndex={setMenuIndex} />
                    )}

                    {menuIndex === 1 && (profileIndexCloser) && (
                        <h2 style={{ color: "#fff" }}>appointment</h2>
                    )}

                    {menuIndex === 2 && (profileIndexCloser) && (
                        <h2 style={{ color: "#fff" }}>test result</h2>
                    )}
                </PatternLayout>
            </ScreenWrapper>
        </PatientScreenBase>
    );
}

export default PatientScreen;