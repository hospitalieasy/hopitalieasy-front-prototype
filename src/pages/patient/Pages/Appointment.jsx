import { AppointmentBase, AppointmentSection, AppointmentWrapper, AvailableAppointmentsBox, Box, ContentWrapper, CurrentAppointmentsBox, Date, DateWrapper, DoctorInfoWrapperAvailable, DoctorInfoWrapperCurrent, DoctorName, MajorSection, Time, Title, TitleWrapperOne, TitleWrapperSecond } from "../Styles/Appointment.style";

import { AuthContext } from "..//..//..//Context/AuthContext";
import BasicRating from "../../../Components/Rating/Rating";
import { Button } from "@mui/material";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MajorSelector from "../../../Components/MajorSelector/MajorSelector";
import ScheduleIcon from '@mui/icons-material/Schedule';
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Appointment = () => {
    /* const { userIndex } = useContext(AuthContext);

    const [patient, setPatient] = useState();
    const [doctors, setDoctors] = useState([]);
    const [currentAppointmentInfo, setCurrentAppointmentInfo] = useState([]); */

    // current appointment logic
    /* useEffect(() => {
        axios.get(`http://localhost:3002/patients/${userIndex + 1}`)
            .then((response) => setPatient(response.data))
            .catch((error) => console.log(error));

        axios.get(`http://localhost:3002/doctors`)
            .then((response) => setDoctors(response.data))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (doctors.length > 0 && patient) {
            const appointmentDoctor = doctors.find(
                (doctor) => doctor.appointmentId === patient.appointmentId
            );
            setCurrentAppointmentInfo(appointmentDoctor);
        }
    }, [doctors, patient]); */


    return (
        <AppointmentBase>

            <MajorSection width={"95%"} height={"90px"}>
                <Box width={"98%"} height={"100%"}>
                    <MajorSelector />
                </Box>
            </MajorSection>

            <AppointmentSection width={"95%"} height={"500px"}>

                <AvailableAppointmentsBox width={"50%"} height={"435px"}>
                    <TitleWrapperOne>
                        <Title>Available Appointments</Title>
                        <EventAvailableIcon color="success" />
                    </TitleWrapperOne>
                    <AppointmentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapperAvailable>
                                <BasicRating />
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapperAvailable>
                            <Button className="appointment" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapperAvailable>
                                <BasicRating />
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapperAvailable>
                            <Button className="appointment" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapperAvailable>
                                <BasicRating />
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapperAvailable>
                            <Button className="appointment" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                    </AppointmentWrapper>
                </AvailableAppointmentsBox>

                <CurrentAppointmentsBox width={"50%"} height={"435px"}>
                    <TitleWrapperSecond>
                        <Title>Current Appointments</Title>
                        <ScheduleIcon color="primary" />
                    </TitleWrapperSecond>
                    <AppointmentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapperCurrent>
                                <DateWrapper>
                                    <Time>10:00</Time>
                                    <Date>22/03/2023</Date>
                                </DateWrapper>
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapperCurrent>
                            <Button color="error" className="appointment-delete" variant="contained">
                                DELETE
                            </Button>
                        </ContentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapperCurrent>
                                <DateWrapper>
                                    <Time>11:00</Time>
                                    <Date>24/03/2023</Date>
                                </DateWrapper>
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapperCurrent>
                            <Button color="error" className="appointment-delete" variant="contained">
                                DELETE
                            </Button>
                        </ContentWrapper>
                        <ContentWrapper>
                            <DoctorInfoWrapperCurrent>
                                <DateWrapper>
                                    <Time>13:00</Time>
                                    <Date>25/03/2023</Date>
                                </DateWrapper>
                                <DoctorName>Dr.Gustavo</DoctorName>
                            </DoctorInfoWrapperCurrent>
                            <Button color="error" className="appointment-delete" variant="contained">
                                DELETE
                            </Button>
                        </ContentWrapper>
                    </AppointmentWrapper>
                </CurrentAppointmentsBox>

            </AppointmentSection>

        </AppointmentBase>
    );
}

export default Appointment;