import { AppointmentWrapper, ContentWrapper, HomeBase, InfoWrapper, PatientName, Title } from "../Styles/Home.style";

import { Button } from "@mui/material";
import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"

const Home = () => {

    return (
        <HomeBase>
            <DefaultBox width={"95%"} height={"90%"} background={"white"} >
                <Title>My Appointments</Title>
                <AppointmentWrapper>
                    <ContentWrapper>
                        <InfoWrapper>
                            <PatientName>Gustavo Fringe</PatientName>
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
        </HomeBase >
    );
}

export default Home;