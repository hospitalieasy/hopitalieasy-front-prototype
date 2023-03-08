import { Box, ContentWrapper, HomeBase, Image, ImageWrapper, Section } from "../Styles/Home.style";

import DoctorReview from "../../../Utilities/Components/DoctorReview/DoctorReview";
import SlideShowAppScreen from "../../../Components/SlideShow/SlideShowAppScreen"
import SlideShowImage from "../../../Components/SlideShow/SlideShowImage"
import mapImage from "..//..//..//Utilities/Images/map-image.jpg"

const Home = () => {

    return (
        <HomeBase>
            <Section width={"95%"} height={"100%"}>

                <Box width={"98%"} height={"300px"} >
                    <SlideShowAppScreen padding={"30px 30px"} width={"100%"} height={"100%"} />
                </Box>

                <Box width={"100%"} height={"200px"}>
                    <DoctorReview title={"Quick Appointments (Future Content)"} />
                </Box>

                <Box width={"584px"} height={"200px"}>
                    {/*  <ImageWrapper>
                        <h3 style={{ color: "#000", marginBottom: "20px" }}>Future Content (Hospital Map)</h3>
                        <Image src={mapImage} />
                    </ImageWrapper> */}
                </Box>

                <Box width={"584px"} height={"200px"}>
                    {/*  <ImageWrapper>
                        <h3 style={{ color: "#000", marginBottom: "20px" }}>Future Content (Pharmacy Map)</h3>
                        <Image src={mapImage} />
                    </ImageWrapper> */}
                </Box>

            </Section>
        </HomeBase >
    );
}

export default Home;