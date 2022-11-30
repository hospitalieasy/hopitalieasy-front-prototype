import "..//..//Animations/loading.css"

import { HomeBase, NavbarWrapper, RoleSection, RoleSelectWrapper } from "../pageStyles/Home.style";

import Banner from "../../Components/Banner/Banner";
import Loading from "../../Animations/loading";
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
                    <RoleSelectWrapper>
                        <RoleSelector />
                    </RoleSelectWrapper>
                </RoleSection>
            </Banner>
            <Loading />
        </HomeBase>
    );
}

export default Home;