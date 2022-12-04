import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Loading from "../../Components/Loading/Loading";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import { SvgContainer } from "../pageStyles/Home.style";

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

        </DefaultLayout>
    );
}

export default Home;