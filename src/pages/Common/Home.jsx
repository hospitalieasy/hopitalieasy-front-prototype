import { AuthContext } from "../../Context/AuthContext";
import Contact from "../../Components/Contact/Contact";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import Footer from "../../Components/Footer/Footer";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Loading from "../../Utilities/Components/Loading/Loading";
import Navbar from "../../Components/Navbar/Navbar";
import { SvgContainer } from "./Home.style";
import { useContext } from "react";

const Home = () => {
    const {
        role,
        setRole,
    } = useContext(AuthContext);

    return (
        <DefaultLayout>
            <Navbar role={role} setRole={setRole} />
            <HeroBanner />

            <SvgContainer>
                <Loading />
            </SvgContainer>
            <SvgContainer>
                <Loading />
            </SvgContainer>

            <Contact />

            <Footer />
        </DefaultLayout>
    );
}

export default Home;