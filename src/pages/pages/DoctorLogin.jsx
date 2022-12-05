import { DoctorLoginBase, FormWrapper, LoginSide, SliderSide } from "../pageStyles/DoctorLogin.style";

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout";
import LoginForm from "../../Components/LoginForm/LoginForm";
import React from "react";
import SlideShow from "../../Components/SlideShow/SlideShow";

const DoctorLogin = () => {
    return (
        <DefaultLayout>
            <DoctorLoginBase>
                <DefaultBox>
                    <FormWrapper>
                        <LoginSide>
                            <LoginForm title={"Doctor"} buttonLabel={"Login"} />
                        </LoginSide>
                        <SliderSide>
                            <SlideShow />
                        </SliderSide>
                    </FormWrapper>
                </DefaultBox>
            </DoctorLoginBase>
        </DefaultLayout>
    );
}

export default DoctorLogin;