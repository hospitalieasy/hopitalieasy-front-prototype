import { IconWrapper, Label, LoginBase, LoginSide, SignUpWrapper, SliderSide, Title } from "../Styles/Login.style";

import { AuthContext } from "..//..//..//Context/AuthContext"
import DefaultBox from "../../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import Popper from "../../../Components/SignUpForm/Popper";
import React from "react";
import SlideShowLogin from "../../../Components/SlideShow/SlideShowLogin";
import { useContext } from "react";

const Login = () => {
    const {
        user,
        setUser,
        setUserIndex,
        setUserId,
        setRole,
    } = useContext(AuthContext);

    return (
        <DefaultLayout>
            <LoginBase>
                <DefaultBox
                    display={"flex"}
                    width={"90%"}
                    height={"90%"}
                    background={"#fff"}
                >
                    <LoginSide>
                        <Title>Welcome to Hospitaleasy!</Title>

                        <LoginForm
                            user={user}
                            setUser={setUser}
                            setUserIndex={setUserIndex}
                            setUserId={setUserId}
                            setRole={setRole}
                            title={"Patient Login"}
                        />

                        <SignUpWrapper>
                            <Label>Don't you have an account?</Label>
                            <Popper
                                user={user}
                                setUser={setUser}
                                setUserIndex={setUserIndex}
                                setUserId={setUserId}
                            />
                        </SignUpWrapper>
                        <IconWrapper>
                            <Link component={Link} to={'/'}>
                                <img src="https://img.icons8.com/ios-filled/42/null/logout-rounded-left.png" alt="" />
                            </Link>
                        </IconWrapper>
                    </LoginSide>
                    <SliderSide>
                        <SlideShowLogin />
                    </SliderSide>
                </DefaultBox>
            </LoginBase>
        </DefaultLayout >
    );
}

export default Login;