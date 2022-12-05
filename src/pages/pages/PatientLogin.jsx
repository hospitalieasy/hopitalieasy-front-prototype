import { FormContent, FormSide, FormWrapper, Label, LoginSection, LogoutIcon, PatientLoginBase, SliderSide, Title } from "../pageStyles/PatientLogin.style";

import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";
import SlideShow from "../../Components/SlideShow/SlideShow";

const PatientLogin = () => {
    return (
        <DefaultLayout>
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
                        <LogoutIcon>
                            <Link component={Link} to={'/'} >
                                <img src="https://img.icons8.com/ios-filled/50/null/logout-rounded-left.png" alt="" />
                            </Link>
                        </LogoutIcon>
                    </FormSide>
                    <SliderSide>
                        <SlideShow />
                    </SliderSide>
                </LoginSection>
            </PatientLoginBase>
        </DefaultLayout>
    );
}

export default PatientLogin;