import { Box, HomeBase, Section } from "../Styles/Home.style";

import DoctorReview from "../../../Utilities/Components/DoctorReview/DoctorReview";
import SlideShowAppScreen from "../../../Components/SlideShow/SlideShowAppScreen"

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
                </Box>

                <Box width={"584px"} height={"200px"}>
                </Box>

            </Section>
        </HomeBase >
    );
}

export default Home;