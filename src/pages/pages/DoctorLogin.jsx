import { DoctorLoginBase, FormContent, FormSide, FormWrapper, LoginSection, SliderSide, Title } from "../pageStyles/DoctorLogin.style";

import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";
import SlideShow from "../../Components/SlideShow/SlideShow";

const DoctorLogin = () => {
    return (
        <DefaultLayout>
            <DoctorLoginBase>
                <LoginSection>
                    <FormSide>
                        <FormContent>
                            <Title>Doctor Login</Title>
                            <FormWrapper>
                                <LoginForm />
                            </FormWrapper>
                        </FormContent>
                    </FormSide>
                    <SliderSide>
                        <SlideShow />
                    </SliderSide>
                </LoginSection>
            </DoctorLoginBase>
        </DefaultLayout>
    );
}

export default DoctorLogin;