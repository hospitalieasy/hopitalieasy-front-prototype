import { EMAIL_EXIST, EMAIL_IS_NOT_UNIQUE, INITIAL_STATE, MISSING_INPUTS, SET_DATA, SET_USER, VALIDATION_FAIL, VALIDATION_PROCESS, VALIDATION_SUCCESS, signReducer } from "../../Hooks/Reducer/signReducer";
import { FormWrapper, SingUpFormBase, Title } from "./SignUpForm.style"
import React, { useEffect, useReducer } from "react";

import { Button } from "@mui/material";
import Loading from "../Loading/Loading";
import SnackBar from "../SnackBar/SnackBar";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../FormValidation/UserValidation";

const SignUpForm = (props) => {
    const { setUser, setUserIndex } = props;
    const [state, dispatch] = useReducer(signReducer, INITIAL_STATE);

    // fetching API
    useEffect(() => {
        axios.get(
            `http://localhost:3002/users`
        ).then((response) => {
            dispatch({ type: SET_DATA, payload: response.data })
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    /* checks is there are any exist email */
    useEffect(() => {
        if (!(state.user.email === "")) {
            let index = 0;
            let flag = true;
            while (index < state.data.length) {
                if ((state.data[index].Email === state.user.email)) {
                    dispatch({ type: EMAIL_IS_NOT_UNIQUE, payload: false })
                    flag = false;
                }
                index++;
            }
            if (flag) {
                dispatch({ type: EMAIL_IS_NOT_UNIQUE, payload: true })
            }
        }
    }, [state.user.email, state.emailUnique])

    // finds new users information after signed up
    useEffect(() => {
        axios.get(
            `http://localhost:3002/users`
        ).then((response) => {
            dispatch({ type: SET_DATA, payload: response.data })
        }).catch((error) => {
            console.log(error);
        })

        let index = 0;
        while (index < state.data.length) {
            if ((state.user.email === state.data[index].Email) && (state.user.password === state.data[index].Password)) {
                setUserIndex(index);
            }
            index++;
        }
    }, [state.data]);

    const navigate = useNavigate();

    const inputValidator = async () => {
        const { name, surname, birthdate, email, password, telno } = state.user;

        if (name && surname && birthdate && email && password && telno) {
            dispatch({ type: VALIDATION_PROCESS })

            if (state.emailUnique) {

                let goingData = {
                    Name: name,
                    Surname: surname,
                    Birthdate: birthdate,
                    Email: email,
                    Password: password,
                    Telno: telno,
                };

                const isValid = await userSchema.isValid(goingData)

                if (isValid) {
                    try {
                        axios.post(`http://localhost:3002/users`, goingData)
                        dispatch({ type: VALIDATION_SUCCESS })

                        setTimeout(() => {
                            setUser(true);
                            navigate("/app-screen");
                        }, 2000)

                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    dispatch({ type: VALIDATION_FAIL })
                }

            } else {
                dispatch({ type: EMAIL_EXIST })
            }

        } else {
            dispatch({ type: MISSING_INPUTS })
        }
    }

    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>

                <TextField name="name" id="outlined-basic-1" label="Name" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    dispatch({
                        type: SET_USER,
                        payload: {
                            name: e.target.name,
                            value: e.target.value,
                        }
                    })
                } />

                <TextField name="surname" id="outlined-basic-2" label="Surname" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    dispatch({
                        type: SET_USER,
                        payload: {
                            name: e.target.name,
                            value: e.target.value,
                        }
                    })
                } />

                <TextField name="birthdate" id="outlined-basic-3" label="XX/XX/XXXX" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    dispatch({
                        type: SET_USER,
                        payload: {
                            name: e.target.name,
                            value: e.target.value,
                        }
                    })
                } />

                <TextField name="email" id="outlined-basic-4" label="E-mail" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    dispatch({
                        type: SET_USER,
                        payload: {
                            name: e.target.name,
                            value: e.target.value,
                        }
                    })
                } />

                <TextField name="password" id="outlined-password-input-5" label="Password (at least 5 character)" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    dispatch({
                        type: SET_USER,
                        payload: {
                            name: e.target.name,
                            value: e.target.value,
                        }
                    })
                } />

                <TextField name="telno" id="outlined-basic-6" label="Tel-no" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    dispatch({
                        type: SET_USER,
                        payload: {
                            name: e.target.name,
                            value: e.target.value,
                        }
                    })
                } />

                <Button onClick={inputValidator} className="sign-pop" variant="contained" color="success">
                    SIGN UP
                </Button>

                {state.message && <SnackBar message={state.message} />}
                {state.loading && <Loading loading={state.loading} />}
            </FormWrapper>
        </SingUpFormBase >
    );
}

export default SignUpForm;