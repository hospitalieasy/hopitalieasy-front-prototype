import "..//..//utilities/style/Button.css"

import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide } from "./AppBar.style"

import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const AppBar = (props) => {
    const { profileHandler } = props;
    return (
        <AppBarBase>
            <LeftSide>
                Hello Altar Welcome!
            </LeftSide>
            <RightSide>
                <ContentWrapper>
                    <NotificationWrapper>
                        <NotificationPop />
                    </NotificationWrapper>
                    <ProfileWrapper>
                        <ProfileMenu profileHandler={profileHandler} />
                    </ProfileWrapper>
                </ContentWrapper>
            </RightSide>
        </AppBarBase >
    )
}

export default AppBar;