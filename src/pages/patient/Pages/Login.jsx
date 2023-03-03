import { IconWrapper, Label, LoginBase, LoginSide, SignUpWrapper, SliderSide, Title } from "../Styles/Login.style";

import { AuthContext } from "..//..//..//Context/Auth/AuthContext"
import DefaultBox from "../../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import React from "react";
import SignUpPop from "../../../Components/SignUpPop/SignUpPop";
import { useContext } from "react";

const Login = () => {
    const {
        user,
        setUser,
        setUserIndex,
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
                            title={"Patient Login"}
                        />

                        <SignUpWrapper>
                            <Label>Don't you have an account?</Label>
                            <SignUpPop
                                user={user}
                                setUser={setUser}
                                setUserIndex={setUserIndex}
                            />
                        </SignUpWrapper>
                        <IconWrapper>
                            <Link component={Link} to={'/home'}>
                                <img src="https://img.icons8.com/ios-filled/42/null/logout-rounded-left.png" alt="" />
                            </Link>
                        </IconWrapper>
                    </LoginSide>
                    <SliderSide>

                    </SliderSide>
                </DefaultBox>
            </LoginBase>
        </DefaultLayout >
    );
}

export default Login;