import { ContentWrapper, HomeBase, Section1, Section2 } from "../Styles/Home.style";

import AppBar from "../../../Components/AppBar/AppBar";
import DefaultBox from "../../../Components/DefaultBox/DefaultBox"
import SlideShow from "../../../Components/SlideShow/SlideShow"

const Home = (props) => {

    const {
        name,
        surname,
        birthday,
        emailArray,
        passwordArray,
        phone,
        setEmail,
        setPassword,
        setCurrentUser,
        setProfileIndexCloser,
        setProfileIndex,
        setMenuIndex,
    } = props;

    return (
        <HomeBase>
            <ContentWrapper>
                <Section1 width={"95%"} height={"10%"}>
                    <DefaultBox width={"100%"} height={"100%"}>
                        <AppBar
                            name={name}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setCurrentUser={setCurrentUser}
                            setProfileIndexCloser={setProfileIndexCloser}
                            setMenuIndex={setMenuIndex}
                            setProfileIndex={setProfileIndex} />
                    </DefaultBox>
                </Section1>

                <Section2 width={"95%"} height={"50%"}>
                    <DefaultBox width={"45%"} height={"100%"} background="#fff">
                        <SlideShow padding={"30px 30px"} width={"85%"} height={"100%"} />
                    </DefaultBox>
                    <DefaultBox width={"30%"} height={"100%"} background="#fff">
                        <h3 style={{ color: "#000" }}>beden görseli</h3>
                    </DefaultBox>
                    <DefaultBox width={"20%"} height={"60%"} background="#fff">
                        <h3 style={{ color: "#000" }}>vücut kitle endex hesaplama</h3>
                    </DefaultBox>
                </Section2>

                <Section2 width={"95%"} height={"35%"}>
                    <DefaultBox width={"45%"} height={"95%"} background="#fff">
                        <h3 style={{ color: "#000" }}>uygulama bilgileri</h3>
                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"85%"} background="#fff">
                        <h3 style={{ color: "#000" }}> en yakın hastane map</h3>
                    </DefaultBox>
                    <DefaultBox width={"25%"} height={"85%"} background="#fff">
                        <h3 style={{ color: "#000" }}> en yakın eczane map</h3>
                    </DefaultBox>
                </Section2>

            </ContentWrapper>
        </HomeBase >
    );
}

export default Home;