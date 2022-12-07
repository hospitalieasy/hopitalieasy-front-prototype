import { ContactBase } from "../general/styles/Contact.style";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout"
import Loading from "../../Components/Loading/Loading"
import React from "react";

const Contact = () => {
    return (
        <DefaultLayout>
            <ContactBase>
                <Loading />
            </ContactBase>
        </DefaultLayout>
    );
}

export default Contact;