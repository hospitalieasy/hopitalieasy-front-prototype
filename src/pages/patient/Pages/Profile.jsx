import { AuthContext } from "..//..//..//Context/AuthContext";
import InformationTab from "../../../Components/InformationTab/InformationTab";
import { ProfileBase } from "../Styles/Profile.style";
import { useContext } from "react";

const Profile = () => {
    const {
        userIndex,
    } = useContext(AuthContext);

    return (
        <ProfileBase>
            <InformationTab
                userIndex={userIndex}
            />
        </ProfileBase>
    );
}

export default Profile;