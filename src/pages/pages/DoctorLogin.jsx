import { DoctorLoginBase, FormContent, FormSide, FormWrapper, LoginSection, LogoutIcon, SliderSide, Title } from "../pageStyles/DoctorLogin.style";

import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
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
            </DoctorLoginBase>
        </DefaultLayout>
    );
}

export default DoctorLogin;