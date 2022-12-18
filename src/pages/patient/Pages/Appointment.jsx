import { AppointmentBase, ContentWrapper } from "../Styles/Appointment.style";

import Loading from "..//..//..//Utilities/Components/Loading/Loading"

const Appointment = () => {

    return (
        <AppointmentBase>
            <ContentWrapper>
                <Loading />
            </ContentWrapper>
        </AppointmentBase>
    );
}

export default Appointment;