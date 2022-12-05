import { ContentWrapper, FormWrapper, Label, LoginSide, PatientLoginBase, SliderSide } from "../pageStyles/PatientLogin.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
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
                                <LoginForm title={"Patient"} buttonLabel={"Login"} />
                            </LoginSide>
                            <Label>
                                Don't you have an account? <span style={{ fontWeight: "700", cursor: "pointer" }} >Sign Up Here!</span>
                            </Label>
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