import { ButtonWrapper, Content, Description, HeroBannerBase, Image, LeftSide, RightSide, Title } from "./HeroBanner.style";

import { Button } from "@mui/material";
import { Link } from "react-scroll";
import bannerImage from "..//..//Utilities/Images/banner-image.png"

const HeroBanner = () => {
    return (
        <HeroBannerBase>
            <LeftSide>
                <Content>
                    <Title>
                        Future Treatment
                    </Title>
                    <Description>
                        Make your life easier with the Hospitalieasy app starting today. Get started right now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quibusdam?
                    </Description>
                    <ButtonWrapper>
                        <Link
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <Button className="get-started" variant="contained" size="large">Get Started</Button>
                        </Link>
                    </ButtonWrapper>
                </Content>
            </LeftSide>
            <RightSide>
                <Image src={bannerImage} />
            </RightSide>
        </HeroBannerBase >
    );
}

export default HeroBanner;