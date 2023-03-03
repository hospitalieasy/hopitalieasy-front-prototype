import "..//..//Utilities/Style/Button.css"

import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import { INITIAL_STATE, apiPostReducer } from "../../Hooks/Reducer/postReducer";
import React, { useEffect, useReducer, useState } from "react";
import { Switch, TextField } from "@mui/material";

import { Button } from "@mui/material";
import Terms from "../Terms/Terms";
import axios from "axios";
import { userSchema } from "../../FormValidation/UserValidation";

//TODO: replace the alert bar with notification bar

const SignUpForm = () => {

    /* sets the user inputs from texts */
    const [inputData, setInputData] = useState({
        name: "",
        surname: "",
        birthdate: "",
        email: "",
        password: "",
        telno: "",
    })

    /* end point url */
    /* const API_ENDPOINT = 'https://hospitaleasyapi.azurewebsites.net/api/Patient'; */

    /* sets the email true or false */
    const [emailExist, setEmailExist] = useState();

    /* useReducer hook fetching the data states */
    const [state, dispatch] = useReducer(apiPostReducer, INITIAL_STATE);

    /* checks is there are any exist email */
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get(
                ``
            ).then(response => {
                dispatch({ type: "FETCH_SUCCESS", payload: response.data })
            }).catch(error => {
                dispatch({ type: "FETCH_ERROR" })
            })

            if (!(inputData.email == "")) {
                let index = 0;
                while (index < response.data.length) {
                    if ((response.data[index].Email == inputData.email)) {
                        setEmailExist(true)
                        break;
                    }

                    if ((response.data[index].Email !== inputData.email)) {
                        setEmailExist(false)
                    }

                    if (index === (response.data.length - 1)) {
                        break;
                    }
                    index++;
                }
            }
        }

        if (state.error) {
            console.log("Data fetch went wrong in AppBar");
        }

        getData();

    }, [inputData.email])

    const checkInputs = async () => {
        /* form validation */
        let formData = {
            name: inputData.name,
            surname: inputData.surname,
            birthdate: inputData.birthdate,
            email: inputData.email,
            password: inputData.password,
            telno: inputData.telno,
        }

        const isValid = await userSchema.isValid(formData);

        if (isValid && !emailExist && terms) {
            /* sets the data from user */
            let goingData = {
                Name: inputData.name,
                Surname: inputData.surname,
                Birthdate: inputData.birthdate,
                Email: inputData.email,
                Password: inputData.password,
                Telno: inputData.telno,
            };
            const postData = async (e) => {
                const response = await axios.post(
                    ``, goingData
                ).catch(error => (console.log("Post method went wrong in SignUpForm" + error)))
            }
            postData();
            alert("Signed up successfully")
            setInputData({
                ...inputData,
                email: "",
            })
        } else if (!terms && !isValid) {
            alert("Inputs are not valid")
        } else if (!terms && isValid) {
            alert("Please accept the terms")
        } else if (emailExist) {
            alert("This e-mail address is exist please enter another one")
        } else {
            alert("Inputs are not valid")
        }
    }

    /* checks the terms condition */
    const [terms, setTerms] = useState();

    /* terms validation */
    const acceptHandler = () => {
        if (terms) {
            setTerms(false)
        } else {
            setTerms(true)
        }
    }

    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>

                <TextField id="outlined-basic-1" label="Name" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    setInputData({
                        ...inputData,
                        name: e.target.value,
                    })
                } />

                <TextField id="outlined-basic-2" label="Surname" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    setInputData({
                        ...inputData,
                        surname: e.target.value,
                    })
                } />

                <TextField id="outlined-basic-3" label="XX/XX/XXXX" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    setInputData({
                        ...inputData,
                        birthdate: e.target.value,
                    })
                } />

                <TextField id="outlined-basic-4" label="E-mail" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    setInputData({
                        ...inputData,
                        email: e.target.value,
                    })
                } />

                <TextField id="outlined-password-input-5" label="Password (at least 5 character)" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    setInputData({
                        ...inputData,
                        password: e.target.value,
                    })
                } />

                <TextField id="outlined-basic-6" label="Tel-no" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) =>
                    setInputData({
                        ...inputData,
                        telno: e.target.value,
                    })
                } />

                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Label>
                        <Switch onClick={acceptHandler} color="warning" />
                        <Text>Accept Terms</Text>
                    </Label>
                    <Terms />
                </UserAcceptContent>

                <Button onClick={checkInputs} className="sign-pop" variant="contained" color="success">
                    SIGN UP
                </Button>

            </FormWrapper>
        </SingUpFormBase >
    );
}

export default SignUpForm;