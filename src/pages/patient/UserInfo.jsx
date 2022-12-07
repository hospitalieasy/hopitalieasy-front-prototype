import { ContentWrapper, Section, UserInfoBase } from "./styles/UserInfo.style";

import AppBar from "../../Components/AppBar/AppBar";
import DefaultBox from "../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../Components/InformationTab/InformationTab";
import LoginForm from "../../Components/LoginForm/LoginForm";

const UserInfo = (props) => {
    const { profileHandler } = props;
    return (
        <UserInfoBase>
            <ContentWrapper>

                <Section width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar profileHandler={profileHandler} />
                    </DefaultBox>
                </Section>

                <Section width={"97%"} height={"100%"}>
                    <DefaultBox margin={"0px 15px 0px 15px"} width={"65%"} height={"100%"} background={"linear-gradient(to right,#e5dbfa, #afb3fc, #8f93fd)"}>
                        <InformationTab buttonLabel={"SAVE"} />
                    </DefaultBox >
                    <DefaultBox width={"30%"} height={"65%"} background={"linear-gradient(to right,#e5dbfa, #afb3fc, #8f93fd)"}>
                        <LoginForm width={"100%"} height={"100%"} buttonLabel={"CHANGE PASSWORD"} title={"Change Your Password"} fontSize={"24px"} label={"new password"} />
                    </DefaultBox>
                </Section>

            </ContentWrapper>
        </UserInfoBase>
    );
}

export default UserInfo;