import { AUTH_FAIL, AUTH_PROCESS, AUTH_SUCCESS, INITIAL_STATE, MISSING_INPUTS, SET_DATA, SET_USER, loginReducer } from "../../Hooks/Reducer/loginReducer";
import { Button, TextField } from "@mui/material";
import { LoginFormBase, Title } from "./LoginForm.style"
import React, { useEffect, useReducer } from "react";

import Loading from "../Loading/Loading";
import SnackBar from "..//SnackBar/SnackBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
    const {
        setUser,
        setUserIndex,
        setRole,
        title,
    } = props;

    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
    const navigate = useNavigate();

    /* choosing role and fetching API */
    let END_POINT;
    useEffect(() => {
        if (title === "Doctor Login") {
            setRole("doctor");
            END_POINT = `http://localhost:3002/doctors`;
        } else {
            setRole("patient");
            END_POINT = `http://localhost:3002/patients`;
        }

        axios.get(END_POINT)
            .then((response) => { dispatch({ type: SET_DATA, payload: response.data }) })
            .catch((error) => console.log(error));
    }, [END_POINT])


    /* gets the data from server and checks is there any match user */
    const authHandler = async (e) => {
        e.preventDefault();

        const user = {
            email: state.user.email,
            password: state.user.password,
        };
        const data = state.data;

        dispatch({ type: SET_USER, payload: user });
        dispatch({ type: SET_DATA, payload: data });

        if ((user.email !== "") || (user.password !== "")) {
            dispatch({ type: AUTH_PROCESS });
            let index = 0;
            let isMatchFound = false;
            while (index < data.length && !isMatchFound) {
                if ((user.email === data[index].Email) && (user.password === data[index].Password)) {
                    dispatch({ type: AUTH_SUCCESS });
                    setUserIndex(index);
                    setTimeout(() => {
                        setUser(true);
                        navigate("/app-screen");
                    }, 2000);
                    isMatchFound = true;
                }
                index++;
            }
            if (!isMatchFound) {
                dispatch({ type: AUTH_FAIL });
            }
        } else {
            dispatch({ type: MISSING_INPUTS });
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
            {state.loading && <Loading loading={state.loading} />}
            {state.message && <SnackBar message={state.message} />}
        </LoginFormBase>
    );
}

export default LoginForm;