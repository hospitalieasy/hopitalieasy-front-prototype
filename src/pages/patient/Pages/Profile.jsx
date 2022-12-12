import { ContentWrapper, ProfileBase, Section2 } from "../Styles/Profile.style";

import { AuthContext } from "../../../Utilities/Context/Auth/AuthContext";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../../Components/InformationTab/InformationTab";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import { useContext } from "react";

const Profile = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
    } = useContext(AuthContext);

    return (
        <ProfileBase>
            <ContentWrapper>
                <Section2 width={"95%"} height={"100%"}>
                    <DefaultBox width={"65%"} height={"100%"} background="#fff">

                        <InformationTab />

                    </DefaultBox >
                    <DefaultBox width={"30%"} height={"65%"} background="#fff">
                        <LoginForm padding={"40px"} width={"100%"} height={"100%"} buttonLabel={"CHANGE PASSWORD"} title={"Change Your Password"} fontSize={"24px"} text={"New password"} />
                    </DefaultBox>
                </Section2>
            </ContentWrapper>
        </ProfileBase>
    );
}

export default Profile;