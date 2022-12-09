import { ContentWrapper, Section1, Section2, UserInfoBase } from "..//Styles/UserInfo.style";

import AppBar from "..//..//..//Components/AppBar/AppBar";
import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import InformationTab from "..//..//..//Components/InformationTab/InformationTab";
import LoginForm from "..//..//..//Components/LoginForm/LoginForm";

const UserInfo = (props) => {
    const { setProfileIndex, setMenuIndex, setProfileIndexCloser } = props;
    return (
        <UserInfoBase>
            <ContentWrapper>
                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar setProfileIndexCloser={setProfileIndexCloser} setMenuIndex={setMenuIndex} setProfileIndex={setProfileIndex} />
                    </DefaultBox>
                </Section1>

                <Section2 width={"95%"} height={"100%"}>
                    <DefaultBox width={"65%"} height={"100%"} background={"linear-gradient(to right,#ffffff, #eae0fb, #ebe0ff)"}>
                        <InformationTab buttonLabel={"SAVE"} />
                    </DefaultBox >
                    <DefaultBox width={"30%"} height={"65%"} background={"linear-gradient(to right,#ffffff, #eae0fb, #ebe0ff)"}>
                        <LoginForm width={"100%"} height={"100%"} buttonLabel={"CHANGE PASSWORD"} title={"Change Your Password"} fontSize={"24px"} label={"new password"} />
                    </DefaultBox>
                </Section2>
            </ContentWrapper>
        </UserInfoBase>
    );
}

export default UserInfo;