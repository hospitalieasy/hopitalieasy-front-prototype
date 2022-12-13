import { ContentWrapper, HomeBase, Image, ImageWrapper, Section2 } from "../Styles/Home.style";

import Calculator from "../../../Components/Calculator/Calculator";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import DoctorReview from "../../../Utilities/Components/DoctorReview/DoctorReview";
import SlideShowAppScreen from "../../../Components/SlideShow/SlideShowAppScreen"
import SlideShowImage from "../../../Components/SlideShow/SlideShowImage"
import mapImage from "..//..//..//Utilities/Images/map-image.jpg"

const Home = () => {

    return (
        <HomeBase>
            <ContentWrapper>
                <Section2 width={"95%"} height={"50%"}>
                    <DefaultBox width={"42%"} height={"100%"} background="#fff">
                        <SlideShowAppScreen padding={"30px 30px"} width={"100%"} height={"100%"} />
                    </DefaultBox>
                    <DefaultBox width={"30%"} height={"100%"} background="#fff">
                        <SlideShowImage width={"100%"} height={"100%"} />
                    </DefaultBox>
                    <DefaultBox width={"23%"} height={"80%"} background="#fff">
                        <Calculator />
                    </DefaultBox>
                </Section2>

                <Section2 width={"95%"} height={"40%"}>
                    <DefaultBox width={"45%"} height={"90%"} background="#fff">
                        <DoctorReview title={"Quick Appointments (Future Content)"} />
                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"85%"} background="#fff">
                        <ImageWrapper>
                            <h3 style={{ color: "#000", marginBottom: "20px" }}>Future Content (Hospital Map)</h3>
                            <Image src={mapImage} />
                        </ImageWrapper>
                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"85%"} background="#fff">
                        <ImageWrapper>
                            <h3 style={{ color: "#000", marginBottom: "20px" }}>Future Content (Pharmacy Map)</h3>
                            <Image src={mapImage} />
                        </ImageWrapper>
                    </DefaultBox>
                </Section2>
            </ContentWrapper>
        </HomeBase >
    );
}

export default Home;