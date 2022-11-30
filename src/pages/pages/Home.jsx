import "..//..//Animations/loading.css"

import { HomeBase, NavbarWrapper, RoleSection, RoleSelectWrapper } from "../pageStyles/Home.style";

import Banner from "../../Components/Banner/Banner";
import Loading from "../../Animations/Loading";
import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import RoleSelector from "../../Components/RoleSelector/RoleSelector";

const Home = () => {
    return (
        <HomeBase>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <Banner>
                <RoleSection>
                    <RoleSelector />
                </RoleSection>
            </Banner>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
        </HomeBase>
    );
}

export default Home;