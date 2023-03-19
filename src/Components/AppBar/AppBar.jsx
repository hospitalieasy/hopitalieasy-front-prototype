import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"
import { useEffect, useState } from "react";

import MailBadge from "../MailBadge/MailBadge"
import Menu from "../Menu/Menu"
import MenuMobile from "../MenuMobile/MenuMobile";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";

const AppBar = (props) => {
    const { setUser, userIndex, setUserIndex, role, setRole } = props;

    const [name, setName] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    /* fetching data and update state when screen width changes */
    let END_POINT;
    useEffect(() => {
        if (role === "doctor") {
            END_POINT = `http://localhost:3002/doctors`;
        } else {
            END_POINT = `http://localhost:3002/patients`;
        }
        axios.get(END_POINT)
            .then((response) => {
                setName(response.data[userIndex].Name);
            }).catch((error) => {
                console.log(error);
            })

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 456);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [END_POINT]);

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
                            setRole={setRole}
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
