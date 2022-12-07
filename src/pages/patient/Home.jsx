import { ContentWrapper, HomeBase, Section1, Section2 } from "./styles/Home.style";

import AppBar from "../../Components/AppBar/AppBar";
import DefaultBox from "../../Components/DefaultBox/DefaultBox"
import SlideShow from "..//..//Components/SlideShow/SlideShow"

const Home = (props) => {
    const { setProfileIndex, setMenuIndex, setProfileIndexCloser } = props;
    return (
        <HomeBase>
            <ContentWrapper>

                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar setProfileIndexCloser={setProfileIndexCloser} setMenuIndex={setMenuIndex} setProfileIndex={setProfileIndex} />
                    </DefaultBox>
                </Section1>

                <Section2 width={"95%"} height={"50%"}>
                    <DefaultBox width={"45%"} height={"100%"} background={"#1e1c36"}>
                        <SlideShow padding={"30px 30px"} width={"85%"} height={"100%"} />
                    </DefaultBox>
                    <DefaultBox width={"30%"} height={"100%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}>beden görseli</h3>
                    </DefaultBox>
                    <DefaultBox width={"20%"} height={"60%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> kitle endex hesaplama</h3>
                    </DefaultBox>
                </Section2>

                <Section2 width={"95%"} height={"35%"}>
                    <DefaultBox width={"45%"} height={"95%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}>uygulama bilgileri</h3>
                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"85%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> en yakın eczane</h3>
                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"85%"} background={"#1e1c36"}>
                        <h3 style={{ color: "#fff" }}> en yakın eczane</h3>
                    </DefaultBox>
                </Section2>

            </ContentWrapper>
        </HomeBase>
    );
}

export default Home;