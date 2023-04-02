import { ButtonWrapper, Content, Description, HeroBannerBase, Image, LeftSide, RightSide, Title } from "./HeroBanner.style";

import { Button } from "@mui/material";
import bannerImage from "..//..//Utilities/Images/banner-image.png"
import { useNavigate } from "react-router-dom";

const HeroBanner = (props) => {
    const { user } = props;

    const navigate = useNavigate();
    const registerNavigator = () => {
        if (user) {
            navigate("/app-screen");
        } else {
            navigate("/patient-login");
        }
    }

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
                        <Button onClick={registerNavigator} className="get-started" variant="contained" size="large">Get Started</Button>
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