import { IconWrapper, LoginBase, LoginSide, SliderSide, Title } from "../Styles/Login.style";

import { AuthContext } from "..//..//..//Context/AuthContext"
import DefaultBox from "../../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../../Components/DefaultLayout/DefaultLayout";
import { Link } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";
import React from "react";
import { useContext } from "react";

const Login = () => {
    const {
        user,
        setUser,
        setUserIndex,
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
                            setRole={setRole}
                            title={"Doctor Login"}
                        />

                        <IconWrapper>
                            <Link component={Link} to={'/'}>
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