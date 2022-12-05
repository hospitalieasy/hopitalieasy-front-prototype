import { FormWrapper, PatientSignUpBase } from "../pageStyles/PatientSignUp.style";

import React from "react";
import SignUpForm from "../../Components/SingUpForm/SignUpForm";

const PatientSignUp = () => {
    return (
        <PatientSignUpBase>
            <FormWrapper>
                <SignUpForm />
            </FormWrapper>
        </PatientSignUpBase>
    );
}

export default PatientSignUp;