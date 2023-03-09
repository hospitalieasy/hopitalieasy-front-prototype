import { AppointmentBase, AppointmentSection, Box, BoxAvailable, BoxCurrent, ContentWrapper, DoctorInfoWrapper, DoctorName, DoctorWrapper, MajorSection, Title, TitleWrapper } from "../Styles/Appointment.style";

import BasicRating from "../../../Components/Rating/Rating";
import { Button } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MajorSelector from "../../../Components/MajorSelector/MajorSelector";

const Appointment = () => {

    return (
        <AppointmentBase>

            <MajorSection width={"95%"} height={"100%"}>
                <Box width={"98%"} height={"100%"}>
                    <MajorSelector />
                </Box>
            </MajorSection>

            <AppointmentSection width={"95%"} height={"100%"}>

                <BoxAvailable width={"50%"} height={"435px"}>
                    <TitleWrapper>
                        <Title>Available Appointments</Title>
                        <EventAvailableIcon color="success" />
                    </TitleWrapper>
                    <DoctorWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapper>
                                <BasicRating />
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapper>
                            <Button className="appointment" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapper>
                                <BasicRating />
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapper>
                            <Button className="appointment" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapper>
                                <BasicRating />
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapper>
                            <Button className="appointment" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                    </DoctorWrapper>
                </BoxAvailable>

                <BoxCurrent width={"50%"} height={"435px"}>
                    <h1>Current Appointments</h1>
                </BoxCurrent>

            </AppointmentSection>

        </AppointmentBase>
    );
}

export default Appointment;