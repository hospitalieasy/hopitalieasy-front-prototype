import { AppointmentBase, ContentWrapper } from "../Styles/Appointment.style";

import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import Loading from "..//..//..//Utilities/Components/Loading/Loading"

const Appointment = () => {

    return (
        <AppointmentBase>
            <ContentWrapper>
                <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                    <Loading />
                </DefaultBox>
            </ContentWrapper>
        </AppointmentBase>
    );
}

export default Appointment;