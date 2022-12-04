import "..//..//Utilities/ButtonStyle/Button.css"

import { ButtonWrapper, Content, Description, HeroBannerBase, ImageContainer, LeftSide, RightSide, Title } from "./HeroBanner.style";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import React from "react";

const HeroBanner = () => {
    return (
        <HeroBannerBase>
            <LeftSide>
                <Content>
                    <Title>
                        New Way of Treatment
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid suscipit rerum neque aut consectetur?
                    </Description>
                    <ButtonWrapper>
                        <Button className="patient" component={Link} to={'/patient-login'} variant="outlined" color="secondary" size="large">Patient</Button>
                        <Button className="doctor" component={Link} to={'/doctor-login'} variant="contained" size="large">Doctor</Button>
                    </ButtonWrapper>
                </Content>
            </LeftSide>
            <RightSide>
                <ImageContainer>
                    <Loading />
                </ImageContainer>
            </RightSide>
        </HeroBannerBase>
    );
}

export default HeroBanner;