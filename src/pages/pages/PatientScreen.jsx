import { MenuItemsWrapper, PatientScreenBase } from "../pageStyles/PatientScreen.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
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

        <PatientScreenBase>
            <MenuItemsWrapper>
                <ItemList displayInfo={displayInfo} setFindIndexItem={setFindIndexItem} />
            </MenuItemsWrapper>
            <DefaultBox>
                {findIndexItem === 0 && (
                    <div>index is 0</div>
                )}

                {findIndexItem === 1 && (
                    <div>index is 1</div>
                )}

                {findIndexItem === 2 && (
                    <div>
                        index is 2
                        <h3> username : {username} </h3>
                        <h3> password : {password} </h3>
                    </div>
                )}

                {findIndexItem === 3 && (
                    <div>index is 3</div>
                )}
            </DefaultBox>
        </PatientScreenBase>

    );
}

export default PatientScreen;