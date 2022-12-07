import "..//..//utilities/style/Button.css"

import { Content, Description, ImageContainer, Label, SlideShowBase, Title } from './SlideShow.style';

import React from 'react';
import ReactSwipe from 'react-swipe';

/* import { Button } from '@mui/material'; */
/* import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; */

const SlideShow = (props) => {
    const { padding, background, width, height, color } = props;
    let reactSwipeEl;

    function start() {
        setTimeout(function () {
            reactSwipeEl?.next();
            start();
        }, 5000);
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
                        <Title color={color}>Hospitalieasy Makes Your Life Easy!</Title>
                        <Label color={color}>Lorem ipsum dolor sit.</Label>
                        <Description color={color}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur, molestiae excepturi nobis architecto corporis!</Description>
                    </Content>

                    <Content>
                        <Title color={color}>Get Appointment</Title>
                        <Label color={color}>Lorem ipsum dolor sit.</Label>
                        <Description color={color}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste perferendis vitae ut quas numquam at tempora alias minima, doloremque sint. Autem, tempore! Dolores, delectus veniam? Iste accusamus consequuntur eligendi deserunt.</Description>
                    </Content>

                    <Content>
                        <Title color={color}>See Your Results</Title>
                        <Label color={color}>Lorem ipsum dolor sit.</Label>
                        <Description color={color}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste perferendis vitae ut quas numquam at tempora alias minima, doloremque sint. Autem, tempore! Dolores, delectus veniam? Iste accusamus consequuntur eligendi deserunt.</Description>
                    </Content>

                </ReactSwipe>
            </ImageContainer>
            {/* <ButtonContainer>
                <Button className='prev' onClick={() => reactSwipeEl.prev()} variant="contained" size="small"><ArrowBackIosIcon /></Button>
                <Button className='next' onClick={() => reactSwipeEl.next()} variant="contained" size="small"><ArrowForwardIosIcon /></Button>
            </ButtonContainer> */}
        </SlideShowBase>
    );
};

export default SlideShow;