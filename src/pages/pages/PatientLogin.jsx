import { FormContent, FormSide, FormWrapper, Label, LoginSection, PatientLoginBase, SliderSide, Title } from "../pageStyles/PatientLogin.style";

import { Link } from "react-router-dom";
import Loading from "../../Animations-CSS/Loading/Loading";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";

const PatientLogin = () => {
    return (
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
                    <Loading />
                </SliderSide>
            </LoginSection>
        </PatientLoginBase>
    );
}

export default PatientLogin;