import { ContactBase, ContentWrapper } from "..//Styles/Contact.style";

import DefaultBox from "..//..//..//Components/DefaultBox/DefaultBox"
import DefaultLayout from "..//..//..//Components/DefaultLayout/DefaultLayout";
import Loading from "..//..//..//Utilities/Components/Loading/Loading";
import { Outlet } from "react-router-dom";
import React from "react";

const Contact = () => {
    return (
        <DefaultLayout>
            <ContactBase>
                <ContentWrapper>
                    <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                        <Loading />
                    </DefaultBox>
                    <Outlet />
                </ContentWrapper>
            </ContactBase>
        </DefaultLayout>
    );
}

export default Contact;