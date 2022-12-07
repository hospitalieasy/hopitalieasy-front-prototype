import { ContentWrapper, FormWrapper, IconWrapper, Label, LoginSide, PatientLoginBase, SliderSide } from "../general/styles/PatientLogin.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";
import SignUpPop from "../../Components/SignUpPop/SignUpPop";
import SlideShow from "../../Components/SlideShow/SlideShow";

const PatientLogin = () => {
    return (
        <DefaultLayout>
            <PatientLoginBase>
                <DefaultBox width={"90%"} height={"90vh"} background={"#fff"}>
                    <FormWrapper>
                        <ContentWrapper>
                            <LoginSide>
                                <LoginForm title={"Patient Login"} buttonLabel={"Login"} address={"/patient-screen"} width={"70%"} height={"70%"} fontSize={"30px"} label={" password"} />
                            </LoginSide>
                            <Label>
                                Don't you have an account? <SignUpPop />
                            </Label>
                            <IconWrapper>
                                <Link component={Link} to={'/'}>
                                    <img src="https://img.icons8.com/ios-filled/42/null/logout-rounded-left.png" alt="" />
                                </Link>
                            </IconWrapper>
                        </ContentWrapper>
                        <SliderSide>
                            <SlideShow padding={"60px 130px"} />
                        </SliderSide>
                    </FormWrapper>
                </DefaultBox>
            </PatientLoginBase>
        </DefaultLayout >
    );
}

export default PatientLogin;