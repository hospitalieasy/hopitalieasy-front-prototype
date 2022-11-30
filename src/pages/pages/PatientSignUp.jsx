import { FormContent, PatientSignUpBase, SignUpSection, Title } from "../pageStyles/PatientSignUp.style";

import React from "react";
import SignUpForm from "../../Components/SingUpForm/SignUpForm";

const PatientSignUp = () => {
    return (

        <PatientSignUpBase>
            <SignUpSection>
                <FormContent>
                    <Title>Sign Up</Title>
                    <SignUpForm />
                </FormContent>
            </SignUpSection>
        </PatientSignUpBase>

    );
}

export default PatientSignUp;