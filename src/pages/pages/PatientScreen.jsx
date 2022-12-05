import { MenuItemsWrapper, PatientScreenBase, ScreenWrapper } from "../pageStyles/PatientScreen.style";

import DefaultLayout from "..//..//Components/DefaultLayout/DefaultLayout"
import ItemList from "../../Components/ItemList/ItemList";
import axios from 'axios';
import { useState } from "react";

const PatientScreen = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [findIndexItem, setFindIndexItem] = useState();
    const displayInfo = async (e) => {
        e.preventDefault();

        const response = await axios.get(
            `https://hospitaleasytest20221124115956.azurewebsites.net/WeatherForecast
            `
        );

        setUserName(response.data[0].date);
        setPassword(response.data[1].summary);
        console.log(response.data[0].date);
    }

    return (
        <DefaultLayout>
            <PatientScreenBase>
                <MenuItemsWrapper>
                    <ItemList displayInfo={displayInfo} setFindIndexItem={setFindIndexItem} />
                </MenuItemsWrapper>
                <ScreenWrapper>
                    {findIndexItem === 0 && (
                        <div style={{ color: "#fff" }}>index is 0</div>
                    )}

                    {findIndexItem === 1 && (
                        <div style={{ color: "#fff" }}>index is 1</div>
                    )}

                    {findIndexItem === 2 && (
                        <div style={{ color: "#fff" }}>
                            index is 2
                        </div>
                    )}

                    {findIndexItem === 3 && (
                        <div style={{ color: "#fff" }} >index is 3</div>
                    )}
                </ScreenWrapper>
            </PatientScreenBase>
        </DefaultLayout>
    );
}

export default PatientScreen;