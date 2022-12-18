import { AboutBase, ContentWrapper } from "..//Styles/About.style";

import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout"
import Loading from "../../../Utilities/Components/Loading/Loading";
import { Outlet } from "react-router-dom";
import React from "react";

const About = () => {
    return (
        <DefaultLayout>
            <AboutBase>
                <ContentWrapper>
                    <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                        <Loading />
                    </DefaultBox>
                    <Outlet />
                </ContentWrapper>
            </AboutBase>
        </DefaultLayout>
    );
}

export default About;