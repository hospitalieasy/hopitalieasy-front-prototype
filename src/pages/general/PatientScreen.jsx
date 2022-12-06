import { MenuItemsWrapper, PatientScreenBase, ScreenWrapper } from "../general/styles/PatientScreen.style";

import Home from "../patient/Home";
import ItemList from "../../Components/ItemList/ItemList";
import UserInfo from "../patient/UserInfo";
import axios from 'axios';
import { useState } from "react";

const PatientScreen = () => {

    /* const [username, setUserName] = useState("");
    const [password, setPassword] = useState(""); */
    const [findIndexItem, setFindIndexItem] = useState();
    const [profile, setProfile] = useState(false);

    const profileHandler = (is) => {
        setProfile(is);
    }

    const displayInfo = async (e) => {
        e.preventDefault();

        const response = await axios.get(
            `https://hospitaleasytest20221124115956.azurewebsites.net/WeatherForecast
            `
        );

        /* setUserName(response.data[0].date);
        setPassword(response.data[1].summary); */
        console.log(response.data[0].date);
    }

    return (
        <PatientScreenBase>
            <MenuItemsWrapper>
                <ItemList setProfile={setProfile} displayInfo={displayInfo} setFindIndexItem={setFindIndexItem} />
            </MenuItemsWrapper>
            <ScreenWrapper>
                <>
                    {findIndexItem === 0 && (!profile) && (
                        <Home profileHandler={profileHandler} />
                    )}
                    {findIndexItem === 0 && profile && (
                        <UserInfo profileHandler={profileHandler} />
                    )}

                    {findIndexItem === 1 && (!profile) && (
                        <Home profileHandler={profileHandler} />
                    )}
                    {findIndexItem === 1 && profile && (
                        <UserInfo profileHandler={profileHandler} />
                    )}

                </>
            </ScreenWrapper>
        </PatientScreenBase>
    );
}

export default PatientScreen;