import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import { INITIAL_STATE, IS_EMAIL_UNIQUE, SET_DATA, SET_TERM, SET_USER, VALIDATION_PROCESS, signReducer } from "../../Hooks/Reducer/signReducer";
import React, { useEffect, useReducer } from "react";
import { Switch, TextField } from "@mui/material";

import { Button } from "@mui/material";
import Terms from "../Terms/Terms";
import axios from "axios";
import { userSchema } from "../../FormValidation/UserValidation";

const SignUpForm = () => {
    const [state, dispatch] = useReducer(signReducer, INITIAL_STATE);

    /* checks is there are any exist email */
    useEffect(() => {
        axios.get(
            `http://localhost:3002/users`
        ).then((response) => {
            dispatch({ type: SET_DATA, payload: response.data })
        }).catch((error) => {
            console.log(error);
        })

        if (!(state.user.email === "")) {
            let index = 0;
            while (index < state.data.length) {
                if ((state.data[index].Email === state.user.email)) {
                    dispatch({ type: IS_EMAIL_UNIQUE, payload: false })
                    break;
                }

                if ((state.data[index].Email !== state.user.email)) {
                    dispatch({ type: IS_EMAIL_UNIQUE, payload: true })
                }

                if (index === (state.data.length - 1)) {
                    break;
                }
                index++;
            }
        }

    }, [state.data, state.user.email])

    const inputValidator = async () => {
        dispatch({ type: VALIDATION_PROCESS })
        const { name, surname, birthdate, email, password, telno } = state.user;

        let goingData = {
            Name: name,
            Surname: surname,
            Birthdate: birthdate,
            Email: email,
            Password: password,
            Telno: telno,
        };

        if (state.emailUnique && state.term) {
            await userSchema.isValid(goingData).then(() => {
                try {
                    axios.post(`http://localhost:3002/users`, goingData)
                } catch {

                }
            })
        }
    }

    const acceptTerm = () => {
        if (state.term) {
            dispatch({ type: SET_TERM, payload: false });
        } else {
            dispatch({ type: SET_TERM, payload: true });
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

                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Label>
                        <Switch onClick={acceptTerm} color="warning" />
                        <Text>Accept Terms</Text>
                    </Label>
                    <Terms />
                </UserAcceptContent>

                <Button onClick={inputValidator} className="sign-pop" variant="contained" color="success">
                    SIGN UP
                </Button>

            </FormWrapper>
        </SingUpFormBase >
    );
}

export default SignUpForm;