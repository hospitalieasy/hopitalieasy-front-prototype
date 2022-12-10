import React, { useContext } from "react";

import DefaultLayout from "..//..//..//Components/DefaultLayout/DefaultLayout";
import Footer from "..//..//..//Components/Footer/Footer";
import HeroBanner from "..//..//..//Components/HeroBanner/HeroBanner";
import Loading from "..//..//..//Utilities/Components/Loading/Loading";
import Navbar from "..//..//..//Components/Navbar/Navbar";
import { SvgContainer } from "..//Styles/Home.style";
import { UserContext } from "../../../UserContext";

const Home = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <HeroBanner />

            <SvgContainer>
                <Loading />
            </SvgContainer>
            <SvgContainer>
                <Loading />
            </SvgContainer>
            <SvgContainer>
                <Loading />
            </SvgContainer>

            <Footer />
        </DefaultLayout>
    );
}

export default Home;