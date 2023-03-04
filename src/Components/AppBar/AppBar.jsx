import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"
import { useEffect, useState } from "react";

import BasicSpeedDial from "..//SpeedDial/SpeedDial"
import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";

const AppBar = (props) => {
    const { setUser, userIndex, setUserIndex } = props;
    const [name, setName] = useState("");

    /* fetch data with API */
    useEffect(() => {
        axios.get(
            `http://localhost:3002/users`
        ).then((response) => {
            setName(response.data[userIndex].Name);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {name} Welcome</Title>
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