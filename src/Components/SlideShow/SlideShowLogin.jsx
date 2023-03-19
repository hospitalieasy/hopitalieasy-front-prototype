import { Card, ContentWrapper, Image, Logo, SlideShowBase, Text, TextWrapper, Title } from './SlideShowLogin.style';

import React from 'react';
import ReactSwipe from 'react-swipe';
import appointment from "..//..//Utilities/Images/appointment.png"
import map from "..//..//Utilities/Images/map.png"
import register from "..//..//Utilities/Images/register.png"
import result from "..//..//Utilities/Images/result.png"

const SlideShowLogin = () => {

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
                        <Logo>
                            <Image src={register} />
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
                            <Image src={appointment} />
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
                            <Image src={result} />
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
                            <Image src={map} />
                        </Logo>
                        <TextWrapper>
                            <Title>See the nearest hospitals && pharmacy</Title>
                            <Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                            </Text>
                        </TextWrapper>
                    </ContentWrapper>
                </Card>
            </ReactSwipe>
        </SlideShowBase>
    );
};

export default SlideShowLogin;