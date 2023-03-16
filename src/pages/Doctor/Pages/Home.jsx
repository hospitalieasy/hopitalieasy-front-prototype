import { AppointmentWrapper, ContentWrapper, HomeBase, InfoWrapper, PatientName, Title } from "../Styles/Home.style";

import { AuthContext } from "..//..//..//Context/AuthContext";
import { Button } from "@mui/material";
import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import Popper from "..//..//..//Components/AppointmentDetail/Popper";
import { useContext } from "react";
import { useState } from "react";

const Home = () => {
    const { role } = useContext(AuthContext)
    const [detail, setDetail] = useState(false);

    const showDetail = () => {
        setDetail(true);
    }

    return (
        <HomeBase>
            <DefaultBox width={"95%"} height={"90%"} background={"white"} >
                <Title>My Appointments</Title>
                <AppointmentWrapper>
                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo Fringe</PatientName>
                        </InfoWrapper>
                        <Button onClick={showDetail} className="home-detail" color="primary" variant="contained">
                            DETAIL
                        </Button>
                        <Button className="send-result" color="success" variant="contained">
                            SEND TEST RESULT
                        </Button>
                    </ContentWrapper>

                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo</PatientName>
                        </InfoWrapper>
                        <Button className="home-detail" color="primary" variant="contained">
                            DETAIL
                        </Button>
                        <Button className="send-result" color="success" variant="contained">
                            SEND TEST RESULT
                        </Button>
                    </ContentWrapper>

                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo</PatientName>
                        </InfoWrapper>
                        <Button className="home-detail" color="primary" variant="contained">
                            DETAIL
                        </Button>
                        <Button className="send-result" color="success" variant="contained">
                            SEND TEST RESULT
                        </Button>
                    </ContentWrapper>

                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo</PatientName>
                        </InfoWrapper>
                        <Button className="home-detail" color="primary" variant="contained">
                            DETAIL
                        </Button>
                        <Button className="send-result" color="success" variant="contained">
                            SEND TEST RESULT
                        </Button>
                    </ContentWrapper>

                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo</PatientName>
                        </InfoWrapper>
                        <Button className="home-detail" color="primary" variant="contained">
                            DETAIL
                        </Button>
                        <Button className="send-result" color="success" variant="contained">
                            SEND TEST RESULT
                        </Button>
                    </ContentWrapper>

                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo</PatientName>
                        </InfoWrapper>
                        <Button className="home-detail" color="primary" variant="contained">
                            DETAIL
                        </Button>
                        <Button className="send-result" color="success" variant="contained">
                            SEND TEST RESULT
                        </Button>
                    </ContentWrapper>
                </AppointmentWrapper>

            </DefaultBox>
            {detail && (<Popper role={role} detail={detail} setDetail={setDetail} />)}
        </HomeBase >
    );
}

export default Home;