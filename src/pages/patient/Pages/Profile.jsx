import { ProfileBase, Section } from "../Styles/Profile.style";

import { AuthContext } from "..//..//..//Context/AuthContext";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../../Components/InformationTab/InformationTab";
import { useContext } from "react";

const Profile = () => {
    const {
        userIndex,
        role,
    } = useContext(AuthContext);

    return (
        <ProfileBase>
            <Section width={"95%"} height={"100%"}>
                <DefaultBox width={"75%"} height={"90%"} background="#fff">
                    <InformationTab
                        role={role}
                        userIndex={userIndex}
                    />
                </DefaultBox >
            </Section>
        </ProfileBase>
    );
}

export default Profile;