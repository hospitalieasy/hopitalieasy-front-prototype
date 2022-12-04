import "..//..//Utilities/ButtonStyle/Button.css"
import "..//..//Utilities//ButtonStyle/Button.css"

import { ButtonWrapper, Content, Description, HeroBannerBase, ImageContainer, LeftSide, RightSide, Title } from "./HeroBanner.style";

import { Button } from "@mui/material";
import { Link } from "react-scroll";
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
                        <Link
                            activeClass="active"
                            to="section-down"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><Button className="info" variant="contained" size="large">Get Started</Button>
                        </Link>
                    </ButtonWrapper>

                </Content>
            </LeftSide>
            <RightSide>
                <ImageContainer>
                    <Loading />
                </ImageContainer>
            </RightSide>
        </HeroBannerBase >
    );
}

export default HeroBanner;