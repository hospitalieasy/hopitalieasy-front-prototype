import { Content, DescriptionHero, ImageContainer, Label, SlideShowBase, Title } from './SlideShow.style';

import React from 'react';
import ReactSwipe from 'react-swipe';

const SlideShowHero = (props) => {
    const { padding, background, width, height, color } = props;
    let reactSwipeEl;

    const start = () => {
        setTimeout(function () {
            reactSwipeEl?.next();
            start();
        }, 8000);
    }
    start();

    return (
        <SlideShowBase padding={padding} background={background} width={width} height={height}>
            <ImageContainer>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    <Content>
                        <Title color={color}>Join Hospitalieasy Today</Title>
                        <Label color={color}>Patient or Doctor</Label>
                        <DescriptionHero color={color}>Doctor or patient register and log in to the application. Take different actions based on your role and sit back and enjoy being able to do it from home</DescriptionHero>
                    </Content>

                    <Content>
                        <Title color={color}>Get Appointment</Title>
                        <Label color={color}>Get Your First Appointment Online</Label>
                        <DescriptionHero color={color}>After logging into the system with your registered membership, make an appointment with the appropriate doctors at the appropriate time and save your time!</DescriptionHero>
                    </Content>

                    <Content>
                        <Title color={color}>See Your Results</Title>
                        <Label color={color}>Check Your Results After Appointment</Label>
                        <DescriptionHero color={color}>See the test results sent to you after your doctor's appointment on the system before you go to the hospital and review the results.</DescriptionHero>
                    </Content>

                </ReactSwipe>
            </ImageContainer>
        </SlideShowBase>
    );
};

export default SlideShowHero;