import { HomeBase, Section } from "../Styles/Home.style";

import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox";
import DoctorReview from "../../../Utilities/Components/DoctorReview/DoctorReview";
import SlideShowAppScreen from "../../../Components/SlideShow/SlideShowAppScreen"

const Home = () => {

    return (
        <HomeBase>
            <Section width={"95%"} height={"100%"}>

                <DefaultBox
                    width={"98%"}
                    height={"55%"}
                    background={"white"}
                    margin={"20px 12px"}
                >
                    <SlideShowAppScreen padding={"30px"} width={"90%"} height={"90%"} />
                </DefaultBox>

                <DefaultBox width={"100%"} height={"45%"} background={"white"} margin={"20px 12px"}>
                    <DoctorReview title={"Quick Appointments (Future Content)"} />
                </DefaultBox>

                <DefaultBox width={"100%"} height={"220px"} background={"white"} margin={"20px"}>
                    <h1>Map 1</h1>
                </DefaultBox>

                <DefaultBox width={"100%"} height={"220px"} background={"white"} margin={"20px"}>
                    <h1>Map 2</h1>
                </DefaultBox>

            </Section>
        </HomeBase >
    );
}

export default Home;