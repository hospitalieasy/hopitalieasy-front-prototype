import { PatientScreenBase, ScreenWrapper } from "../general/styles/PatientScreen.style";

import Future from "..//..//pages/general/Future";
import Home from "../patient/Home";
import UserInfo from "..//..//pages/patient/UserInfo";
import { useState } from "react";

/* import axios from 'axios'; */


const PatientScreen = () => {

    const [findIndexItem, setFindIndexItem] = useState(null);
    const [profileIndex, setProfileIndex] = useState(false);
    const [profileIndexCloser, setProfileIndexCloser] = useState(true);


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
                {findIndexItem === null && (!profileIndex) && (
                    <Home setProfileIndexCloser={setProfileIndexCloser} setProfileIndex={setProfileIndex} setFindIndexItem={setFindIndexItem} />
                )}

                {(profileIndex) && (profileIndexCloser) && (
                    <UserInfo setProfileIndexCloser={setProfileIndexCloser} setFindIndexItem={setFindIndexItem} setProfileIndex={setProfileIndex} />
                )}

                {findIndexItem !== null && (!profileIndexCloser) && (
                    <Future />
                )}
            </ScreenWrapper>
        </PatientScreenBase>
    );
}

export default PatientScreen;