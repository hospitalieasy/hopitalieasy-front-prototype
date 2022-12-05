import { ContentWrapper, FormWrapper, IconWrapper, Label, LoginSide, PatientLoginBase, SliderSide } from "../pageStyles/PatientLogin.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";
import SlideShow from "../../Components/SlideShow/SlideShow";

const PatientLogin = () => {
    return (
        <DefaultLayout>
            <PatientLoginBase>
                <DefaultBox>
                    <FormWrapper>
                        <ContentWrapper>
                            <LoginSide>
                                <LoginForm title={"Patient Login"} buttonLabel={"Login"} address={"/patient-screen"} />
                            </LoginSide>
                            <Label>
                                <Link style={{ textDecoration: "none", color: "inherit" }} component={Link} to={'/patient-sign-up'}>
                                    Don't you have an account? <span style={{ fontWeight: "700", cursor: "pointer" }} >Sign Up Here!</span>
                                </Link>
                            </Label>
                            <IconWrapper>
                                <Link component={Link} to={'/'}>
                                    <img src="https://img.icons8.com/ios-filled/42/null/logout-rounded-left.png" alt="" />
                                </Link>
                            </IconWrapper>
                        </ContentWrapper>
                        <SliderSide>
                            <SlideShow />
                        </SliderSide>
                    </FormWrapper>
                </DefaultBox>
            </PatientLoginBase>
        </DefaultLayout >
    );
}

export default PatientLogin;