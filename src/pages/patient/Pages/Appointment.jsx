import { AppointmentBase, AppointmentItem, AppointmentWrapper, AvailableAppointment, ContentWrapper, CurrentAppointments, Date, DateWrapper, DoctorInfoWrapperAvailable, DoctorInfoWrapperCurrent, DoctorName, Section, Time, Title, TitleWrapperOne, TitleWrapperSecond } from "../Styles/Appointment.style";

import { AuthContext } from "../../../Context/AuthContext";
import BasicRating from "../../../Components/Rating/Rating";
import { Button } from "@mui/material";
import CheckPopper from "..//..//..//Components/Checker/CheckPopper"
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MajorSelector from "../../../Components/MajorSelector/MajorSelector";
import Popper from "../../../Components/Popper/Popper";
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useContext } from "react";
import { useState } from "react";

const Appointment = () => {
    const { role } = useContext(AuthContext)

    const [detail, setDetail] = useState(false);
    const [schedule, setSchedule] = useState(false);
    const [checkDecider, setCheckDecider] = useState(false);

    const showDetail = () => {
        setDetail(true);
    }

    const showSchedule = () => {
        setSchedule(true);
    }

    return (
        <AppointmentBase>

            <Section width={"95%"} height={"12%"} margin={"20px 0px"}>
                <DefaultBox width={"100%"} height={"100%"} background={"white"}>
                    <MajorSelector />
                </DefaultBox>
            </Section>

            <Section width={"95%"} height={"88%"} margin={"20px 0px"} wrap={"wrap"}>

                <AvailableAppointment>
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
                            <Button onClick={showSchedule} className="appointment-get" variant="contained">
                                Get
                            </Button>
                        </ContentWrapper>
                    </AppointmentWrapper>
                </AvailableAppointment>

                <CurrentAppointments>
                    <TitleWrapperSecond>
                        <Title>Current Appointments</Title>
                        <ScheduleIcon color="primary" />
                    </TitleWrapperSecond>
                    <AppointmentWrapper>
                        <AppointmentItem>
                            <ContentWrapper>
                                <DoctorInfoWrapperCurrent>
                                    <DateWrapper>
                                        <Time>10:00</Time>
                                        <Date>22/03/2023</Date>
                                    </DateWrapper>
                                    <DoctorName>Dr.Gustavo</DoctorName>
                                </DoctorInfoWrapperCurrent>
                                <Button onClick={showDetail} color="success" className="appointment-detail" variant="contained">
                                    DETAIL
                                </Button>
                            </ContentWrapper>
                        </AppointmentItem>
                    </AppointmentWrapper>
                </CurrentAppointments>

            </Section>

            {(detail || schedule) &&
                (<Popper
                    role={role}
                    detail={detail}
                    setDetail={setDetail}
                    schedule={schedule}
                    setSchedule={setSchedule}
                    checkDecider={checkDecider}
                    setCheckDecider={setCheckDecider}
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
                />)}
        </AppointmentBase>
    );
}

export default Appointment;