import { AboutBase } from "..//Styles/About.style";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout"
import Loading from "../../../Utilities/Components/Loading/Loading";
import { Outlet } from "react-router-dom";
import React from "react";

const About = () => {
    return (
        <DefaultLayout>
            <AboutBase>
                <Loading />
                <Outlet />
            </AboutBase>
        </DefaultLayout>
    );
}

export default About;