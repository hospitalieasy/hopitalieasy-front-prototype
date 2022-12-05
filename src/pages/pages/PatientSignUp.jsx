import { ContentWrapper, FormWrapper, IconWrapper, Label, LoginSide, PatientSignUpBase, SliderSide } from "../pageStyles/PatientSignUp.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import React from "react";
import SignUpForm from "..//..//Components/SingUpForm/SignUpForm"
import SlideShow from "../../Components/SlideShow/SlideShow";

const PatientSignUp = () => {
    return (
        <DefaultLayout>
            <PatientSignUpBase>
                <DefaultBox>
                    <FormWrapper>
                        <ContentWrapper>
                            <LoginSide>
                                <SignUpForm />
                            </LoginSide>
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
            </PatientSignUpBase>
        </DefaultLayout >
    );
}

export default PatientSignUp;