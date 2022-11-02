import { DoctorLoginBase, FormContent, FormSide, FormWrapper, Label, LoginSection, SliderSide, Title } from "../pageStyles/DoctorLogin.style";

import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";

const DoctorLogin = () => {
    return (
        <DefaultLayoutFirst>
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
                    </SliderSide>
                </LoginSection>
            </DoctorLoginBase>
        </DefaultLayoutFirst>
    );
}

export default DoctorLogin;