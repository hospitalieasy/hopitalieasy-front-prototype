import { ContentWrapper, ProfileBase, Section1, Section2 } from "../Styles/Profile.style";

import AppBar from "../../../Components/AppBar/AppBar";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../../Components/InformationTab/InformationTab";
import LoginForm from "../../../Components/LoginForm/LoginForm";

const Profile = (props) => {
    const {
        setCurrentUser,
        name,
        surname,
        birthday,
        email,
        password,
        phone,
        setProfileIndexCloser,
        setProfileIndex,
        setMenuIndex,
    } = props;

    return (
        <ProfileBase>
            <ContentWrapper>
                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar
                            name={name}
                            setCurrentUser={setCurrentUser}
                            setProfileIndexCloser={setProfileIndexCloser}
                            setMenuIndex={setMenuIndex}
                            setProfileIndex={setProfileIndex} />
                    </DefaultBox>
                </Section1>
                <Section2 width={"95%"} height={"100%"}>
                    <DefaultBox width={"65%"} height={"100%"} background="#fff">
                        <InformationTab
                            name={name}
                            surname={surname}
                            birthday={birthday}
                            email={email}
                            password={password}
                            phone={phone}
                            buttonLabel={"SAVE"}
                        />
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