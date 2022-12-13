import "..//..//Utilities/Style/Button.css"

import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"

import BasicSpeedDial from "..//SpeedDial/SpeedDial"
import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { localResponse } from "../../Utilities/LocalData/LocalData.testprops";

const AppBar = (props) => {
    const {
        setEmail,
        setPassword,
        setUser,
        userIndex,
        setUserIndex,
    } = props;

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {localResponse[userIndex].name} Welcome</Title>
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
                            setUserIndex={setUserIndex}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setUser={setUser}
                        />
                    </ProfileWrapper>
                </ContentWrapper>
            </RightSide>
        </AppBarBase >
    )
}

export default AppBar;