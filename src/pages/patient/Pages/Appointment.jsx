import { AppointmentBase, ContentWrapper, Section1 } from "../Styles/Appointment.style";

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
        setCurrentUser,
        setProfileIndexCloser,
        setProfileIndex,
        setMenuIndex,
    } = props;
    return (
        <AppointmentBase>
            <ContentWrapper>
                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setCurrentUser={setCurrentUser}
                            setProfileIndexCloser={setProfileIndexCloser}
                            setMenuIndex={setMenuIndex}
                            setProfileIndex={setProfileIndex} />
                    </DefaultBox>
                </Section1>
                <h2 style={{ color: "#fff" }}>Appointment</h2>
                <Loading />
            </ContentWrapper>
        </AppointmentBase>
    );
}

export default Appointment;