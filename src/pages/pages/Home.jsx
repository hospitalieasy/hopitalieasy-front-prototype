import "..//..//Animations-CSS/Loading/loading.css";

import { HomeBase, PatternLayout } from "../pageStyles/Home.style";

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
                <Loading />
                <Loading />
                <Loading />
            </PatternLayout>
        </HomeBase>
    );
}

export default Home;