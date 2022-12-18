import "..//..//Utilities/Style/Button.css"

import { ButtonWrapper, Content, Description, HeroBannerBase, LeftSide, RightSide, Title } from "./HeroBanner.style";

import { Button } from "@mui/material";
import { Link } from "react-scroll";
import SlideShowHero from "../SlideShow/SlideShowHero";

const HeroBanner = () => {
    return (
        <HeroBannerBase>
            <LeftSide>
                <Content>
                    <Title>
                        New Way of Treatment
                    </Title>
                    <Description>
                        Make your life easier with the Hospitalieasy app starting today. Get started right now!
                    </Description>
                    <ButtonWrapper>
                        <Link
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><Button className="get-started" variant="contained" size="large">Get Started</Button>
                        </Link>
                    </ButtonWrapper>
                </Content>
            </LeftSide>
            <RightSide>
                <SlideShowHero color={"#fff"} />
            </RightSide>
        </HeroBannerBase >
    );
}

export default HeroBanner;