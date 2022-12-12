import { AppointmentBase, ContentWrapper } from "../Styles/Appointment.style";

import Loading from "..//..//..//Utilities/Components/Loading/Loading"

const Appointment = () => {

    return (
        <AppointmentBase>
            <ContentWrapper>
                <h2 style={{ color: "#fff" }}>Appointment</h2>
                <Loading />
            </ContentWrapper>
        </AppointmentBase>
    );
}

export default Appointment;