import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"
import { useEffect, useState } from "react";

import MailBadge from "../MailBadge/MailBadge"
import Menu from "../Menu/Menu"
import MenuMobile from "../MenuMobile/MenuMobile";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";

const AppBar = (props) => {
    const { setUser, userIndex, setUserIndex, userId, role, setRole } = props;

    const [name, setName] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    /* fetching data and update state when screen width changes */
    let END_POINT;
    useEffect(() => {
        if (role === "doctor") {
            END_POINT = process.env.REACT_APP_DOCTOR_URL;
        } else {
            END_POINT = process.env.REACT_APP_PATIENT_URL;
        }
        axios.get(END_POINT)
            .then((response) => {
                setName(response.data[userIndex].name);
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
                        <MailBadge userId={userId} />
                    </NotificationWrapper>
                    <ProfileWrapper>
                        <ProfileMenu
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
