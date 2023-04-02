import { AppointmentWrapper, ContentWrapper, HomeBase, InfoWrapper, PatientName, Title } from "../Styles/Home.style";

import { AuthContext } from "..//..//..//Context/AuthContext";
import { Button } from "@mui/material";
import CheckPopper from "..//..//..//Components/Checker/CheckPopper"
import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import Loading from "../../../Components/Loading/Loading";
import Popper from "..//..//..//Components/Popper/Popper";
import SnackBar from "../../../Components/SnackBar/SnackBar";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
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

    const [patients, setPatients] = useState([]);

    const [currentAppointments, setCurrentAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_PATIENT_URL)
            .then((response) => setPatients(response.data))
            .catch((error) => console.log(error))

        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => {
                setCurrentAppointments(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        if (currentAppointments.length > 0) {
            const filteredAppointments = currentAppointments.filter(
                (appointment) => appointment.doctorId === userId && appointment.appStatus
            );
            setFilteredAppointments(filteredAppointments);
        }
    }, [currentAppointments, userId]);

    const showDetail = (patientIndex) => {
        setDetail({ show: true, index: patientIndex })
    }

    return (
        <HomeBase>
            <DefaultBox width={"95%"} height={"90%"} background={"white"} >
                <Title>My Appointments</Title>
                <AppointmentWrapper>

                    {filteredAppointments.map((appointment, index) => (
                        <ContentWrapper key={index}>
                            <InfoWrapper>
                                <PatientName>
                                    {
                                        patients.find(patient => patient.id === appointment.patientId)?.name
                                        + " " +
                                        patients.find(patient => patient.id === appointment.patientId)?.surname
                                    }
                                </PatientName>
                            </InfoWrapper>
                            <Button onClick={() => { showDetail(index) }} className="home-detail" color="primary" variant="contained">
                                DETAIL
                            </Button>
                            <Button className="send-result" color="success" variant="contained">
                                SEND TEST RESULT
                            </Button>
                        </ContentWrapper>
                    ))}

                </AppointmentWrapper>

            </DefaultBox>
            {detail.show &&
                (<Popper
                    role={role}
                    detail={detail}
                    setDetail={setDetail}
                    schedule={schedule}
                    setSchedule={setSchedule}
                    setCheckDecider={setCheckDecider}

                    patients={patients}
                    filteredAppointments={filteredAppointments}

                    userId={userId}
                />)}
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

                    filteredAppointments={filteredAppointments}
                />)}
            {showBar && (<SnackBar message={message} />)}
            {loading && (<Loading loading={loading} />)}
        </HomeBase >
    );
}

export default Home;