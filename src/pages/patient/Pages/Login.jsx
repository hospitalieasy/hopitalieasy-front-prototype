import { IconWrapper, LoginBase, LoginSide, SignUpWrapper, SliderSide, Title } from "../Styles/Login.style";

import DefaultBox from "../../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import React from "react";
import SignUpPop from "../../../Components/SignUpPop/SignUpPop";
import SlideShow from "../../../Components/SlideShow/SlideShow";

const Login = () => {
    return (
        <DefaultLayout>
            <LoginBase>
                <DefaultBox display={"flex"} width={"90%"} height={"90%"} background={"#fff"}>
                    <LoginSide>
                        <Title>Welcome to Hospitalieasy!</Title>
                        <LoginForm title={"Patient"} address={"/app-screen"} />
                        <SignUpWrapper>
                            Don't you have an account? <SignUpPop />
                        </SignUpWrapper>
                        <IconWrapper>
                            <Link component={Link} to={'/'}>
                                <img src="https://img.icons8.com/ios-filled/42/null/logout-rounded-left.png" alt="" />
                            </Link>
                        </IconWrapper>
                    </LoginSide>
                    <SliderSide>
                        <SlideShow color={"#fff"} padding={"120px 30px"} />
                    </SliderSide>
                </DefaultBox>
            </LoginBase>
        </DefaultLayout >
    );
}

export default Login;