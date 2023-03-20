import { Card, ContentWrapper, Logo, Section, Text, TextWrapper, Title } from "./Home.style";

import { AuthContext } from "../../Context/AuthContext";
import Contact from "../../Components/Contact/Contact";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import Footer from "../../Components/Footer/Footer";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";

const Home = () => {
    const {
        role,
        setRole,
        user,
    } = useContext(AuthContext);

    return (
        <DefaultLayout>
            <Navbar role={role} setRole={setRole} />
            <HeroBanner user={user} />
            <Section>
                <Card>
                    <ContentWrapper>
                        <Logo>
                            <img src="https://img.icons8.com/nolan/100/add-user-male.png" alt="" />
                        </Logo>
                        <TextWrapper>
                            <Title>Register free</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                            </Text>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>
                <Card>
                    <ContentWrapper>
                        <Logo>
                            <img src="https://img.icons8.com/nolan/64/tear-off-calendar.png" alt="" />
                        </Logo>
                        <TextWrapper>
                            <Title>Get Appointment</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                            </Text>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>
                <Card>
                    <ContentWrapper>
                        <Logo>
                            <img src="https://img.icons8.com/nolan/64/report-card.png" alt="" />
                        </Logo>
                        <TextWrapper>
                            <Title>See your test result</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                            </Text>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>
                <Card>
                    <ContentWrapper>
                        <Logo>
                            <img src="https://img.icons8.com/nolan/64/hospital-2.png" alt="" />
                        </Logo>
                        <TextWrapper>
                            <Title>See the nearest hospitals && pharmacy</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                            </Text>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>
            </Section>
            <Contact />
            <Footer />
        </DefaultLayout>
    );
}

export default Home;