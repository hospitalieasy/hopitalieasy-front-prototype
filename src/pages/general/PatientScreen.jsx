import { ContentWrapper, MenuItemsWrapper, PatientScreenBase, ScreenWrapper } from "../general/styles/PatientScreen.style";

import DefaultBox from "..//..//Components/DefaultBox/DefaultBox"
import ItemList from "../../Components/ItemList/ItemList";
import { PatternLayout } from "../../Components/DefaultLayout/DefaultLayout.style";
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
            <ScreenWrapper>
                <PatternLayout>
                    {findIndexItem === 0 && (
                        <ContentWrapper>
                            <DefaultBox width={"75%"} height={"75vh"} background={"#1e1c36"} />
                        </ContentWrapper>
                    )}

                    {findIndexItem === 1 && (
                        <ContentWrapper>
                            <DefaultBox width={"75%"} height={"75vh"} background={"#1e1c36"} />
                        </ContentWrapper>
                    )}

                    {findIndexItem === 2 && (
                        <div style={{ color: "#fff" }}>
                            index is 2
                        </div>
                    )}

                    {findIndexItem === 3 && (
                        <div style={{ color: "#fff" }} >index is 3</div>
                    )}
                </PatternLayout>
            </ScreenWrapper>
        </PatientScreenBase>
    );
}

export default PatientScreen;