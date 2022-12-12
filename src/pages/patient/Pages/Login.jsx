import { IconWrapper, LoginBase, LoginSide, SignUpWrapper, SliderSide, Title } from "../Styles/Login.style";

import { AuthContext } from "..//..//..//Utilities/Context/Auth/AuthContext"
import DefaultBox from "../../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import React from "react";
import SignUpPop from "../../../Components/SignUpPop/SignUpPop";
import SlideShow from "../../../Components/SlideShow/SlideShow";
import { useContext } from "react";

const Login = () => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        setUserIndex,
    } = useContext(AuthContext);

    return (
        <DefaultLayout>
            <LoginBase>
                <DefaultBox display={"flex"} width={"90%"} height={"90%"} background={"#fff"}>
                    <LoginSide>
                        <Title>Welcome to Hospitalieasy!</Title>

                        <LoginForm
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            user={user}
                            setUser={setUser}
                            setUserIndex={setUserIndex}

                            padding={"25px"}
                            width={"65%"}
                            height={"60%"}
                            buttonLabel={"LOGIN"}
                            title={"Patient Login"}
                            fontSize={"28px"}
                            text={"password"}
                        />

                        <SignUpWrapper>
                            Don't you have an account? <SignUpPop />
                        </SignUpWrapper>
                        <IconWrapper>
                            <Link component={Link} to={'/home'}>
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