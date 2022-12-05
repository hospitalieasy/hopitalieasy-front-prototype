import { AboutBase } from "../general/styles/About.style";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout"
import Loading from "../../Components/Loading/Loading"
import React from "react";

const About = () => {
    return (
        <DefaultLayout>
            <AboutBase>
                <Loading />
            </AboutBase>
        </DefaultLayout>
    );
}

export default About;