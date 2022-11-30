import { DoctorLoginBase, FormContent, FormSide, FormWrapper, LoginSection, SliderSide, Title } from "../pageStyles/DoctorLogin.style";

import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";

const DoctorLogin = () => {
    return (

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

    );
}

export default DoctorLogin;