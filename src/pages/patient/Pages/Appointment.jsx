import { AppointmentBase, AppointmentItem, AppointmentWrapper, BoxAvailable, BoxCurrent, ContentWrapper, Date, DateWrapper, DoctorInfoWrapperAvailable, DoctorInfoWrapperCurrent, DoctorName, Section, Time, Title, TitleWrapperOne, TitleWrapperSecond } from "../Styles/Appointment.style";

import BasicRating from "../../../Components/Rating/Rating";
import { Button } from "@mui/material";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MajorSelector from "../../../Components/MajorSelector/MajorSelector";
import Popper from "../../../Components/AppointmentDetail/Popper";
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useState } from "react";

const Appointment = () => {
    const [detail, setDetail] = useState(false);

    const showDetail = () => {
        setDetail(true);
    }

    return (
        <AppointmentBase>

            <Section width={"95%"} height={"12%"} margin={"20px 0px"}>
                <DefaultBox width={"100%"} height={"100%"} background={"white"}>
                    <MajorSelector />
                </DefaultBox>
            </Section>

            <Section width={"95%"} height={"88%"} margin={"20px 0px"} wrap={"wrap"}>

                <BoxAvailable>

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

                </BoxAvailable>

                <BoxCurrent>

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
                                <Button color="error" className="appointment-delete" variant="contained">
                                    DELETE
                                </Button>
                            </ContentWrapper>
                            <Button onClick={showDetail} className="appointment-detail" variant="contained" color="success">
                                DETAIL
                            </Button>
                        </AppointmentItem>

                        <AppointmentItem>
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
                            <Button className="appointment-detail" variant="contained" color="success">
                                DETAIL
                            </Button>
                        </AppointmentItem>

                        <AppointmentItem>
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
                            <Button className="appointment-detail" variant="contained" color="success">
                                DETAIL
                            </Button>
                        </AppointmentItem>

                    </AppointmentWrapper>

                </BoxCurrent>

            </Section>

            {detail && (<Popper detail={detail} setDetail={setDetail} />)}
        </AppointmentBase>
    );
}

export default Appointment;