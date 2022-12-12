import { ContentWrapper, Section1, TestResultBase } from "../Styles/TestResult.style";

import AppBar from "../../../Components/AppBar/AppBar";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import Loading from "..//..//..//Utilities/Components/Loading/Loading"

const Appointment = (props) => {
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
        setProfileIndex,
        setMenuIndex,
    } = props;
    return (
        <TestResultBase>
            <ContentWrapper>

                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setUser={setUser}

                            setProfileIndexCloser={setProfileIndexCloser}
                            setMenuIndex={setMenuIndex}
                            setProfileIndex={setProfileIndex}
                        />
                    </DefaultBox>
                </Section1>

                <h2 style={{ color: "#fff" }}>Test Result</h2>
                <Loading />
            </ContentWrapper>
        </TestResultBase>
    );
}

export default Appointment;