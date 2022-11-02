import { FormContent, FormSide, FormWrapper, Label, LoginSection, PatientLoginBase, SliderSide, Title } from "../pageStyles/PatientLogin.style";

import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";

const PatientLogin = () => {
    return (
        <DefaultLayoutFirst>
            <PatientLoginBase>
                <LoginSection>
                    <FormSide>
                        <FormContent>
                            <Title>Patient Login</Title>
                            <FormWrapper>
                                <LoginForm />
                            </FormWrapper>
                            <Label>Don't have an account? <Link style={{ textDecoration: "none", color: "black", fontWeight: "bold" }} to={'/patient-sign-up'}>Sign Up Here</Link></Label>
                        </FormContent>
                    </FormSide>
                    <SliderSide>
                    </SliderSide>
                </LoginSection>
            </PatientLoginBase>
        </DefaultLayoutFirst>
    );
}

export default PatientLogin;