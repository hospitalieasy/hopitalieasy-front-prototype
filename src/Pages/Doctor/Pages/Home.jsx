import { AppointmentWrapper, ButtonWrapper, ContentWrapper, CurrentAppointments, HomeBase, InfoWrapper, OldAppointments, PatientName, Title } from "../Styles/Home.style";

import { AuthContext } from "..//..//..//Context/AuthContext";
import { Button } from "@mui/material";
import CheckPopper from "..//..//..//Components/Checker/CheckPopper"
import Loading from "../../../Components/Loading/Loading";
import Popper from "..//..//..//Components/Popper/Popper";
import ScheduleIcon from '@mui/icons-material/Schedule';
import SnackBar from "../../../Components/SnackBar/SnackBar";
import VerifiedIcon from '@mui/icons-material/Verified';
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Home = () => {
    const { role, userId } = useContext(AuthContext)

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
        index: null,
    }
    );
    const [schedule, setSchedule] = useState({
        show: false,
        doctorId: "",
    });

    const [patients, setPatients] = useState([]);

    const [currentAppointments, setCurrentAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const [tests, setTests] = useState([]);
    const [filteredTests, setFilteredTests] = useState([]);
    const [showOldResults, setShowOldResults] = useState({ show: false, index: "" });

    useEffect(() => {
        axios.get(process.env.REACT_APP_PATIENT_URL)
            .then((response) => setPatients(response.data))
            .catch((error) => console.log(error))

        axios.get(process.env.REACT_APP_APPOINTMENT_URL)
            .then((response) => setCurrentAppointments(response.data))
            .catch((error) => console.log(error))

        axios.get(process.env.REACT_APP_TEST_RESULT_URL)
            .then((response) => setTests(response.data))
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

    useEffect(() => {
        if (tests.length > 0) {
            const filteredTests = tests.filter((test) => test.doctorId === userId);

            const uniquePatientTests = filteredTests.reduce((accumulator, currentTest) => {
                const existingPatientIndex = accumulator.findIndex(
                    (test) => test.patientId === currentTest.patientId
                );

                if (existingPatientIndex === -1) {
                    accumulator.push({
                        patientId: currentTest.patientId,
                        doctorId: currentTest.doctorId,
                        imageUrl: [currentTest.imageUrl],
                        date: [currentTest.date],
                    });
                } else {
                    accumulator[existingPatientIndex].imageUrl.push(currentTest.imageUrl);
                    accumulator[existingPatientIndex].date.push(currentTest.date);
                }

                return accumulator;
            }, []);

            setFilteredTests(uniquePatientTests);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tests]);

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
    }

    const sendTestResult = async (index, imageName) => {
        const selectedPatient = filteredAppointments[index]

        try {
            const goingData = {
                patientId: selectedPatient?.patientId,
                doctorId: selectedPatient?.doctorId,
                imageUrl: `${process.env.REACT_APP_BLOB_POST_URL}/${imageName}`,
                date: selectedPatient?.appDay + " " + selectedPatient?.appHour,
                patients: null,
                doctors: null
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

        setLoading(true);

        const fileExtension = selectedImage.name.substring(selectedImage.name.lastIndexOf('.'));
        const imageNameWithoutExtension = selectedImage.name.substring(0, selectedImage.name.lastIndexOf('.'));
        const randomNum = Math.floor(Math.random() * 200) + 1;
        const imageName = `${imageNameWithoutExtension}${randomNum}${fileExtension}`;

        const formData = new FormData();
        formData.append("file", selectedImage, imageName);

        await axios
            .post(process.env.REACT_APP_BLOB_POST_URL, formData)
            .then(() => {
                sendTestResult(index, imageNameWithoutExtension + randomNum + fileExtension);
            })
            .catch((error) => {
                setLoading(false);
                setMessage({
                    color: "red",
                    text: "Failed to upload the image",
                    icon: "error",
                });
                console.log(error);
            });
    };


    const showOldResultsHandler = (index) => {
        setShowOldResults({ show: true, index: index })
    }

    const showDetail = (index) => {
        setDetail({ show: true, index: index })
    }

    return (
        <HomeBase>
            <CurrentAppointments>
                <Title>Current Appointments
                    <ScheduleIcon color="warning" style={{ width: "10%", marginLeft: "16px", marginTop: "0px" }} />
                </Title>
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
                            <ButtonWrapper>
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
                                    SEND RESULT
                                </Button>
                            </ButtonWrapper>
                        </ContentWrapper>
                    ))}

                </AppointmentWrapper>
            </CurrentAppointments>

            <OldAppointments>
                <Title>Tested Patients
                    <VerifiedIcon color="error" style={{ width: "10%", marginLeft: "20px", marginTop: "0px" }} />
                </Title>
                <AppointmentWrapper>
                    {filteredTests.map((test, index) => (
                        <ContentWrapper key={index}>
                            <PatientName>
                                {
                                    patients.find(patient => patient.id === test.patientId)?.name
                                    + " " +
                                    patients.find(patient => patient.id === test.patientId)?.surname
                                }
                            </PatientName>
                            <Button
                                className="show-old-test"
                                variant="contained"
                                onClick={() => { showOldResultsHandler(index) }}
                            >
                                SHOW TESTS
                            </Button>
                        </ContentWrapper>
                    ))}
                </AppointmentWrapper>
            </OldAppointments>

            {(detail.show || showOldResults.show) &&
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

                    filteredTests={filteredTests}
                    showOldResults={showOldResults}
                    setShowOldResults={setShowOldResults}
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