import { ContentWrapper, ProfileBase, Section2 } from "../Styles/Profile.style";

import { AuthContext } from "../../../Utilities/Context/Auth/AuthContext";
import ChangePassword from "../../../Components/ChangePassword/ChangePassword";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../../Components/InformationTab/InformationTab";
import { useContext } from "react";

const Profile = () => {
    const {
        userIndex,
    } = useContext(AuthContext);

    return (
        <ProfileBase>
            <ContentWrapper>
                <Section2 width={"95%"} height={"100%"}>
                    <DefaultBox width={"65%"} height={"95%"} background="#fff">
                        <InformationTab
                            userIndex={userIndex}
                        />
                    </DefaultBox >
                    <DefaultBox width={"30%"} height={"60%"} background="#fff">
                        <ChangePassword
                            userIndex={userIndex}

                            padding={"40px"}
                            width={"100%"}
                            height={"100%"}
                            buttonLabel={"CHANGE PASSWORD"}
                            title={"Change Your Password"}
                            fontSize={"24px"}
                            text={"New password"}
                        />
                    </DefaultBox>
                </Section2>
            </ContentWrapper>
        </ProfileBase>
    );
}

export default Profile;