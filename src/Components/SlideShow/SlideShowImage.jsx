import "..//..//Utilities/Style/Button.css"

import { ContentImage, Image, ImageContainer, SlideShowBase } from './SlideShow.style';

import React from 'react';
import ReactSwipe from 'react-swipe';
import appointment from "..//..//Utilities/Images/appointment.jpg"
import laptop from "..//..//Utilities/Images/doctor-laptop.jpg"
import phone from "..//..//Utilities/Images/doctor-phone.jpg"
import result from "..//..//Utilities/Images/result.jpg"

/* import { Button } from '@mui/material'; */
/* import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; */

const SlideShowImage = (props) => {
    const { padding, background, width, height, color } = props;
    let reactSwipeEl;

    function start() {
        setTimeout(function () {
            reactSwipeEl?.next();
            start();
        }, 9500);
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
                    <ContentImage padding={"0px 10px"}>
                        <Image src={appointment} />
                    </ContentImage>

                    <ContentImage padding={"0px 40px"}>
                        <Image src={laptop} />
                    </ContentImage>

                    <ContentImage padding={"0px 50px"}>
                        <Image src={phone} />
                    </ContentImage>

                    <ContentImage>
                        <Image style={{ borderRadius: "10px" }} src={result} />
                    </ContentImage>

                </ReactSwipe>
            </ImageContainer>
            {/* <ButtonContainer>
                <Button className='prev' onClick={() => reactSwipeEl.prev()} variant="contained" size="small"><ArrowBackIosIcon /></Button>
                <Button className='next' onClick={() => reactSwipeEl.next()} variant="contained" size="small"><ArrowForwardIosIcon /></Button>
            </ButtonContainer> */}
        </SlideShowBase>
    );
};

export default SlideShowImage;