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
import { useRef } from "react";
import { useState } from "react";

const Home = () => {
    const { role, userId } = useContext(AuthContext)

    const [image, setImage] = useState({ file: null, name: "" });
    const fileInputRef = useRef(null);

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
    const [newList, setNewList] = useState(false)

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
        axios.get(process.env.REACT_APP_PATIENT_URL)
            .then((response) => setPatients(response.data))
            .catch((error) => console.log(error))

        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => {
                setCurrentAppointments(response.data)
            })
            .catch((error) => console.log(error))
    }, [newList])

    useEffect(() => {
        if (currentAppointments.length > 0) {
            const filteredAppointments = currentAppointments.filter(
                (appointment) => appointment.doctorId === userId && appointment.appStatus
            );
            setFilteredAppointments(filteredAppointments);
        }
    }, [currentAppointments, userId, newList]);

    const showDetail = (patientIndex) => {
        setDetail({ show: true, index: patientIndex })
    }

    const cancelAfterSendResult = async (index) => {
        try {
            const selectedAppointment = filteredAppointments[index]

            const goingData = {
                appId: selectedAppointment.appId,
                appDay: selectedAppointment.appDay,
                appHour: selectedAppointment.appHour,
                appStatus: false,
                doctorId: selectedAppointment.doctorId,
                doctors: null,
                patientId: 1,
                patients: null
            }

            const appId = selectedAppointment.appId

            await axios.put(`${process.env.REACT_APP_APPOINTMENT_URL}/${appId}`, goingData)
                .then(() => {
                    setLoading(false);
                    setNewList(true);
                    setMessage({
                        color: "green",
                        text: "Test result sent successfully",
                        icon: "success",
                    })
                })
                .catch(() => {
                    setLoading(false);
                    setMessage({
                        color: "red",
                        text: "Failed to send test result",
                        icon: "error",
                    });
                })
        } catch (error) {
            console.log(error)
        }

        setNewList(false)
    }

    const sendTestResult = async (index) => {
        const imageName = image.name
        const selectedPatient = filteredAppointments[index]

        try {
            const goingData = {
                patientId: selectedPatient.patientId,
                doctorId: selectedPatient.doctorId,
                imgUrl: `${process.env.REACT_APP_BLOB_POST_URL}/${imageName}`,
                date: selectedPatient.appDay + " " + selectedPatient.appHour,
            }

            await axios.post(process.env.REACT_APP_TEST_RESULT_URL, goingData)

            cancelAfterSendResult(index);

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const sendImageToBlob = async (selectedImage, index) => {
        if (!selectedImage) {
            setMessage({
                color: "orange",
                text: "Please select an image",
                icon: "warning",
            });
            return;
        }

        const imageName = selectedImage.name.split('.')[0];
        setImage({ file: selectedImage, name: imageName });

        await axios
            .post(process.env.REACT_APP_BLOB_POST_URL, image.file, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(() => {
                setLoading(true)
                /* sendTestResult(index) */
            })
            .catch((error) => {
                setMessage({
                    color: "red",
                    text: "Failed to upload the image",
                    icon: "error",
                });
                console.log(error);
            });

        setImage({ file: null, name: "" });
    };

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
                            <input
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    sendImageToBlob(e.target.files[0], index)
                                }}
                            />
                            <Button
                                className="send-result"
                                color="success"
                                variant="contained"
                                onClick={() => fileInputRef.current.click()}
                            >
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
            {(message || showBar) && (<SnackBar message={message} />)}
            {loading && (<Loading loading={loading} />)}
        </HomeBase >
    );
}

export default Home;