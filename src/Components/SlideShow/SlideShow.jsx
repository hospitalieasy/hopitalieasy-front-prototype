import "..//..//utilities/style/Button.css"

import { Content, ImageContainer, SlideShowBase } from './SlideShow.style';

import React from 'react';
import ReactSwipe from 'react-swipe';

/* import { Button } from '@mui/material'; */
/* import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; */

const SlideShow = (props) => {
    const { padding, background, width, height } = props;
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
                        <h1>Slide 1</h1>
                    </Content>

                    <Content>
                        <h1>Slide 2</h1>
                    </Content>

                    <Content>
                        <h1>Slide 3</h1>
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