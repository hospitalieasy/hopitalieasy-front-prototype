import { FormContent, PatientSignUpBase, SignUpSection, Title } from "../pageStyles/PatientSignUp.style";

import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
import React from "react";
import SignUpForm from "../../Components/SingUpForm/SignUpForm";

const PatientSignUp = () => {
    return (
        <DefaultLayoutFirst>
            <PatientSignUpBase>
                <SignUpSection>
                    <FormContent>
                        <Title>Sign Up</Title>
                        <SignUpForm />
                    </FormContent>
                </SignUpSection>
            </PatientSignUpBase>
        </DefaultLayoutFirst>
    );
}

export default PatientSignUp;