import { ContentWrapper, HomeBase, Section1, Section2, Section3 } from "./styles/Home.style";

import AppBar from "../../Components/AppBar/AppBar";
import DefaultBox from "../../Components/DefaultBox/DefaultBox"
import SlideShow from "..//..//Components/SlideShow/SlideShow"

const Home = (props) => {
    const { profileHandler } = props;
    return (
        <HomeBase>
            <ContentWrapper>

                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar profileHandler={profileHandler} />
                    </DefaultBox>
                </Section1>

                <Section2 width={"95%"} height={"50%"}>
                    <DefaultBox width={"44%"} height={"100%"} background={"#1e1c36"}>
                        <SlideShow padding={"30px 0px 30px 70px"} width={"85%"} height={"100%"} />
                    </DefaultBox>
                    <DefaultBox width={"29%"} height={"100%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos culpa quia asperiores autem in facere. Praesentium debitis impedit possimus numquam necessitatibus aut natus iusto quia, voluptas hic repellendus enim.</h3>
                    </DefaultBox>
                    <DefaultBox width={"19%"} height={"50%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> kitle endex hesaplama</h3>
                    </DefaultBox>
                </Section2>

                <Section3 width={"95%"} height={"35%"}>
                    <DefaultBox margin={"0px 30px 0px 0px"} width={"30%"} height={"100%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> en yakın hastane</h3>
                    </DefaultBox>
                    <DefaultBox margin={"0px 30px 0px 0px"} width={"30%"} height={"100%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> en yakın eczane</h3>
                    </DefaultBox>
                </Section3>

            </ContentWrapper>
        </HomeBase>
    );
}

export default Home;