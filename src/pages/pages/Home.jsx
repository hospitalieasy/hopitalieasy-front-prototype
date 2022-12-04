import "..//..//Animations-CSS/Loading/loading.css";

import { HomeBase, PatternLayout, SvgContainer } from "../pageStyles/Home.style";

import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import Loading from "../../Animations-CSS/Loading/Loading";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";

const Home = () => {
    return (
        <HomeBase>
            <PatternLayout>
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
            </PatternLayout>
        </HomeBase>
    );
}

export default Home;