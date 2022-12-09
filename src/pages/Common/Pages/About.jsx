import { AboutBase } from "..//Styles/About.style";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout"
import Loading from "../../../Utilities/Components/Loading/Loading";
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