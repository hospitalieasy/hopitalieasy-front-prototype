import { MenuItemsWrapper, PatientScreenBase } from "../pageStyles/PatientScreen.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
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
            `https://api.openweathermap.org/data/2.5/weather?q=london&appid=211e697b0d1ded8c3e77cb2b7f3ca6b9
            `
        );

        setUserName(response.data.name);
        setPassword(response.data.wind.deg);
    }


    return (
        <DefaultLayoutFirst>
            <PatientScreenBase>
                <MenuItemsWrapper>
                    <ItemList displayInfo={displayInfo} setFindIndexItem={setFindIndexItem} />
                </MenuItemsWrapper>
                <DefaultBox>
                    {findIndexItem == 0 && (
                        <div>index is 0</div>
                    )}

                    {findIndexItem == 1 && (
                        <div>index is 1</div>
                    )}

                    {findIndexItem == 2 && (
                        <div>
                            index is 2
                            <h3> username : {username} </h3>
                            <h3> password : {password} </h3>
                        </div>
                    )}

                    {findIndexItem == 3 && (
                        <div>index is 3</div>
                    )}
                </DefaultBox>
            </PatientScreenBase>
        </DefaultLayoutFirst>
    );
}

export default PatientScreen;