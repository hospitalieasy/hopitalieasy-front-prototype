import "..//..//Utilities/Style/Button.css"

import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"
import { useEffect, useState } from "react";

import BasicSpeedDial from "..//SpeedDial/SpeedDial"
import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";

const AppBar = (props) => {
    const { setUser, userIndex, setUserIndex } = props;

    /* sets the name  */
    const [apiName, apiSetName] = useState("");

    /* gets the data from server */
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).catch(error => (console.log(error)))

            apiSetName(response.data[userIndex].Name)
        }
        getData();
    }, [])

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {apiName} Welcome</Title>
                <SpeedDialWrapper>
                    <BasicSpeedDial />
                </SpeedDialWrapper>
            </LeftSide>
            <RightSide>
                <ContentWrapper>
                    <NotificationWrapper>
                        <NotificationPop />
                    </NotificationWrapper>
                    <ProfileWrapper>
                        <ProfileMenu
                            setUser={setUser}
                            userIndex={userIndex}
                            setUserIndex={setUserIndex}
                        />
                    </ProfileWrapper>
                </ContentWrapper>
            </RightSide>
        </AppBarBase >
    )
}

export default AppBar;