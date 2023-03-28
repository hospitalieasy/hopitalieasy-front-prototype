import { Card, ContentWrapper, Image, Logo, SlideShowBase, Text, TextWrapper, Title } from './SlideShowAppScreen.style';

import React from 'react';
import ReactSwipe from 'react-swipe';
import appointment from "..//..//Utilities/Images/appointment.png"
import map from "..//..//Utilities/Images/map.png"
import register from "..//..//Utilities/Images/register.png"
import result from "..//..//Utilities/Images/result.png"

const SlideShowAppScreen = () => {

    let reactSwipeEl;
    function start() {
        setTimeout(function () {
            reactSwipeEl?.next();
            start();
        }, 9500);
    }
    start();

    return (
        <SlideShowBase>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
            >
                <Card>
                    <ContentWrapper>
                        <Title>Register free</Title>
                        <TextWrapper>
                            <Text>
                                You can register to Hospitaleasy for free and then start using the new generation online hospital system directly!
                            </Text>
                            <Logo>
                                <Image src={register} />
                            </Logo>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>

                <Card>
                    <ContentWrapper>
                        <Title>Get Appointment</Title>
                        <TextWrapper>
                            <Text>
                                You can choose the doctors, days and hours that are suitable for you and get the appointment you want.
                            </Text>
                            <Logo>
                                <Image src={appointment} />
                            </Logo>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>

                <Card>
                    <ContentWrapper>
                        <Title>See your test result</Title>
                        <TextWrapper>
                            <Text>
                                View the test results prepared by your doctor immediately after making the appointment that suits you!
                            </Text>
                            <Logo>
                                <Image src={result} />
                            </Logo>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>

                <Card>
                    <ContentWrapper>
                        <Title>See the nearest hospitals && pharmacies</Title>
                        <TextWrapper>
                            <Text>
                                You can browse the map not only online, but also the nearest hospitals and pharmacies, which will be listed according to your location.
                            </Text>
                            <Logo>
                                <Image src={map} />
                            </Logo>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>
            </ReactSwipe>
        </SlideShowBase>
    );
};

export default SlideShowAppScreen;