import { Card, ContentWrapper, SlideShowBase, Text, TextWrapper, Title } from './SlideShowAppScreen.style';

import React from 'react';
import ReactSwipe from 'react-swipe';

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
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                        </Text>

                    </ContentWrapper>
                </Card>

                <Card>
                    <ContentWrapper>
                        <Title>Get Appointment</Title>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                        </Text>
                    </ContentWrapper>
                </Card>

                <Card>
                    <ContentWrapper>

                        <Title>See your test result</Title>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                        </Text>

                    </ContentWrapper>
                </Card>

                <Card>
                    <ContentWrapper>

                        <Title>See the nearest hospitals && pharmacy</Title>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aliquid placeat hic illo distinctio, dolore pariatur molestiae quo cum. Nam corrupti sunt nostrum exercitationem eveniet dignissimos ex earum, tempore at.
                        </Text>

                    </ContentWrapper>
                </Card>
            </ReactSwipe>
        </SlideShowBase>
    );
};

export default SlideShowAppScreen;