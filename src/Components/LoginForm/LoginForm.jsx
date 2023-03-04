import { AUTH_FAIL, AUTH_PROCESS, AUTH_SUCCESS, INITIAL_STATE, SET_DATA, SET_USER, loginReducer } from "../../Hooks/Reducer/loginReducer";
import { Button, TextField } from "@mui/material";
import { LoginFormBase, Title } from "./LoginForm.style"
import React, { useEffect, useReducer } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
    const {
        user,
        setUser,
        setUserIndex,
        title,
    } = props;

    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

    /* fetching API */
    useEffect(() => {
        axios.get('https://hospitaleasyapi.azurewebsites.net/api/Patient')
            .then((response) => { dispatch({ type: SET_DATA, payload: response.data }) })
            .catch((error) => console.log(error));
    }, [])

    const navigate = useNavigate();

    /* gets the data from server and checks is there any match user */
    const authHandler = async (e) => {
        e.preventDefault();

        dispatch({ type: AUTH_PROCESS, payload: true });

        const user = {
            email: state.user.email,
            password: state.user.password,
        };

        const data = state.data;

        await dispatch({ type: SET_USER, payload: user });
        await dispatch({ type: SET_DATA, payload: data });

        if (user.email !== "" && user.password !== "") {
            let index = 0;
            while (index < data.length) {
                if (
                    data[index].Email === user.email &&
                    data[index].Password === user.password
                ) {
                    dispatch({
                        type: AUTH_SUCCESS,
                        payload: {
                            loading: false,
                            message: {
                                color: "green",
                                text: "Logged Successfully",
                                icon: "success",
                            },
                        },
                    });
                    setUserIndex(index);
                    setTimeout(() => {
                        setUser(true);
                        navigate("/app-screen");
                    }, 2000);
                    break;
                } else {
                    dispatch({
                        type: AUTH_FAIL,
                        payload: {
                            loading: false,
                            message: {
                                color: "red",
                                text: "Information's are not correct",
                                icon: "error",
                            },
                        },
                    });
                }
                index++;
            }
        }
    };

    return (
        <LoginFormBase>
            <Title>{title}</Title>
            <TextField name="email" id="outlined-basic" label="E-mail" variant="standard" onChange={(e) =>
                dispatch({
                    type: SET_USER,
                    payload: {
                        name: e.target.name,
                        value: e.target.value,
                    }
                })
            }
            />
            <TextField name="password" id="outlined-password-input" label="Password" type={"password"} autoComplete={"current-password"} variant="standard" onChange={(e) =>
                dispatch({
                    type: SET_USER,
                    payload: {
                        name: e.target.name,
                        value: e.target.value,
                    }
                })
            }
            />
            <Button onClick={authHandler} className="login" variant="contained">LOGIN</Button>
        </LoginFormBase>
    );
}

export default LoginForm;