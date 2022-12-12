import { ContentWrapper, ProfileBase, Section1, Section2 } from "../Styles/Profile.style";

import AppBar from "../../../Components/AppBar/AppBar";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import InformationTab from "../../../Components/InformationTab/InformationTab";
import LoginForm from "../../../Components/LoginForm/LoginForm";

const Profile = (props) => {
    const {
        name,
        surname,
        birthday,
        emailArray,
        passwordArray,
        phone,


        setEmail,
        setPassword,
        setUser,

        setProfileIndexCloser,
        setMenuIndex,
        setProfileIndex,
    } = props;

    return (
        <ProfileBase>
            <ContentWrapper>
                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar
                            name={name}

                            setEmail={setEmail}
                            setPassword={setPassword}
                            setUser={setUser}

                            setProfileIndexCloser={setProfileIndexCloser}
                            setMenuIndex={setMenuIndex}
                            setProfileIndex={setProfileIndex}
                        />
                    </DefaultBox>
                </Section1>
                <Section2 width={"95%"} height={"100%"}>
                    <DefaultBox width={"65%"} height={"100%"} background="#fff">
                        <InformationTab
                            name={name}
                            surname={surname}
                            birthday={birthday}
                            emailArray={emailArray}
                            passwordArray={passwordArray}
                            phone={phone}
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