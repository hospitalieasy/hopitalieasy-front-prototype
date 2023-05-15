import { AppointmentBase, AppointmentItem, AppointmentWrapper, AvailableAppointment, ContentWrapper, CurrentAppointments, DoctorInfoWrapperAvailable, DoctorInfoWrapperCurrent, DoctorNameAvailable, DoctorNameCurrent, Section, Title, TitleWrapperOne, TitleWrapperSecond } from "../Styles/Appointment.style";

import { AuthContext } from "../../../Context/AuthContext";
import { Button } from "@mui/material";
import CheckPopper from "..//..//..//Components/Checker/CheckPopper"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Loading from "..//..//..//Components/Loading/Loading"
import Popper from "../../../Components/Popper/Popper";
import ScheduleIcon from '@mui/icons-material/Schedule';
import SnackBar from "../../../Components/SnackBar/SnackBar";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Appointment = () => {
    const { role, userId } = useContext(AuthContext)

    const [checkDecider, setCheckDecider] = useState(false);
    const [showBar, setShowBar] = useState(false);
    const [message, setMessage] = useState({
        color: "",
        text: "",
        icon: "",
    });
    const [loading, setLoading] = useState(false);

    const [detail, setDetail] = useState({
        show: false,
        index: "",
    }
    );
    const [schedule, setSchedule] = useState({
        show: false,
        doctorId: "",
    });

    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const [disabledAppointments, setDisabledAppointments] = useState([]);
    const [currentAppointments, setCurrentAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const [newAppointment, setNewAppointment] = useState({
        doctorId: schedule.doctorId,
        patientId: userId,
        day: "",
        hour: "",
    });

    useEffect(() => {
        setNewAppointment(prevState => ({
            ...prevState,
            doctorId: schedule.doctorId
        }));
    }, [schedule.doctorId]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_DOCTOR_URL)
            .then((response) => setDoctors(response.data))
            .catch((error) => console.log(error))

        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => {
                setDisabledAppointments(response.data)
                setCurrentAppointments(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        if (currentAppointments.length > 0) {
            const filteredAppointments = currentAppointments.filter(
                (appointment) => appointment.patientId === userId && appointment.appStatus
            );
            setFilteredAppointments(filteredAppointments);
        }
    }, [currentAppointments, userId]);

    useEffect(() => {
        if (doctors.length > 0) {
            const filteredDoctors = doctors.filter((doctor) => doctor.id > 1);
            setFilteredDoctors(filteredDoctors);
        }
    }, [doctors]);


    useEffect(() => {
        if (newAppointment.day && newAppointment.hour) {
            setCheckDecider(true);
        }
    }, [newAppointment.day, newAppointment.hour]);

    const showDetail = (doctorIndex) => {
        setDetail({ show: true, index: doctorIndex });
    }

    const showSchedule = (doctorId) => {
        setSchedule({ show: true, doctorId: doctorId });
    }

    return (
        <AppointmentBase>

            <Section width={"95%"} height={"88%"} margin={"20px 0px"} wrap={"wrap"}>

                <AvailableAppointment>
                    <TitleWrapperOne>
                        <Title>Available Appointments</Title>
                        <EventAvailableIcon color="success" />
                    </TitleWrapperOne>
                    <AppointmentWrapper>

                        {filteredDoctors.map((doctor, index) => (
                            <ContentWrapper key={index}>
                                <DoctorInfoWrapperAvailable>
                                    <DoctorNameAvailable>Dr.{doctor.name + " " + doctor.surname}</DoctorNameAvailable>
                                </DoctorInfoWrapperAvailable>
                                <Button
                                    onClick={() => { showSchedule(doctor.id) }}
                                    className="appointment-get"
                                    variant="contained">
                                    GET
                                </Button>
                            </ContentWrapper>
                        ))}

                    </AppointmentWrapper>
                </AvailableAppointment>

                <CurrentAppointments>
                    <TitleWrapperSecond>
                        <Title>Current Appointments</Title>
                        <ScheduleIcon color="primary" />
                    </TitleWrapperSecond>
                    <AppointmentWrapper>
                        <AppointmentItem>

                            {filteredAppointments.map((appointment, index) => (
                                <ContentWrapper key={index}>
                                    <DoctorInfoWrapperCurrent>
                                        <DoctorNameCurrent>
                                            Dr.{
                                                doctors.find(doctor => doctor.id === appointment.doctorId)?.name
                                                + " " +
                                                doctors.find(doctor => doctor.id === appointment.doctorId)?.surname
                                            }
                                        </DoctorNameCurrent>
                                    </DoctorInfoWrapperCurrent>
                                    <Button onClick={() => { showDetail(index) }} color="success" className="appointment-detail" variant="contained">
                                        DETAIL
                                    </Button>
                                </ContentWrapper>
                            ))}

                        </AppointmentItem>
                    </AppointmentWrapper>
                </CurrentAppointments>

            </Section>

            {(detail.show || schedule.show) &&
                (<Popper
                    role={role}
                    detail={detail}
                    setDetail={setDetail}
                    schedule={schedule}
                    setSchedule={setSchedule}
                    setCheckDecider={setCheckDecider}

                    disabledAppointments={disabledAppointments}
                    setNewAppointment={setNewAppointment}

                    doctors={doctors}
                    filteredAppointments={filteredAppointments}

                    userId={userId}
                />)
            }
            {checkDecider &&
                (<CheckPopper
                    detail={detail}
                    setDetail={setDetail}
                    schedule={schedule}
                    setSchedule={setSchedule}
                    checkDecider={checkDecider}
                    setCheckDecider={setCheckDecider}

                    setShowBar={setShowBar}
                    setMessage={setMessage}
                    setLoading={setLoading}

                    setNewAppointment={setNewAppointment}
                    newAppointment={newAppointment}

                    filteredAppointments={filteredAppointments}
                />)}
            {showBar && (<SnackBar message={message} />)}
            {loading && (<Loading loading={loading} />)}
        </AppointmentBase>
    );
}

export default Appointment;