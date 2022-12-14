import "..//..//Utilities/Style/Button.css"

import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"

import BasicSpeedDial from "..//SpeedDial/SpeedDial"
import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";
import { localResponse } from "../../Utilities/LocalData/LocalData.testprops";

const AppBar = (props) => {
    const {
        setUser,
        userIndex,
        setUserIndex,
    } = props;


    let response;
    try {
        response = axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        );
    } catch (error) {
        console.log(error.response + "get has a error on app bar")
    }

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {response[userIndex].Name} Welcome</Title>
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
                            setUserIndex={setUserIndex}
                        />
                    </ProfileWrapper>
                </ContentWrapper>
            </RightSide>
        </AppBarBase >
    )
}

export default AppBar;