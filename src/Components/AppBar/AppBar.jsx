import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"
import { useEffect, useState } from "react";

import MailBadge from "../MailBadge/MailBadge"
import Menu from "../Menu/Menu"
import MenuMobile from "../MenuMobile/MenuMobile";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";

const AppBar = (props) => {
    const { setUser, userIndex, setUserIndex, role } = props;
    const [name, setName] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    /* update state when screen width changes */
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 456);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {name} Welcome</Title>
                <SpeedDialWrapper>
                    {isSmallScreen ? (<MenuMobile role={role} />) : (<Menu role={role} />)}
                </SpeedDialWrapper>
            </LeftSide>
            <RightSide>
                <ContentWrapper>
                    <NotificationWrapper>
                        <MailBadge />
                    </NotificationWrapper>
                    <ProfileWrapper>
                        <ProfileMenu
                            role={role}
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
