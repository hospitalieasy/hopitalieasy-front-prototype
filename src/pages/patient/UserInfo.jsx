import { ContentWrapper, Section, UserInfoBase } from "./styles/UserInfo.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../Components/InformationTab/InformationTab";

const UserInfo = () => {
    return (
        <UserInfoBase>
            <ContentWrapper>

                <Section width={"95%"} height={"15%"}>
                    <DefaultBox width={"100%"} height={"100%"} background={"#1e1c36"}>

                    </DefaultBox>
                </Section>

                <Section width={"97%"} height={"100%"}>
                    <DefaultBox margin={"0px 15px 0px 15px"} width={"65%"} height={"100%"} background={"linear-gradient(to right,#e5dbfa, #afb3fc, #8f93fd)"}>
                        <InformationTab buttonLabel={"SAVE"} />
                    </DefaultBox >
                    <DefaultBox width={"30%"} height={"65%"} background={"linear-gradient(to right,#e5dbfa, #afb3fc, #8f93fd)"}>

                    </DefaultBox>
                </Section>

            </ContentWrapper>
        </UserInfoBase>
    );
}

export default UserInfo;