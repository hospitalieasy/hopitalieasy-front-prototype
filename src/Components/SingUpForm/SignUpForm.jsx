import "..//..//Utilities/Style/Button.css"

import * as yup from "yup";

import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Switch, TextField } from "@mui/material";

import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import { Button } from "@mui/material";
import Terms from "../Terms/Terms";
import { async } from "q";
import axios from "axios";
import { userSchema } from "../../Utilities/Validations/UserValidation";

// TODO: post the user with correct validation and get the index of user so that you can set it
//TODO: make notification when inputs are invalid

const SignUpForm = (props) => {
    const {
        user,
        setUser,
        setUserIndex,
    } = props;

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [telno, setTelno] = useState();
    const [validInput, setValidInput] = useState();

    let goingData = {
        Name: name,
        Surname: surname,
        Birthdate: birthdate,
        Email: email,
        Password: password,
        Telno: telno,
    };

    const navigate = useNavigate();

    const postData = async (e) => {

        const response = await axios.post(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`, goingData
        );
        console.log("post is working")
        setTimeout(() => {
            navigate("/app-screen")
        }, 2000);


    }

    const checkInputs = async () => {
        let formData = {
            name: name,
            surname: surname,
            birthdate: birthdate,
            email: email,
            password: password,
            telno: telno,
        }

        const isValid = await userSchema.isValid(formData);
        setValidInput(isValid);

        if (isValid) {
            setUser(true)
        } else {
            alert("inputs are not correct")
        }
    }

    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>

                <TextField id="outlined-basic-1" label="Name" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setName(e.target.value)} />

                <TextField id="outlined-basic-2" label="Surname" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setSurname(e.target.value)} />

                <BasicDatePicker onChange={(e) => setBirthdate(e.target.value)} />

                <TextField id="outlined-basic-4" label="E-mail" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setEmail(e.target.value)} />

                <TextField id="outlined-password-input-5" label="Password" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField id="outlined-basic-6" label="Tel-no" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setTelno(e.target.value)} />

                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Switch defaultChecked color="warning" />
                    <Label>
                        <Text>Accept Terms</Text>
                        <Terms />
                    </Label>
                </UserAcceptContent>

                <Button onClick={checkInputs} className="sign" variant="contained" color="success">
                    {/* <span style={{ width: "100%", height: "100%" }} onClick={postData} >SIGN UP</span> */}
                    SIGN UP
                </Button>

            </FormWrapper>
        </SingUpFormBase >
    );
}

export default SignUpForm;